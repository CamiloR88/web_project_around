//cerrar modal
function handleModalClose() {
  profileModal.close();
  cardModal.close();
  imageModal.close();
}
// cerrar modal con dblclick
const modalList = Array.from(document.querySelectorAll(".modal"));

modalList.forEach((modal) => {
  modal.addEventListener("dblclick", (evt) => {
    if (evt.target === modal) {
      handleModalClose();
    }
  });
});

//cerrar modales por X btn
const modalCloseList = Array.from(
  document.querySelectorAll(".popup__close-btn")
);
modalCloseList.forEach((xBtn) => {
  console.log(xBtn);
  xBtn.addEventListener("click", () => {
    handleModalClose();
  });
});
