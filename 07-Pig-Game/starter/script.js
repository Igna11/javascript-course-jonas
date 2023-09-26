'use strict';

const dice = document.querySelector('.dice');

const playerOne = document.querySelector('.player--1');
const playerTwo = document.querySelector('.player--2');

const scoreOne = document.getElementById('score--1');
const scoreTwo = document.getElementById('score--2');

const currentOne = document.getElementById('current--1');
const currentTwo = document.getElementById('current--2');

const newGameButton = document.querySelector('.btn--new');
const holdPointButton = document.querySelector('.btn--hold');
const rollDiceButton = document.querySelector('.btn--roll');

let scores, currentScore, activePlayer, playing;

//Starting conditions
function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 1;
  playing = true;

  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  currentOne.textContent = 0;
  currentTwo.textContent = 0;

  dice.classList.add('hidden');
  playerOne.classList.remove('player--winner');
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--winner');
  playerTwo.classList.remove('player--active');
}

init();

rollDiceButton.addEventListener('click', rollDice);
holdPointButton.addEventListener('click', holdPoint);

function switchPlayer() {
  if (playerOne.classList.contains('player--active')) {
    playerTwo.classList.add('player--active');
    playerOne.classList.remove('player--active');
    /*Restart the current to 0 */
    document.getElementById('current--1').textContent = 0;
    /*sets the active player to be 2 */
    activePlayer = 2;
    /*Restarts the current score */
    currentScore = 0;
  } else if (playerTwo.classList.contains('player--active')) {
    playerTwo.classList.remove('player--active');
    playerOne.classList.add('player--active');
    /*Restart the current to 0 */
    document.getElementById('current--2').textContent = 0;
    /*sets the active player to be 1 */
    activePlayer = 1;
    /*Restarts the current score */
    currentScore = 0;
  }
}

function rollDice() {
  if (playing) {
    let randomNumber = Math.round(Math.random() * 5 + 1);
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumber}.png`;
    console.log(dice.src);
    console.log(randomNumber);
    if (randomNumber === 1) {
      switchPlayer();
    } else {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
}

function holdPoint() {
  if (playing) {
    scores[activePlayer - 1] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer - 1];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player-active');
    } else {
      switchPlayer();
    }
  }
}
