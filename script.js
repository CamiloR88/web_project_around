const modal = document.querySelector(".popup");
const openModal = document.querySelector(".profile__edit-btn");
const saveModal = document.querySelector(".popup__save-btn");
const closeModal = document.querySelector(".popup__close-btn");

function handleCloseModal() {
  modal.setAttribute("style", "display: none");
}

openModal.addEventListener("click", () => {
  modal.showModal();
});
closeModal.addEventListener("click", handleCloseModal);
