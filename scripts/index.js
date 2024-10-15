import { Card } from "./Card.js";
import { initialCards, formConfig } from "./utils.js";
import { Formvalidator } from "./Formvalidator.js";

//popup del perfil
const profileModal = document.querySelector("#popup-profile");
const profileModalOpen = document.querySelector(".profile__edit-btn");
const profileModalSave = document.querySelector(".popup__save-btn");
const profileName = document.querySelector(".profile__name");
const profilePosition = document.querySelector(".profile__position");

//popup para agregar imagenes.
const cardModal = document.querySelector("#add-card");
const cardModalOpen = document.querySelector(".profile__add-btn");
const cardModalSave = document.querySelector("#s-btn");
//const cardsContainer = document.querySelector(".elements__container");

//popup de la imagen
const imageModal = document.querySelector("#show-card");

//cerrar modal
function handleModalClose() {
  profileModal.close();
  cardModal.close();
  imageModal.close();
}
//forms
const profileModalForm = document.querySelector("#profileForm");
const cardModalForm = document.querySelector("#newCardForm");

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

profileModalSave.addEventListener("click", handleFormSubmit);
cardModalSave.addEventListener("click", handleFormSubmit);

//nombre y src de la nueva tarjeta
cardModalSave.addEventListener("click", function () {
  let cardTitle = document.querySelector("#title");
  let cardUrl = document.querySelector("#url");
  const defaultCards = new Card(
    "#card-template",
    cardTitle.value,
    cardUrl.value
  );
  defaultCards.addCard();

  cardTitle.value = "";
  cardUrl.value = "";
  handleModalClose();
});
//cerrar modal con X btn
const modalCloseList = Array.from(
  document.querySelectorAll(".popup__close-btn")
);
modalCloseList.forEach((xBtn) => {
  xBtn.addEventListener("click", () => {
    handleModalClose();
  });
});

// cerrar modal con dblclick
const modalList = Array.from(document.querySelectorAll(".modal"));

modalList.forEach((modal) => {
  modal.addEventListener("dblclick", (evt) => {
    if (evt.target === modal) {
      handleModalClose();
    }
  });
});

initialCards.forEach(function (card) {
  const defaultCards = new Card("#card-template", card.name, card.link);
  defaultCards.addCard();
});

const validProfileForm = new Formvalidator(profileModalForm, formConfig);

const validCardForm = new Formvalidator(cardModalForm, formConfig);

validCardForm.enableValidation();
validProfileForm.enableValidation();
