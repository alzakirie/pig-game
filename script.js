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

const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

// buttons
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// dice
const dice = document.querySelector('.dice');

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, playing;

// set User scores to 0 and hide dice
const init = function () {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  // 1. reset score, dice and hide the dice
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add('hidden');
  score0.textContent = 0;
  score1.textContent = 0;
  // 2. set player 1 as starting player
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

init();

// Rolling the dice

// Understanding the Problem
// first time click unhides element
// on Click Event needs to change img attached
// img needs to be random
// score has to be added

// Breaking up into sub-problems

btnRoll.addEventListener('click', function () {
  if (playing) {
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
      // 5. display new score
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } // else switch player
    else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to total score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check for score >= 100: if true, player wins
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } // 2. switch to next player
    else {
      switchPlayer();
    }
  }
});
