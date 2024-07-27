import Modal from "./Modal.js";

export default class ModalWithImage extends Modal {
  constructor({ title, link }) {
    super({ modalSelector });
    this._previewImageModal = this._modal.querySelector("#image-preview-modal");
    this._image = this._previewImageModal.querySelector(
      "#modal-preview-image-src"
    );
    this._text = this._previewImageModal.querySelector(
      ".modal__image-preview_text"
    );
    // const imagePreviewPicture = document.querySelector("#modal-preview-image-src");
    // const imagePreviewText = document.querySelector(".modal__image-preview_text");
    this._title = title;
    this._link = link;
  }

  open({ title, link }) {
    this._image.src = link;
    this._image.alt = title;
    this._text.textContent = title;
    super.openModal(this._modal);
    super.setEventListeners();
  }
}
