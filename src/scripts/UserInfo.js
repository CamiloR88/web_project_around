import { avatar } from "./constants";

export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatar) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
      avatar: this._avatar.src,
    };
  }

  setUserInfo(name, about, avatar) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
    this._avatar.src = avatar;
  }
}
