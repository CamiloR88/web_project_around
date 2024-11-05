import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(elementSelector) {
    super(elementSelector);
    this._name = "";
    this._link = "";
    this._imageSelector = document.querySelector(elementSelector);
  }
  open(data) {
    super.open();
    this._name = data.name;
    this._link = data.link;
    this._imageSelector.querySelector(".popup__image-render").src = this._link;
    this._imageSelector.querySelector(".popup__image-name").textContent =
      this._name;
  }
  close() {
    super.close();
  }
}
