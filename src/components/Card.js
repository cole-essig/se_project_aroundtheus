export default class Card {
  constructor(
    { title, link },
    cardSelector,
    handleImageClick,
    handleDeleteClick
  ) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _setEventListeners() {
    // card like button
    const heart = this._cardElement.querySelector(".heart-button");
    heart.addEventListener("click", () => {
      this._handleHeartButton();
      console.log(this._cardElement);
    });

    // card delete button
    const deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
    // handleImageClick
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick(this._title, this._link);
    });
  }

  // EVENT LISTENER PRIVATE FUNCTIONS
  _handleHeartButton() {
    this._cardElement
      .querySelector(".heart-button")
      .classList.toggle("heart-button_active");
  }

  // DISPLAY OF CARD PUBLIC FUNCTION

  generateCard() {
    this._cardElement = this._cardSelector.cloneNode(true);
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitleEl = this._cardElement.querySelector(".card__title");

    this._setEventListeners();

    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._title;
    this._cardTitleEl.textContent = this._title;

    return this._cardElement;
  }
}
