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
