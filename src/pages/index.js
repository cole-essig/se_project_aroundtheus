import {
  initialCards,
  validationSettings,
  cardData,
} from "../utils/constants.js";
import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalWithImage from "../components/ModalWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

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

// Edit Profile Modal
const editProfileModal = new ModalWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
editProfileModal.setEventListeners();

//New Card Modal
const newCardModal = new ModalWithForm("#card-add-modal", handleCardAddSubmit);
newCardModal.setEventListeners();

//Preview Image Popup
const previewImageModal = new ModalWithImage("#image-preview-modal");
previewImageModal.setEventListeners();

// Sections Class
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      section.addItem(makeCard(item));
    },
  },
  ".cards"
);
section.renderItems();

//UserInfo Class
const user = new UserInfo(".profile__name", ".profile__badge");

/* FUNCTIONS */

function handleImageClick(title, link) {
  previewImageModal.open(title, link);
}

function makeCard(cardData) {
  const card = new Card(cardData, cardTemplate, handleImageClick);
  return card.generateCard();
}

// VALIDATION
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
const cardFormValidator = new FormValidator(validationSettings, cardAddForm);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

/* EVENT HANDLERS */

function handleProfileEditSubmit({ name, badge }) {
  user.setUserInfo(name, badge);
  editProfileModal.close();
}

function handleCardAddSubmit({ name, cardUrl }) {
  section.addItem(
    makeCard({
      title: name,
      link: cardUrl,
    })
  );
  newCardModal.close();
}

/* EVENT LISTENERS */
// OPEN MODAL
profileEditButton.addEventListener("click", () => {
  const userInput = user.getUserInfo();
  editFormValidator.resetValidation();
  profileNameInput.value = userInput.name;
  profileBadgeInput.value = userInput.badge;
  editProfileModal.open();
});

cardAddButton.addEventListener("click", () => {
  newCardModal.open();
  cardFormValidator.toggleButtonState();
});
