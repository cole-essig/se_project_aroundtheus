export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    // card like button
    this._cardElement
      .querySelector("heart-button")
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

  // DISPLAY OF CARD PUBLIC FUNCTION
  getCardView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .cloneNode(true);
    this._cardImageEl = _cardElement.querySelector(".card__image");
    this._cardTitleEl = _cardElement.querySelector(".card__title");

    this._setEventListeners();

    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardTitleEl.textContent = this._name;

    return this;
  }
}
