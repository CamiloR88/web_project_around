export class Card {
  constructor(
    selector,
    name,
    link,
    { _id, isLiked, owner },
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
    this._isLiked = isLiked;
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
    this._likeElement = this._cardElement.querySelector(".element__like");
    this._cardElement.querySelector(".element__name").textContent = this._name;
    this._cardElement.querySelector(".element__img").src = this._link;
    this._cardElement.querySelector(".element__img").alt = this._name;
    if (this._owner !== this._curentUser._id) {
      this._cardElement.querySelector(".element__remove").remove();
    }
    this._like();
    this._setEventListetener();
    if (this._isLiked) {
      this._likeElement.classList.add("element__like_active");
    }
    return this._cardElement;
  }

  _like() {
    this._likeElement.addEventListener("click", () => {
      if (this._isLiked) {
        this._handleUnLike().then((res) => {
          this._isLiked = res.isLiked;
          this._likeElement.classList.remove("element__like_active");
        });
      } else {
        this._handleLike().then((res) => {
          this._isLiked = res.isLiked;
          this._likeElement.classList.add("element__like_active");
        });
      }
    });
  }

  _remove() {
    this._cardElement
      .querySelector(".element__remove")
      .addEventListener("click", () => {
        this._handleDeleteCard(() => {
          this._cardElement.remove();
        });
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
