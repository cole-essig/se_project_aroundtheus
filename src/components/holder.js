function pushCards(cards) {
  cards.forEach((card) => {
    fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: {
        authorization: "53632a1f-419c-4aa1-93c5-782b5878b96a",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: card.title,
        link: card.link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((data) => {
        console.log(data.title);
      });
  });
}

fetch("https://around-api.en.tripleten-services.com/v1/cards", {
  method: "GET",
  headers: {
    authorization: "53632a1f-419c-4aa1-93c5-782b5878b96a",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  })
  .then((data) => {
    console.log(data);
  });

this._cardElement.remove();
this._cardElement = null;
