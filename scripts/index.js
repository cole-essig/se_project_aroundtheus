const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* ELEMENTS */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileButtonModalClose = document.querySelector("#profile-modal-close");
const profileName = document.querySelector("#profile-name");
const profileBadge = document.querySelector("#profile-badge");
const profileNameInput = document.querySelector("#profile-name-input");
const profileBadgeInput = document.querySelector("#profile-badge-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardDivEl = document.querySelector(".cards");

/* Functions */

function togglePopup() {
  profileEditModal.classList.toggle("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}
/* Event Handlers */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileBadge.textContent = profileBadgeInput.value;
  togglePopup();
}

/* Event Listeners */
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent.trim();
  profileBadgeInput.value = profileBadge.textContent;

  profileEditModal.classList.add("modal_opened");
});

profileButtonModalClose.addEventListener("click", togglePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

/*loops*/

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardDivEl.prepend(cardElement);
});
