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
    "./../img/clue.png",
    "./../img/heart.png",
    "./../img/spades.png",
    "./../img/diamond.png"
  ];
  return cards[Math.floor(Math.random() * cards.length)];
}*/

function randomCard() {
  let cards = [
    "<p style='color:red'>♦</p>",
    "<p style='color:red'>♥</p>",
    "<p>♠</p>",
    "<p>♣</p>"
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

const updateButton = document.querySelector("#cardButton");

const handleClick = event => {
  const updateNumber = document.querySelector(".card-number");
  updateNumber.innerHTML = cardNumber;
  const updateType = document.querySelector(".card-type");
  updateType.innerHTML = cardType;
  const updateType2 = document.querySelector(".card-type2");
  updateType2.innerHTML = cardType;
};

updateButton.addEventListener("click", handleClick);
