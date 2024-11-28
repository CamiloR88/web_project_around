import {
  profileModalOpen,
  cardModalOpen,
  formConfig,
  profileModalForm,
  cardModalForm,
  avatar,
  avatarImg,
} from "./scripts/constants.js";
import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { api } from "./scripts/Api.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import "./pages/index.css";
import PopupWithConfirmation from "./scripts/PopupWithConfirmation.js";
const profileInfo = new UserInfo(
  ".profile__name",
  ".profile__about",
  ".profile__avatar"
);

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
const dltPopup = new PopupWithConfirmation("#popup-confirmation");
dltPopup._setEventListeners();

const newCardPopup = new PopupWithForm("#add-card", async (values) => {
  return api.storeCard(values.title, values.link).then((card) => {
    const defaultCards = new Card(
      "#card-template",
      card.name,
      card.link,
      card,
      curentUser,
      () => {
        imagePopup.open({ name: card.name, link: card.link });
      },
      () => {
        return api.setLike(card._id);
      },
      () => {
        return api.rmvLike(card._id);
      },
      (deleteHtmlCard) => {
        dltPopup.open(() => {
          api.removeCard(card._id).then((res) => {
            deleteHtmlCard();
          });
        });
      }
    );
    const cardElement = defaultCards.addCard();

    listCard.addItem(cardElement);
  });
});
const editProfilePopup = new PopupWithForm("#popup-profile", async (values) => {
  return api.setProfileInfo(values).then((res) => {
    profileInfo.setUserInfo(res.name, res.about, res.avatar);
  });
});
const setAvatarPopup = new PopupWithForm("#popup-avatar", async (values) => {
  return api.setProfileAvatar(values).then((res) => {
    console.log(res);
    avatarImg.src = res.avatar;
  });
});
avatar.addEventListener("click", () => {
  setAvatarPopup.open();
});
setAvatarPopup.setEventListeners();
newCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
const imagePopup = new PopupWithImage("#show-card");
imagePopup._setEventListeners();

let listCard = null;
let curentUser = null;

api.getUserInfo().then((user) => {
  profileInfo.setUserInfo(user.name, user.about, user.avatar);
  curentUser = user;
  api.getInitialCards().then((res) => {
    listCard = new Section(
      {
        items: res,
        renderer: (card) => {
          const defaultCards = new Card(
            "#card-template",
            card.name,
            card.link,
            card,
            curentUser,
            () => {
              imagePopup.open({ name: card.name, link: card.link });
            },
            () => {
              return api.setLike(card._id);
            },
            () => {
              return api.rmvLike(card._id);
            },
            (deleteHtmlCard) => {
              dltPopup.open(() => {
                api.removeCard(card._id).then((res) => {
                  deleteHtmlCard();
                });
              });
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
});
