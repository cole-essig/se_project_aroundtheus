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
import ModalWithConfirm from "../components/ModalWithConfirm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

/* ELEMENTS */
//  PROFILE ELEMENTS
const avatarPicture = document.querySelector(".profile__picture");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileButtonModalClose = document.querySelector("#profile-modal-close");
const profileName = document.querySelector("#profile-name");
const profileBadge = document.querySelector("#profile-badge");
const profileNameInput = document.querySelector("#profile-name-input");
const profileBadgeInput = document.querySelector("#profile-badge-input");
const profileEditForm = profileEditModal.querySelector("#modal-form-1");
const avatarEditModal = document.querySelector("#avatar-change-modal");
const avatarEditForm = avatarEditModal.querySelector("#modal-form-3");
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
let data;
const section = new Section(
  {
    items: data,
    renderer: (item) => {
      section.addItem(makeCard(item));
    },
  },
  ".cards"
);

// API
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "53632a1f-419c-4aa1-93c5-782b5878b96a",
    "Content-Type": "application/json",
  },
});

api
  .getIntitialCards()
  .then((data) => {
    section.renderItems(data);
  })
  .catch((err) => {
    console.error(err);
  });

// api.getUserInfo().then((info) => {
//   console.log(info);
// });

// Edit Profile Modal
const editProfileModal = new ModalWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
editProfileModal.setEventListeners();

//New Card Modal
const newCardModal = new ModalWithForm("#card-add-modal", handleCardAddSubmit);
newCardModal.setEventListeners();

//Preview Image Modal
const previewImageModal = new ModalWithImage("#image-preview-modal");
previewImageModal.setEventListeners();

//Delete Confirm Modal
const deleteConfirmModal = new ModalWithConfirm(
  "#delete-check-modal",
  handleCardDeleteSubmit
);
deleteConfirmModal.setEventListeners();
// Avatar Change Modal
const avatarChangeModal = new ModalWithForm(
  "#avatar-change-modal",
  handleAvatarChangeSubmit
);
avatarChangeModal.setEventListeners();

// Sections Class
// const section = new Section(
//   {
//     items: savedCardData,
//     renderer: (item) => {
//       section.addItem(makeCard(item));
//     },
//   },
//   ".cards"
// );
// console.log(section._items);
// section.renderItems();

//UserInfo Class
const user = new UserInfo(".profile__name", ".profile__badge");

/* FUNCTIONS */

function handleImageClick(title, link) {
  previewImageModal.open(title, link);
}

function makeCard(cardData) {
  const card = new Card(
    cardData,
    cardTemplate,
    handleImageClick,
    handleDeleteClick
  );
  return card.generateCard();
}

function handleDeleteClick(cardId) {
  console.log(cardId);
  deleteConfirmModal.open(cardId);
}

// VALIDATION
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
const cardFormValidator = new FormValidator(validationSettings, cardAddForm);
const avatarFormValidator = new FormValidator(
  validationSettings,
  avatarEditForm
);

avatarFormValidator.enableValidation();
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

function handleCardDeleteSubmit(cardId) {
  console.log(cardId._id);
  api.deleteCard(cardId._id).then((message) => {
    console.log(message);
    // cardId.domDeleteCard();
    deleteConfirmModal.close();
  });
}

function handleAvatarChangeSubmit() {}

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

avatarPicture.addEventListener("click", () => {
  avatarChangeModal.open();
  avatarFormValidator.toggleButtonState();
});
