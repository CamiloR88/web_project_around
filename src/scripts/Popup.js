export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    this._popupElement.showModal();
  }
  close() {
    this._popupElement.close();
  }

  _setEventListeners() {
    const btnCloseX = this._popupElement.querySelector(".popup__close-btn");
    btnCloseX.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }
}
