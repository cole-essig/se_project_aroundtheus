import Modal from "./Modal.js";

export default class ModalWithForm extends Modal {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._modalForm = this._modal.querySelector(".modal__form");
    this._inputList = [...this._modalForm.querySelectorAll(".modal__input")];
    this._handleFormSubmit = handleFormSubmit;
  }

  setLoading(isLoading, text) {
    const modalButton = this._modal.querySelector(".modal__button");
    console.log(modalButton);
    modalButton.textContent = isLoading ? text : "Save";
  }

  reset() {
    this._modalForm.reset();
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((inputEl) => {
      formValues[inputEl.name] = inputEl.value;
    });
    console.log(formValues);
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
