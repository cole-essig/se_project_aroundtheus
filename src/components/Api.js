export default class Api {
  constructor(info) {
    this._baseUrl = info.baseUrl;
    this._headers = info.headers;
    this._avatar = info.avatar;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async getIntitialCards() {
    const response = await fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    });
    return await this._checkResponse(response);
  }

  async getUserInfo() {
    const response = await fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
    });
    return await this._checkResponse(response);
  }

  loadPage(userInfo, cardInfo, avatarInfo) {
    return Promise.all(userInfo, cardInfo, avatarInfo);
  }

  async deleteCard(cardId) {
    const response = await fetch(this._baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    });
    return await this._checkResponse(response);
  }
}
