import Popup from "./Popup";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(callback) {
    super.open();
    this._callback = callback;
  }
  _setEventListeners() {
    super._setEventListeners();
    const confirmBtn = this._popupElement.querySelector(".popup__submit-btn");
    confirmBtn.addEventListener("click", () => {
      this._callback();
    });
  }
}
