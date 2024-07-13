import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

const initialCards = [
  {
    title: "Yosemite Valley",
    link: "https://images.unsplash.com/photo-1516687401797-25297ff1462c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9zZW1pdGUlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
  },

  {
    title: "Lake Louise",
    link: "https://images.unsplash.com/photo-1539667547529-84c607280d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMGxvdWlzZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    title: "Bald Mountains",
    link: "https://images.unsplash.com/photo-1601025252036-36faf914679d?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Latemar",
    link: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhdGVtYXJ8ZW58MHx8MHx8fDA%3D",
  },

  {
    title: "Vanoise National Park",
    link: "https://images.unsplash.com/photo-1650533139610-0f4f5c0c34bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFub2lzZSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    title: "Lago di Braies",
    link: "https://images.unsplash.com/photo-1601893920895-e3ed4a655d27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFnbyUyMGRpJTIwYnJhaWVzfGVufDB8fDB8fHww",
  },
];

const cardData = {
  title: "Yosemite Valley",
  link: "https://images.unsplash.com/photo-1516687401797-25297ff1462c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9zZW1pdGUlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
};

/* ELEMENTS */
//  PROFILE ELEMENTS
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileButtonModalClose = document.querySelector("#profile-modal-close");
const profileName = document.querySelector("#profile-name");
const profileBadge = document.querySelector("#profile-badge");
const profileNameInput = document.querySelector("#profile-name-input");
const profileBadgeInput = document.querySelector("#profile-badge-input");
const profileEditForm = profileEditModal.querySelector("#modal-form-1");
// CARD ELEMENTS
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardDivEl = document.querySelector(".cards");
// CARD ADD BUTTON ELEMENTS
const cardAddButton = document.querySelector("#card-add-button");
const cardAddModal = document.querySelector("#card-add-modal");
const cardButtonModalClose = document.querySelector("#card-modal-close");
const cardTitleIput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");
const cardAddForm = cardAddModal.querySelector("#modal-form-2");
// IMAGE MODAL PREVIEW
const imagePreviewModal = document.querySelector("#image-preview-modal");
const imagePreviewModalClose = document.querySelector("#image-modal-close");

/* FUNCTIONS */

function closeWithEsc(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

function closeWithClick(e) {
  if (e.target != this) {
    return;
  }
  const openedModal = document.querySelector(".modal_opened");
  closeModal(openedModal);
}

function handleImageClick() {
  openModal(imagePreviewModal);
  imagePreviewSrc.src = cardImageEl.src;
  imagePreviewSrc.alt = `Photo of ${cardData.name}`;
  imagePreviewTitle.textContent = cardTitleEl.textContent;
}

function closeModal(modal) {
  const modalOverlay = document.querySelector(".modal_opened");
  document.removeEventListener("keydown", closeWithEsc);
  modalOverlay.removeEventListener("click", closeWithClick);
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  const modalOverlay = document.querySelector(".modal_opened");
  document.addEventListener("keydown", closeWithEsc);
  modalOverlay.addEventListener("click", closeWithClick);
}

function makeCard(cardData) {
  const card = new Card(cardData, cardTemplate, handleImageClick);
  return card.generateCard();
}

function renderCard(cardData) {
  const cardBlock = makeCard(cardData);
  cardDivEl.prepend(cardBlock);
}

function fillProfileForm() {
  profileNameInput.value = profileName.textContent.trim();
  profileBadgeInput.value = profileBadge.textContent;
}

/* Validation */

const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
const cardFormValidator = new FormValidator(validationSettings, cardAddForm);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

/* EVENT HANDLERS */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileBadge.textContent = profileBadgeInput.value;
  closeModal(profileEditModal);
}

function handleCardAddSubmit(e) {
  e.preventDefault();
  const title = cardTitleIput.value;
  const link = cardUrlInput.value;
  renderCard({ title, link });
  closeModal(cardAddModal);
  cardAddForm.reset();
}

/* EVENT LISTENERS */
// OPEN MODAL
profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  fillProfileForm();
  openModal(profileEditModal);
});

cardAddButton.addEventListener("click", () => {
  cardFormValidator.resetValidation();
  openModal(cardAddModal);
});

// CLOSE MODAL
profileButtonModalClose.addEventListener("click", () =>
  closeModal(profileEditModal)
);
cardButtonModalClose.addEventListener("click", () => closeModal(cardAddModal));

imagePreviewModalClose.addEventListener("click", () =>
  closeModal(imagePreviewModal)
);

// SUBMIT FORM
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);

/*loops*/

initialCards.forEach((cardData) => {
  const cardBlock = makeCard(cardData);
  cardDivEl.prepend(cardBlock);
});
