import { cardsContainer, imageModal } from "./constants.js";
export class Card {
  constructor(selector, name, link, handleClick) {
    this._selector = selector;
    this._name = name;
    this._link = link;
    this._handleClick = handleClick;
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
    return this._cardElement;
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
        this._handleClick();
      });
  }
  _setEventListetener() {
    this._imagePopup();
    this._like();
    this._remove();
  }
}
