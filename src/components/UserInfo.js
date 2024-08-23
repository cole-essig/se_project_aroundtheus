export default class UserInfo {
  constructor(nameSelector, badgeSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._badge = document.querySelector(badgeSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent.trim(),
      badge: this._badge.textContent,
    };
  }

  setUserInfoOnSubmit(name, badge) {
    this._name.textContent = name;
    this._badge.textContent = badge;
  }

  setUserInfo(name, badge, avatar) {
    this.setUserInfoOnSubmit(name, badge);
    this.setAvatarPic(avatar);
  }

  setAvatarPic(avatarURl) {
    this._avatar.src = avatarURl;
  }
}
