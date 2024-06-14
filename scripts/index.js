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
const imagePreviewSrc = document.querySelector("#modal-preview-image-src");
const imagePreviewTitle = document.querySelector(".modal__image-preview_text");
// MODAL OVERLAY LISTENER
const modalOverlay = document.querySelector(".modal");

/* FUNCTIONS */

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  const likeButton = cardElement.querySelector(".heart-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImageEl.addEventListener("click", () => {
    openModal(imagePreviewModal);
    imagePreviewSrc.src = cardImageEl.src;
    imagePreviewSrc.alt = `Photo of ${cardData.name}`;
    imagePreviewTitle.textContent = cardTitleEl.textContent;
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("heart-button_active");
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.title;
  cardTitleEl.textContent = cardData.title;
  return cardElement;
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardDivEl.prepend(cardElement);
}

function fillProfileForm() {
  profileNameInput.value = profileName.textContent.trim();
  profileBadgeInput.value = profileBadge.textContent;
}
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
  fillProfileForm();
  openModal(profileEditModal);
});

cardAddButton.addEventListener("click", () => {
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

modalOverlay.addEventListener("click", () => closeModal(profileEditModal));

modalOverlay.addEventListener("keydown", () => closeModal(profileEditModal));
// SUBMIT FORM
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);

/*loops*/

initialCards.forEach((cardData) => renderCard(cardData));
