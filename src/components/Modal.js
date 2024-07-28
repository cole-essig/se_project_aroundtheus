export default class Modal {
  constructor(modalSelector) {
    this._modal = document.querySelector(modalSelector);
    this._modalSelector = modalSelector;
  }

  openModal() {
    this._modal.classList.add("modal_opened");
    document.addEventListener("keydown", closeWithEsc);
    this._modal.addEventListener("click", closeWithClick);
  }

  closeModal() {
    document.removeEventListener("keydown", closeWithEsc);
    this._modal.removeEventListener("click", closeWithClick);
    this._modal.classList.remove("modal_opened");
  }

  // ADDS TO MODAL OPEN/CLOSE
  _closeWithEsc(e) {
    if (e.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      closeModal(openedModal);
    }
  }

  _closeWithClick(e) {
    if (e.target === e.currentTarget) {
      closeModal(e.currentTarget);
    }
  }

  // EVENT LISTNERS
  setEventListeners() {
    const modalCloseIcon = this._modal.querySelector(".modal__close");
    modalCloseIcon.addEventListener("click", () => closeModal(this._modal));
  }
}
