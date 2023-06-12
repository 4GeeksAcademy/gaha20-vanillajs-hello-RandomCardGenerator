/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/clue.png";
import "./assets/img/heart.png";
import "./assets/img/spades.png";
import "./assets/img/diamond.png";

window.onload = function() {
  //write your code here
};

function randomCard() {
  let cards = [
    "./../img/clue.png",
    "./../img/heart.png",
    "./../img/spades.png",
    "./../img/diamond.png",
    "./assets/img/rigo-baby.jpg"
  ];

  return cards[Math.floor(Math.random() * cards.length)];
}
function randomNumber() {
  let cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  return cards[Math.floor(Math.random() * cards.length)];
}

const cardCreator = `
      <div class="card container">
      <div class="card-header bg-transparent text-start card-type">
        <img src="${randomCard()}">
      </div>
      <div class="card-body text-dark">
        <h1
          class="card-title position-absolute top-50 start-50 translate-middle"
        >
          ${randomNumber()}
        </h1>
      </div>
      <div class="card-footer bg-transparent text-start card-type">
        <img src="${randomCard()}">
      </div>
      </div>
`;

const pokerElement = document.querySelector("#poker");
pokerElement.innerHTML = cardCreator;
