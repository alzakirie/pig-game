'use strict';

// player names
const name0 = document.querySelector('#name--0');
const name1 = document.querySelector('#name--1');

// player cards and active state
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const playerActive = document.querySelector('.player--active');

// player scores
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

// buttons
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// dice
const dice = document.querySelector('.dice');

// set User scores to 0 and hide dice
score0.textContent = 0;
score1.textContent = 0;

dice.classList.add('hidden');

// Rolling the dice

// Understanding the Problem
// first time click unhides element
// on Click Event needs to change img attached
// img needs to be random
// score has to be added

// Breaking up into sub-problems

btnRoll.addEventListener('click', function () {
  // 1. generate randome dice roll
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDice);
  // 2. display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${randomDice}.png`;
  // 3. check for rolled 1: if true, switch to next player
  if (randomDice !== 1) {
    // 4. add dice role to current score
    currentScore += randomDice;
    currentScore0.textContent = currentScore; // CHANGE LATER
  }
  // 5. display new score
});

btnNew.addEventListener('click', function () {
  // 1. reset score, dice and hide the dice
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add('hidden');
  // 2. set player 1 as starting player
});

btnHold.addEventListener('click', function () {
  // 1. add current score to total score
  // 2. check for score >= 100: if true, player wins
  // 2. switch to next player
});
