//activa y desactiva la clase error en los elementos
export const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

export const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};
//chequea la validez del form y manda a ejuctar (showInputError || hideInputError) segun corresponda
export const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
//comprueva si el input tiene algun valor incorrecto
export const hasInvalidInput = (inputList) => {
  //some devuleve true o flase
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
//intercambia el estado del boton activo y desactivo dependiendo de la validez de los inputs
export const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
};

export const setEventListeners = (formElement) => {
  //hace un arry con todos los inputs del formulario
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  console.log(inputList);
  const buttonElement = formElement.querySelector(".form__submit");

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
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
