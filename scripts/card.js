import { cardsContainer, imageModal } from "./utils.js";
export class Card {
  constructor(selector, name, link) {
    this._selector = selector;
    this._name = name;
    this._link = link;
  }

  _generateTemplate() {
    const cardTemplate = document.querySelector(this._selector).content;
    this._cardElement = cardTemplate
      .querySelector(".elements__element")
      .cloneNode(true);
  }

  addCard() {
    this._generateTemplate();
    this._cardElement.querySelector(".element__name").textContent = this._name;
    this._cardElement.querySelector(".element__img").src = this._link;

    this._setEventListetener();
    cardsContainer.prepend(this._cardElement);
  }
  _like() {
    this._cardElement
      .querySelector(".element__like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_active");
      });
  }
  _remove() {
    this._cardElement
      .querySelector(".element__remove")
      .addEventListener("click", () => {
        this._cardElement.remove();
      });
  }

  _imagePopup() {
    this._cardElement
      .querySelector(".element__img")
      .addEventListener("click", () => {
        imageModal.showModal();
        imageModal.querySelector(".popup__image-render").src = this._link;
        imageModal.querySelector(".popup__image-name").textContent = this._name;
      });
  }
  _setEventListetener() {
    this._imagePopup();
    this._like();
    this._remove();
  }
}
