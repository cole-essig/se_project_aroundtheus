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
    await fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    }).then((res) => {
      this._checkResponse(res);
    });
  }

  async getUserInfo() {
    await fetch(this._avatar + "/users/me", {
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  loadPage(userInfo, cardInfo, avatarInfo) {
    return Promise.all(userInfo, cardInfo, avatarInfo);
  }
}
