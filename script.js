const modal = document.querySelector(".popup");
const openModal = document.querySelector(".edit__btn");
const closeModal = document.querySelector(".save__btn");

openModal.addEventListener("click", () => {
  modal.showModal();
});
