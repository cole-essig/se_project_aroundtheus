export default class UserInfo {
  constructor({ nameSelector, badgeSelector }) {
    this._nameSection = nameSelector;
    this._badgeSection = badgeSelector;
  }

  getUserInfo() {
    const userName = this._nameSection.textContent;
    const userBadge = this._badgeSection.textContent;
    let userInfo = {
      name: userName,
      badge: userBadge,
    };
    return userInfo;
  }

  setUserInfo({ name, badge }) {
    this._nameSection.textContent = name;
    this._badgeSection.textContent = badge;
  }
}
