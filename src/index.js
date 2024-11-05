import {
  profileModalOpen,
  cardModalOpen,
  initialCards,
  formConfig,
  profileModalForm,
  cardModalForm,
  imageModal,
} from "../scripts/constants.js";
import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
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
      xPopup.open({ name: values.title, link: values.link });
    }
  );
  const cardElement = defaultCards.addCard();

  contaienerCards.addItem(cardElement);
});
const editProfilePopup = new PopupWithForm("#popup-profile", (values) => {
  profileInfo.setUserInfo(values.name, values.about);
});

newCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
const xPopup = new PopupWithImage("#show-card");
xPopup._setEventListeners();

const contaienerCards = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      const defaultCards = new Card(
        "#card-template",
        card.name,
        card.link,
        () => {
          xPopup.open({ name: card.name, link: card.link });
        }
      );
      const cardElement = defaultCards.addCard();

      contaienerCards.addItem(cardElement);
    },
  },
  ".elements__container"
);
contaienerCards.renderer();
