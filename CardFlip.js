const newCard = document.getElementById("main");

newCard.addEventListener("click", flipTheCard);

function flipTheCard() {
    newCard.classList.toggle("flipTheCard");
}