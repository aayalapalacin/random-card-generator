/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let randomGenerator = () => {
  let symbol = ["♦", "♥", "♠", "♣"];
  let number = [
    "A",
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
    "K"
  ];

  let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  document.body.querySelector(".suit1").append(randomSymbol);
  document.body.querySelector(".number").append(randomNumber);
  document.body.querySelector(".suit2").append(randomSymbol);

  randomSymbol === "♦" || randomSymbol === "♥"
    ? document.body
        .querySelectorAll(".suitColor")
        .forEach(symbolColor => (symbolColor.style.color = "red"))
    : document.body
        .querySelectorAll(".suitColor")
        .forEach(symbolColor => (symbolColor.style.color = "black"));
};

window.onload = function() {
  randomGenerator();
};
let emptyCard = () => {
  let suit1 = document.querySelector(".suit1");
  suit1.innerHTML = "";
  let number = document.querySelector(".number");
  number.innerHTML = "";
  let suit2 = document.querySelector(".suit2");
  suit2.innerHTML = "";
};

document.querySelector(".btn").addEventListener("click", () => {
  emptyCard();
  randomGenerator();
});

setInterval(() => {
  emptyCard();
  randomGenerator();
}, 3000);

let w = document.querySelector("#width");
let h = document.querySelector("#height");

document.querySelector("#changeDimension").addEventListener("click", () => {
  let card = document.querySelector(".card");
  card.style.width = w.value + "px";
  card.style.height = h.value + "px";
});
