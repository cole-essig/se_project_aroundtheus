export default class Card {
  constructor({ title, link }, cardSelector, handleImageClick) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    // card like button
    this._cardElement
      .querySelector(".heart-button")
      .addEventListener("click", () => {
        this._handleHeartButton();
      });
    // card delete button
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    // handleImageClick
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }

  // EVENT LISTENER PRIVATE FUNCTIONS
  _handleHeartButton() {
    this._cardElement
      .querySelector(".heart-button")
      .classList.toggle("heart-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  // TEMPLATE
  // _getTemplate() {
  //   const cardElement = document
  //     .querySelector(this._cardSelector)
  //     .content.querySelector(".card")
  //     .cloneNode(true);
  //   return cardElement;
  // }

  // DISPLAY OF CARD PUBLIC FUNCTION

  generateCard() {
    this._cardElement = this._cardSelector;
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitleEl = this._cardElement.querySelector(".card__title");

    this._setEventListeners();

    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._title;
    this._cardTitleEl.textContent = this._title;

    return this._cardElement.cloneNode(true);
  }
}
