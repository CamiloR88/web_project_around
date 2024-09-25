//validacion

//activa y desactiva la clase error en los elementos
const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  formConfig
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formConfig.errorClass);
};

const hideInputError = (formElement, inputElement, formConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formConfig.inputErrorClass);
  errorElement.classList.remove(formConfig.errorClass);
  errorElement.textContent = "";
};
//chequea la validez del form y manda a ejecutar (showInputError || hideInputError) segun corresponda
const checkInputValidity = (formElement, inputElement, formConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      formConfig
    );
  } else {
    hideInputError(formElement, inputElement, formConfig);
  }
};
//comprueva si algun input tiene algun valor incorrecto
const hasInvalidInput = (inputList) => {
  //some devuleve true o flase
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
//intercambia el estado del boton activo y desactivo dependiendo de la validez de los inputs
const toggleButtonState = (inputList, buttonElement, formConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formConfig.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(formConfig.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, formConfig) => {
  //hace un arry con todos los inputs del formulario

  const inputList = Array.from(
    formElement.querySelectorAll(formConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    formConfig.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, formConfig);
  //itera por el array de inputs chequeando su validez para asi activar el boton si es valido
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, formConfig);
      toggleButtonState(inputList, buttonElement, formConfig);
    });
  });
};

const enableValidation = (formConfig) => {
  //hace un arry con los form
  const formList = Array.from(
    document.querySelectorAll(formConfig.formSelector)
  );

  // crea el parametro formElement que luego usaremos en otras funciones
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, formConfig);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
});
