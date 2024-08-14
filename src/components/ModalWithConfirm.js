import Modal from "./Modal.js";

export default class ModalWithConfirm extends Modal {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this.handleFormSubmit = handleFormSubmit;
  }

  open(card) {
    this.card = card;
    console.log(this.card._id);
    super.open(this._modal);
  }

  close() {
    super.close(this._modal);
  }

  setEventListeners() {
    super.setEventListeners();
    this._modal.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit(this.card);
    });
  }
}
