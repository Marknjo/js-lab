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

//Buttons
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

score0EL.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./${dices[dice]}`;

  //3. Check for rolled 1: if true, switcch tp nect player
});
