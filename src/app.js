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

/*function randomCard() {
  let cards = [
    "<img src='src/assets/img/clue.png' />",
    "<img src='src/assets/img/heart.png' />",
    "<img src='src/assets/img/spades.png' />",
    "<img src='src/assets/img/diamond.png' />"
  ];
  let cardsIndex = Math.floor(Math.random() * cards.length);
  return cards[cardsIndex];
}*/

function randomCard() {
  let cards = [
    "<p class='card-diamond'>♦</p>",
    "<p class='card-heart'>♥</p>",
    "<p class='card-spade'>♠</p>",
    "<p class='card-clue'>♣</p>"
  ];
  let cardsIndex = Math.floor(Math.random() * cards.length);
  return cards[cardsIndex];
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

const cardType = `${randomCard()}`;
const cardNumber = `${randomNumber()}`;

const typeElement = document.querySelector(".card-type");
typeElement.innerHTML = cardType;

const type2Element = document.querySelector(".card-type2");
type2Element.innerHTML = cardType;

const numberElement = document.querySelector(".card-number");
numberElement.innerHTML = cardNumber;

// Button

const updateButton = document.querySelector(".btn");

const handleClick = event => {
  const cardType2 = `${randomCard()}`;
  const cardNumber2 = `${randomNumber()}`;
  const updateNumber = document.querySelector(".card-number");
  updateNumber.innerHTML = cardNumber2;
  const updateType = document.querySelector(".card-type");
  updateType.innerHTML = cardType2;
  const updateType2 = document.querySelector(".card-type2");
  updateType2.innerHTML = cardType2;
};

updateButton.addEventListener("click", handleClick);

setTimeout(() => {
  document.location.reload();
}, 10000);

let timeLeft = 10;

function countdown() {
  timeLeft--;
  document.getElementById("seconds").innerHTML = String(timeLeft);
  if (timeLeft > 0) {
    setTimeout(countdown, 1000);
  }
}

setTimeout(countdown, 1000);
