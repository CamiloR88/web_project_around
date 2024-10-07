class Modal {
  constructor(modalSelector) {
    this._modalSelector = modalSelector;
    this._modalNode = document.querySelector(this._modalSelector);
  }

  openModal() {
    showModal();
  }
  closeModal() {
    close();
  }
}

class ModalForm extends Modal() {}
class ModalImg extends Modal() {}
