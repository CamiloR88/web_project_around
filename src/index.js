import {
  profileModalOpen,
  cardModalOpen,
  initialCards,
  formConfig,
  profileModalForm,
  cardModalForm,
} from "./scripts/constants.js";
import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { api } from "./scripts/Api.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import "./pages/index.css";
const profileInfo = new UserInfo(".profile__name", ".profile__position");

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
  const defaultCards = new Card(
    "#card-template",
    values.title,
    values.link,
    () => {
      imagePopup.open({ name: values.title, link: values.link });
    }
  );
  const cardElement = defaultCards.addCard();

  listCard.addItem(cardElement);
});
const editProfilePopup = new PopupWithForm("#popup-profile", (values) => {
  profileInfo.setUserInfo(values.name, values.about);
});

newCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
const imagePopup = new PopupWithImage("#show-card");
imagePopup._setEventListeners();

let listCard = null;

api.getInitialCards().then((res) => {
  listCard = new Section(
    {
      items: res,
      renderer: (card) => {
        const defaultCards = new Card(
          "#card-template",
          card.name,
          card.link,
          () => {
            imagePopup.open({ name: card.name, link: card.link });
          }
        );
        const cardElement = defaultCards.addCard();

        listCard.addItem(cardElement);
      },
    },
    ".elements__container"
  );
  listCard.renderer();
});
