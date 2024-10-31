//validacion
export class FormValidator {
  constructor(formElement, formConfig) {
    this._formElement = formElement;
    this._formConfig = formConfig;
  }

  //activa y desactiva la clase error en los elementos
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._formConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._formConfig.errorClass);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._formConfig.inputErrorClass);
    errorElement.classList.remove(this._formConfig.errorClass);
    errorElement.textContent = "";
  }
  //chequea la validez del form y manda a ejecutar (showInputError || hideInputError) segun corresponda
  _checkInputValidity(formElement, inputElement, formConfig) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement, formConfig);
    }
  }
  //comprueva si algun input tiene algun valor incorrecto
  _hasInvalidInput(inputList) {
    //some devuleve true o flase
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //intercambia el estado del boton activo y desactivo dependiendo de la validez de los inputs
  _toggleButtonState(inputList, buttonElement, formConfig) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(formConfig.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(formConfig.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _setEventListeners(formElement, formConfig) {
    const inputList = Array.from(
      formElement.querySelectorAll(this._formConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this._formConfig.submitButtonSelector
    );

    this._toggleButtonState(inputList, buttonElement, formConfig);
    //itera por el array de inputs chequeando su validez para asi activar el boton si es valido
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, formConfig);
        this._toggleButtonState(inputList, buttonElement, formConfig);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    this._setEventListeners(this._formElement, this._formConfig);
  }
}
