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
 * Listen to event start guessing
 */
if (!checkBtn.disabled) {
  checkBtn.addEventListener('click', evt => {
    const guess = Number(document.querySelector('.guess').value);

    //zero or no number supplied logic
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number!';

      //When the guess No. matches: Successful scenario
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      userWon = true;

      //enable again button
      enableBtnStatus(true, 'again');
      //disable check button
      enableBtnStatus(false, 'check');

      //Update score value
      let highScore = document.querySelector('.highscore');

      let highScoreValue = Number(highScore.textContent);

      //udating score if zero
      if (score > highScoreValue) {
        highScore.textContent = score;
      }

      //Logic when the guess No. is higher than the secret no.
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too high!';
        //reduce score
        score--;
        document.querySelector('.score').textContent = score;

        //enable again button
        enableBtnStatus(true, 'again');
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;

        //disable again button
        enableBtnStatus(false, 'again');
      }

      //Logic when the guess No. is below the secret no.
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too low!';
        //reduce score
        score--;
        document.querySelector('.score').textContent = score;

        //enable again button
        enableBtnStatus(true, 'again');
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;

        //disable again button
        enableBtnStatus(false, 'again');
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
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  //generate a new sectret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  if (userWon) {
    userWon = false;
    const numberText = document.querySelector('.number');
    //hide score
    numberText.textContent = '?';

    //reset styles
    document.querySelector('body').style.backgroundColor = '#222';
    numberText.style.width = '15rem';

    //reset the again button
    enableBtnStatus(false, 'again');
  }
});
