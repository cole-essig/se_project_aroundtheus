const initialCards = [
  {
    title: "Yosemite Valley",
    link: "../images/yosemite-valley.jpg",
  },

  {
    title: "Lake Louise",
    link: "../images/lake-louise.png",
  },

  {
    title: "Bald Mountains",
    link: "../images/bald-mountains.png",
  },

  {
    title: "Latemar",
    link: "../images/latemar.png",
  },

  {
    title: "Vanoise National Park",
    link: "../images/vanoise-national-park.png",
  },

  {
    title: "Lago di Braies",
    link: "../images/lago-di-braies.png",
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
const imagePreviewModalClose = document.querySelector("#card-modal-close");
const imagePreviewSrc = document.querySelector("#modal-preview-image-src");

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
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("heart-button_active");
    console.log("hi");
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
}

/* EVENT LISTENERS */
// OPEN MODAL
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent.trim();
  profileBadgeInput.value = profileBadge.textContent;

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
// SUBMIT FORM
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);

/*loops*/

initialCards.forEach((cardData) => renderCard(cardData));
