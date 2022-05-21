export const paintCards = () => {
  let cards = document.querySelectorAll(".item:nth-child(odd)");

  for (let card of cards) {
    card.style.backgroundColor = "red";
  }
};

export const findElement = () => {
  let firstCard = document.querySelector(".item");

  if (firstCard.matches(".likedItem")) {
    firstCard.style.backgroundColor = "blue";
  } else {
    let elem = firstCard.nextElementSibling;

    while (elem) {
      if (elem.matches(".likedItem")) {
        elem.style.backgroundColor = "blue";
        break;
      }
      else {
        elem = elem.nextElementSibling;
      }
    }
  }


};

// Helper if element exist then call function
export const isElementExist = (_el, _cb) => {
  let elem = document.querySelector(_el);

  if (document.body.contains(elem)) {
    try {
      _cb();
    } catch (e) {
      console.log(e);
    }
  }
}