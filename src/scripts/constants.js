//popup del perfil
export const profileModal = document.querySelector("#popup-profile");
export const profileModalOpen = document.querySelector(".profile__edit-btn");
export const profileModalSave = document.querySelector(".popup__submit-btn");

//popup para agregar imagenes.
export const cardModal = document.querySelector("#add-card");
export const cardModalOpen = document.querySelector(".profile__add-btn");
//export const cardsContainer = document.querySelector(".elements__container");

//forms
export const profileModalForm = document.querySelector("#profileForm");
export const cardModalForm = document.querySelector("#newCardForm");
//Cards
export const initialCards = [
  {
    name: "Vintage",
    link: "https://images.unsplash.com/photo-1530642901805-fdb3c28754b8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
  {
    name: "Bosque",
    link: "https://images.unsplash.com/photo-1496060169243-453fde45943b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Vale 3",
    link: "https://images.unsplash.com/photo-1718417286278-b383b8a8ad6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Skate park",
    link: "https://images.unsplash.com/photo-1589738373432-91e2d93453a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Multicolor",
    link: "https://images.unsplash.com/photo-1550853123-b81beb0b1449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZyb2d8ZW58MHx8MHx8fDA%3D",
  },
];

export const cardsContainer = document.querySelector(".elements__container");

export const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
