//validacion

//activa y desactiva la clase error en los elementos
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};
//chequea la validez del form y manda a ejecutar (showInputError || hideInputError) segun corresponda
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
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
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__save-btn_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__save-btn_inactive");
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  //hace un arry con todos los inputs del formulario
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));

  const buttonElement = formElement.querySelector(".popup__save-btn");

  toggleButtonState(inputList, buttonElement);
  //itera por el array de inputs chequeando su validez para asi activar el boton si es valido
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

export const enableValidation = () => {
  //hace un arry con los form
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  // crea el parametro formElement que luego usaremos en otras funciones
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
