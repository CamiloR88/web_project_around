//importacion
import { enableValidation } from "./validate.js";

//Cards
const initialCards = [
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
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
    name: "Psst, Ya te vi dejame un LIKE.",
    link: "https://media.istockphoto.com/id/1489732075/es/foto/rana-arbor%C3%ADcola-revoltosa-sentada-en-la-rama.webp?a=1&b=1&s=612x612&w=0&k=20&c=CyuNwfpJHP8gSfqj3eifq-k1BXryGbdoZt1vaYCz1A8=",
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

// cerrar modal con dblclick
const modalList = Array.from(document.querySelectorAll(".modal"));

modalList.forEach((modal) => {
  modal.addEventListener("dblclick", (evt) => {
    if (evt.target === modal) {
      handleModalClose();
    }
  });
});

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
  handleModalClose();
});

initialCards.forEach(function (card) {
  addCard(card.name, card.link);
});
