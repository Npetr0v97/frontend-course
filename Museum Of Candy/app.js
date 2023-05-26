"use strict";

const navbar = document.getElementById("mainNavbar");
const navHeight = navbar.offsetHeight;

function scrollFunction() {
  if (
    document.body.scrollTop > navHeight ||
    document.documentElement.scrollTop > navHeight
  ) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// window.onscroll = function () { scrollFunction() };

window.addEventListener("scroll", scrollFunction);

////JS BASICS REFRESHER

const maxNum = prompt("Welcome! Write your maximum number");
const numberToGuess = Math.floor(Math.random() * maxNum) + 1;

let numberOfGuesses = 0;
let guess;

console.log(numberToGuess);
guess = prompt("Guess a number");

while (true) {
  numberOfGuesses++;
  if (Number(guess) === numberToGuess) {
    console.warn(
      `That's correct! It took you ${
        numberOfGuesses === 1
          ? numberOfGuesses + " guess"
          : numberOfGuesses + " guesses"
      }.`
    );
    break;
  } else if (Number(guess) > numberToGuess) {
    guess = prompt("Try with a lower number.");
  } else {
    guess = prompt("Try with a higher number.");
  }
}
