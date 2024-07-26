import Modal from "./Modal.js";

export default class PopupWithForm extends Popup {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._modalForm = this._modal.querySelector(".modal__form");
    this._inputList = [...this._modalForm.querySelectorAll(".modal__input")];
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this._popupForm.reset();
    super.closeModal(this._modal);
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((inputEl) => {
      formValues[inputEl.name] = inputEl.value;
    });
    return formValues;
  }

  setEventListeners() {
    this._modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._modalForm.reset();
    });
  }
}
