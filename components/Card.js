export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
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

  // DISPLAY OF CARD
  getCardView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .cloneNode(true);

    this._setEventListeners();

    return Card;
  }
}
