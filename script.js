const modal = document.querySelector(".popup");
const modalOpen = document.querySelector(".profile__edit-btn");
const modalForm = document.querySelector(".popup__form");
const modalSave = document.querySelector(".popup__save-btn");
const modalClose = document.querySelector(".popup__close-btn");
const profileInfo = document.querySelector(".profile__info");
const profileName = document.querySelector(".profile__name");
const profilePosition = document.querySelector(".profile__position");

function handleModalClose() {
  modal.close();
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  let modalInputName = document.querySelector("#name");
  let modalInputAbout = document.querySelector("#about");

  profileName.textContent = modalInputName.value;
  profilePosition.textContent = modalInputAbout.value;
  handleModalClose();
}
modalOpen.addEventListener("click", () => {
  modal.showModal();
});
modalClose.addEventListener("click", handleModalClose);

modalSave.addEventListener("click", handleFormSubmit);
