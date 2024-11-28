import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector("form");
  }
  _getInputValues() {
    let values = {};
    const inputList = Array.from(this._formElement.querySelectorAll("input"));
    inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }
  setEventListeners() {
    super._setEventListeners();
    this._formElement = this._popupElement.querySelector("form");

    this._formElement.addEventListener("submit", () => {
      const subBtn = this._formElement.querySelector("button");
      subBtn.textContent = "Guardando...";
      this._handleFormSubmit(this._getInputValues()).then(() => {
        this.close();
        subBtn.textContent = "Guardar";
      });
    });
  }
  close() {
    super.close();
    this._formElement.reset();
  }
}
