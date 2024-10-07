//Cards
const initialCards = [
  {
    name: "Vintage",
    link: "https://images.unsplash.com/photo-1530642901805-fdb3c28754b8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    name: "Multicolor",
    link: "https://images.unsplash.com/photo-1550853123-b81beb0b1449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZyb2d8ZW58MHx8MHx8fDA%3D",
  },
];

const cardList = document.querySelector(".elements__container");
const popupElement = document.querySelector(".popup__image");
const popupCloseButton = document.querySelector(".popup__close-btn");
const popupImage = document.querySelector(".popup__image-render");

class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenModal() {
    popupElement.showModal();
  }

  _handleCloseModal() {
    popupElement.close();
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenModal();
    });

    popupCloseButton.addEventListener("click", () => {
      this._handleCloseModal();
    });
  }
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;

    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._image})`;
    this._element.querySelector(".card__title").textContent = this._title;

    return this._element;
  }
}

const renderElements = (isGrid) => {
  cardList.innerHTML = "";
  initialCards.forEach((card) => {
    ew;

    const cardElement = card.generateCard();
    cardList.prepend(cardElement);
  });
};

renderElements();
