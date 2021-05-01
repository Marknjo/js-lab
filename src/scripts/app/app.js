//import './utils/utils';

//////////////////////////////////////////////
//                                          //
//          Starter Sections Separtor       //
//                                          //
//                                          //
//                                          //
//                                          //
//                                          //
//                                          //
//////////////////////////////////////////////

/**
 * SOME IMPROVEMENT
 * 1. Implement local storage
 * 2. Two players
 * 3. Winner is decalared after 5 games or 3 games by showing average scores
 * 4. Display player one and two
 * 5. Toggle the interface for two players
 * 6. Show results (including history) of player one and two
 * 7. Implement multi-players
 * 8. Auto switch players when one payer is cast their guess
 * 9. Save to history
 * 10. Reset the scores including high score
 * 11. Show a Loader when one player is playing
 *
 */
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let userWon = false;
let highScore = 0;

const resetBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

/**
 * Set Reset button to disabled
 */
const enableBtnStatus = (enable, btnName) => {
  if (!enable) {
    if (btnName === 'again') {
      resetBtn.disabled = true;
      resetBtn.classList.remove('btn-hover');
      resetBtn.classList.add('muted');
    } else if (btnName === 'check') {
      checkBtn.disabled = true;
      checkBtn.classList.remove('btn-hover');
      checkBtn.classList.add('muted');
    }
  } else {
    if (btnName === 'again') {
      resetBtn.disabled = false;
      resetBtn.classList.add('btn-hover');
      resetBtn.classList.remove('muted');
    } else if (btnName === 'check') {
      checkBtn.disabled = false;
      checkBtn.classList.add('btn-hover');
      checkBtn.classList.remove('muted');
    }
  }
};

enableBtnStatus(false, 'again');

/**
 * Display message function
 *
 * @param {String} message
 */
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/**
 * Displays current score
 * @param {Number} curScore
 */
const displayScore = function (curScore) {
  document.querySelector('.score').textContent = curScore;
};

/**
 * Determines the global display of the game
 * interface after win or when still trying.
 *
 * @param {String|Number} guessValue
 */
const guessSuccessStatus = function (guessValue) {
  let guessBoxWidth = '15rem';
  let bgColor = '#222';
  let guessText = '?';

  if (userWon) {
    guessBoxWidth = '30rem';
    bgColor = '#60b347';
    guessText = guessValue;
  }

  const numberText = document.querySelector('.number');
  //reset/add styles
  numberText.style.width = guessBoxWidth;
  document.querySelector('body').style.backgroundColor = bgColor;
  //hide/show score
  numberText.textContent = guessText;
};

/**
 * Listen to event start guessing
 */
if (!checkBtn.disabled) {
  checkBtn.addEventListener('click', evt => {
    const guess = Number(document.querySelector('.guess').value);

    //zero or no number supplied logic
    if (!guess) {
      displayMessage('⛔ No number!');

      //When the guess No. matches: Successful scenario
    } else if (guess === secretNumber) {
      userWon = true;

      displayMessage('🎉 Correct Number');
      guessSuccessStatus(secretNumber);
      //enable again button
      enableBtnStatus(true, 'again');
      //disable check button
      enableBtnStatus(false, 'check');

      //udating score if zero
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      //Logic when the guess No. is higher than the secret no.
    } else if (guess !== secretNumber) {
      //Don't keep resetting the again button if it is on
      if (resetBtn.disabled) enableBtnStatus(true, 'again');

      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        //reduce score
        score--;
        displayScore(score);
      } else {
        displayMessage('💥 You lost the game!');
        displayScore(0);

        //disable check button if reached 0 score
        enableBtnStatus(false, 'check');
      }
    }
  });
}

//Reseting the game at anytime

//Don't activate the button unless reset is true
resetBtn.addEventListener('click', () => {
  //Enable the guessing machine
  enableBtnStatus(true, 'check');

  //reseting the game because it's successful
  //global resets
  displayMessage('Start guessing...');
  score = 20;
  displayScore(score);
  document.querySelector('.guess').value = '';
  //generate a new sectret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  if (userWon) {
    userWon = false;
    guessSuccessStatus('?');
    //reset the again button
    enableBtnStatus(false, 'again');
  }
});
