const containGame= document.getElementById("memorygame");
let cardUno = null;
let cardDos = null;
let flippedCards = 0;
let notClicked = false;

const newColors = [
    "green",
    "yellow",
    "gray",
    "blue",
    "orange",
    "green",
    "yellow",
    "gray",
    "blue",
    "orange"
];
function shuffle(array) {
    let newCounter = array.length;
    while (newCounter>0) {
        let newIndex = Math.floor(Math.random() * newCounter);
        newCounter-- ;
        let newTemp = array[newCounter];
        array[newCounter] = array[newIndex];
        array[newIndex] = newTemp;
    }

    return array;
}

let colorsShuffled = shuffle(newColors);

function createDivsForColors(colorArray) {
    for (let color of colorArray){
        const brandNewDiv = document.createElement("div");
        brandNewDiv.classList.add(color);
        brandNewDiv.addEventListener("click", handleCardClick);
        containGame.append(brandNewDiv);
    }
}

function handleCardClick(e) {
    if(notClicked) return;
    if(e.target.classList.contains("flipped")) return;

    let nowCard = e.target;
    nowCard.style.backgroundColor = nowCard.classList[0];

    if (!cardUno || !cardDos) {
        currentCard.classList.add("flipped");
        cardUno= cardUno || currentCard;
        cardDos = currentCard === cardUno ? null : currentCard;
    }


    if (cardUno && cardDos) {
        notClicked = true;
        let gif1 = cardUno.className;
        let gif2 = cardDos.className;
    }

    if (gif1 === gif2) {
      flippedCards += 2;
      cardUno.removeEventListener("click", handleCardClick);
      cardDos.removeEventListener("click", handleCardClick);
      cardUno = null;
      cardDos = null;
      notClicked = false;
    } else {
      setTimeout(function() {
        cardUno.style.backgroundColor = "";
        cardDos.style.backgroundColor = "";
        cardUno.classList.remove("flipped");
        cardDos.classList.remove("flipped");
        cardUno = null;
        cardDos = null;
        notClicked = false;
      }, 1000);
    }
  }

  if (flippedCards === newColors.length) alert("You Won. Refresh To Start New Game");
    
    
createDivsForColors(colorsShuffled);
    
