import {
  profileModalOpen,
  cardModalOpen,
  initialCards,
  formConfig,
  profileModalForm,
  cardModalForm,
} from "../scripts/constants.js";
import { Card } from "../scripts/Card.js";

import { FormValidator } from "../scripts/FormValidator.js";

import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";
const profileInfo = new UserInfo(".profile__name", ".profile__position");
initialCards.forEach(function (card) {
  const defaultCards = new Card("#card-template", card.name, card.link);
  defaultCards.addCard();
});

const validProfileForm = new FormValidator(profileModalForm, formConfig);

const validCardForm = new FormValidator(cardModalForm, formConfig);

validCardForm.enableValidation();
validProfileForm.enableValidation();

profileModalOpen.addEventListener("click", () => {
  editProfilePopup.open();
});
cardModalOpen.addEventListener("click", () => {
  newCardPopup.open();
});

const newCardPopup = new PopupWithForm("#add-card", (values) => {
  const defaultCards = new Card("#card-template", values.title, values.link);
  defaultCards.addCard();
});
const editProfilePopup = new PopupWithForm("#popup-profile", (values) => {
  profileInfo.setUserInfo(values.name, values.about);
});

newCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
