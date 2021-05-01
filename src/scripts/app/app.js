//import "./utils/utils";

//////////////////////////////////////////////
//                                          //
//          Starter Sections Separtor       //
//                                          //
//////////////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

/**
 * Open the modal
 */
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

/**
 * Close the modal
 */
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/**
 * Loop through the buttons
 */
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//close modal even listeners-btn and overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
