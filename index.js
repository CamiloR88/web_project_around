//importacion
//import {} from "./validate.js";

//Cards
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
];
//popup del perfil
const profileModal = document.querySelector("#popup-profile");
const profileModalOpen = document.querySelector(".profile__edit-btn");
const profileModalSave = document.querySelector(".popup__save-btn");
const profielModalClose = document.querySelector(".popup__close-btn");
const profileName = document.querySelector(".profile__name");
const profilePosition = document.querySelector(".profile__position");
//popup para agregar imagenes.
const cardModal = document.querySelector("#add-card");
const cardModalOpen = document.querySelector(".profile__add-btn");
const cardModalSave = document.querySelector("#s-btn");
const cardModalClose = document.querySelector("#c-btn");
const cardsContainer = document.querySelector(".elements__container");

//popup de la imagen
const imageModal = document.querySelector("#show-card");
const imageModalClose = document.querySelector("#c-img");
//cerrar modal
function handleModalClose() {
  profileModal.close();
  cardModal.close();
  imageModal.close();
}

//function para actualizar la informacion.

function handleFormSubmit(evt) {
  evt.preventDefault();
  let modalInputName = document.querySelector("#name");
  let modalInputAbout = document.querySelector("#about");

  profileName.textContent = modalInputName.value;
  profilePosition.textContent = modalInputAbout.value;
  handleModalClose();
}

profileModalOpen.addEventListener("click", () => {
  profileModal.showModal();
});
cardModalOpen.addEventListener("click", () => {
  cardModal.showModal();
});
profielModalClose.addEventListener("click", handleModalClose);
profileModalSave.addEventListener("click", handleFormSubmit);

cardModalClose.addEventListener("click", handleModalClose);
imageModalClose.addEventListener("click", handleModalClose);

//function conectar el template y hacer una tarjeta nueva

function addCard(cardTitleValue, cardUrlValue) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);

  cardElement.querySelector(".element__name").textContent = cardTitleValue;
  cardElement.querySelector(".element__img").src = cardUrlValue;
  //popup de la imagen
  cardElement.querySelector(".element__img").addEventListener("click", () => {
    imageModal.showModal();
    imageModal.querySelector(".popup__image-render").src = cardUrlValue;
    imageModal.querySelector(".popup__image-name").textContent = cardTitleValue;
  });

  //remove
  cardElement
    .querySelector(".element__remove")
    .addEventListener("click", function () {
      cardElement.remove();
    });
  //like
  cardElement
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });

  cardsContainer.prepend(cardElement);
}
//nombre y src de la nueva tarjeta
cardModalSave.addEventListener("click", function () {
  let cardTitle = document.querySelector("#title");
  let cardUrl = document.querySelector("#url");

  addCard(cardTitle.value, cardUrl.value);

  cardTitle.value = "";
  cardUrl.value = "";
});

initialCards.forEach(function (card) {
  addCard(card.name, card.link);
});

//validacion(beta)******************************validacion(beta)

//activa y desactiva la clase error en los elementos
const showInputError = (formElement, inputElement, errorMessage) => {
  console.log(inputElement.id);
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

const enableValidation = () => {
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
