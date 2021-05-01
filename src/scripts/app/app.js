//////////////////////////////////////////////
//                                          //
//            PIG GAME PROJECT              //
//                                          //
//////////////////////////////////////////////
import dice1 from '../../assets/images/dice-1.png';
import dice2 from '../../assets/images/dice-2.png';
import dice3 from '../../assets/images/dice-3.png';
import dice4 from '../../assets/images/dice-4.png';
import dice5 from '../../assets/images/dice-5.png';
import dice6 from '../../assets/images/dice-6.png';

//Map dice Images to an object
const dices = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

//Selecting Elements
const score0EL = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const playerEl = document.querySelectorAll('.player');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Buttons
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

score0EL.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores, currentScore, activePlayer, playing;
/**
 * Initialize the game
 * Set elements to default values on game load
 * Used by the new game button to reset the status of a the game
 */
const init = function () {
  //reset playing
  playing = true;
  diceEl.classList.add('hidden');

  //show buttons
  btnRoll.classList.remove('disabled');
  btnRoll.classList.add('btn--active');
  btnHold.classList.remove('disabled');
  btnHold.classList.add('btn--active');

  //remove sinner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  //set active class to player 1
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  //Clean current score slots
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  //reset players
  currentScore = 0;
  activePlayer = 0;

  //reset total scores bunker
  scores = [0, 0];

  //clear total players scores
  score0EL.textContent = 0;
  score1El.textContent = 0;
};

//run the init function on document load
init();

/**
 * Used to switch player
 */
const switchPlayers = function () {
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1El.classList.toggle('player--active');
  player0El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./${dices[dice]}`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;

      //dynamically select the active player
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayers();
    }
  }
});

/**
 * Implementation of Hold Button
 */

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. get the total of current player on hold
    scores[activePlayer] += currentScore;

    //2. Update the UI with the total player points
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //3. Handle UI change if current player is more than 100
    if (scores[activePlayer] >= 20) {
      playing = false;

      //update the ui
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      //clear the current score
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      //update the roll dice and Hold button status(Disabled)
      btnHold.classList.remove('btn--active');
      btnHold.classList.add('disabled');
      btnRoll.classList.remove('btn--active');
      btnRoll.classList.add('disabled');

      //hide the dice
      diceEl.classList.add('hidden');
    } else {
      //4. Switch the players
      switchPlayers();
    }

    //5. Handle the buttons if current player is more than 100
  }
});

/**
 * Implementation of new game Button
 */

btnNew.addEventListener('click', init);
