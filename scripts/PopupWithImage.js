export default class PopupWithImage extends Popup {
  constructor({ data }, elementSelector) {
    this._name = data.name;
    this._link = data.link;
    this._imageSelector = document.querySelector(elementSelector);
  }
  open() {}
  close() {
    super.close();
  }
}
