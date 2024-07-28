export default class UserInfo {
  constructor(nameSelector, badgeSelector) {
    this._name = document.querySelector(nameSelector);
    this._badge = document.querySelector(badgeSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent.trim(),
      badge: this._badge.textContent,
    };
  }

  setUserInfo(name, badge) {
    this._name.textContent = name;
    this._badge.textContent = badge;
  }
}
