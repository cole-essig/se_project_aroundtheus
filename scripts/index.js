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

function closePopup() {
  profileEditModal.classList.toggle("modal_opened");
}

profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent.trim();
  profileBadgeInput.value = profileBadge.textContent;

  profileEditModal.classList.toggle("modal_opened");
});

profileButtonModalClose.addEventListener("click", () => {
  profileEditModal.classList.toggle("modal_opened");
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileBadge.textContent = profileBadgeInput.value;
  closePopup;
});
