/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

function randomCard() {
  let cards = ["♦", "♥", "♠", "♣"];

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
        Type
      </div>
      <div class="card-body text-dark">
        <h1
          class="card-title position-absolute top-50 start-50 translate-middle"
        >
          Number
        </h1>
      </div>
      <div class="card-footer bg-transparent text-end card-type">
        Type
      </div>
      </div>
`;

const pokerElement = document.querySelector("#poker");

document.getElementById(pokerElement).innerHTML = cardCreator;
