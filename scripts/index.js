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
const cardsContainer = document.querySelector(".elements__container");

//popup de la imagen
const imageModal = document.querySelector("#show-card");

//cerrar modal
function handleModalClose() {
  profileModal.close();
  cardModal.close();
  imageModal.close();
}

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

//function conectar el template y hacer una tarjeta nueva

function addCard(card) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);

  cardElement.querySelector(".element__name").textContent = card.name;
  cardElement.querySelector(".element__img").src = card.link;

  //popup de la imagen
  cardElement.querySelector(".element__img").addEventListener("click", () => {
    imageModal.showModal();
    imageModal.querySelector(".popup__image-render").src = card.link;
    imageModal.querySelector(".popup__image-name").textContent = card.name;
  });

  //remove
  cardElement
    .querySelector(".element__remove")
    .addEventListener("click", function () {
      cardElement.remove();
    });
  //like
  cardElement
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });

  cardsContainer.prepend(cardElement);
}
//nombre y src de la nueva tarjeta
cardModalSave.addEventListener("click", function () {
  let cardTitle = document.querySelector("#title");
  let cardUrl = document.querySelector("#url");

  addCard({ name: cardTitle.value, link: cardUrl.value });

  cardTitle.value = "";
  cardUrl.value = "";
  handleModalClose();
});

initialCards.forEach(function (card) {
  addCard(card);
});
