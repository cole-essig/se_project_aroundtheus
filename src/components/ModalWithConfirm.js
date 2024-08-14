import Modal from "./Modal.js";

export default class ModalWithConfirm extends Modal {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this.handleFormSubmit = handleFormSubmit;
  }

  open() {
    super.open(this._modal);
  }

  close() {
    super.close(this._modal);
  }

  setEventListeners() {
    super.setEventListeners();
    this._modal.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit(this);
    });
  }
}
