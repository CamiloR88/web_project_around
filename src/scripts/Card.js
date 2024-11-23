export class Card {
  constructor(
    selector,
    name,
    link,
    { _id, likes, owner },
    curentUser,
    handleClick,
    handleLike,
    handleUnLike,
    handleDeleteCard
  ) {
    this._selector = selector;
    this._name = name;
    this._link = link;
    this._id = _id;
    this._likes = likes;
    this._owner = owner;
    this._curentUser = curentUser;

    this._handleClick = handleClick;
    this._handleLike = handleLike;
    this._handleUnLike = handleUnLike;
    this._handleDeleteCard = handleDeleteCard;
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
    if (this._owner !== this._curentUser._id) {
      this._cardElement.querySelector(".element__remove").remove();
    }
    this._like();
    this._setEventListetener();
    return this._cardElement;
  }

  _like() {
    this._cardElement
      .querySelector(".element__like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_active");
        if (this._likes.some((like) => like._id === this._curentUser._id)) {
          this._handleUnLike().then();
        } else {
          this._handleLike().then();
        }
      });
  }

  _remove() {
    this._cardElement
      .querySelector(".element__remove")
      .addEventListener("click", () => {
        this._handleDeleteCard();
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
