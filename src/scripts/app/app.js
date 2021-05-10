/**
 * Creates a separator markers with a title on the console
 * @param {String} title
 * @param {Number} separatorLen
 */
const consoleSeparator = (title = './END', separatorLen = 20) => {
  console.log('\n\n');
  console.log(
    `${'-'.repeat(separatorLen)}     ${title}      ${'-'.repeat(separatorLen)}`
  );
  console.log('\n');
};

//////////////////////////////////////////////
//                                          //
//           BANKIST WEB HOME PAGE          //
//                                          //
//////////////////////////////////////////////

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});
/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); */

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/**
 * Displays the current year at the footer
 */
const displayYear = () => {
  document.querySelector(
    '.footer__year'
  ).textContent = new Date().getFullYear();
};
displayYear();

//////////////////////////////////////////////
//                                          //
//                  LESSONS                 //
// Selecting, Creating, & Deleting Elements //
//                                          //
//////////////////////////////////////////////
/* console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
//.insertAdjacentHTML - quick way to create HTML elements

const message = document.createElement('div'); //create a DOM element - not in the DOM but in Memory
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Close</button>';

//add as the first child of the parent element
//header.prepend(message);

//added at the last child of the parent element (You can't use both of the methods)
header.append(message);

//inserting multiple copies
//header.append(message.cloneNode(true));

//Insert after the header element
//header.after(message);

//Insert before the header element
//header.before(message);

//Delete elements in the node
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  //Old way of deleting elements in the DOM
  //message.parentElement.removeChild(message);
  //new way of deleting elements in the DOM
  message.remove();
});
 */
//////////////////////////////////////////////
//                                          //
//                  LESSONS                 //
//    Styles, attributes, and Classes       //
//                                          //
//////////////////////////////////////////////
//

//styles
/* message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', '#334352');

//Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

//logo.getAttribute()
//logo.setAttribute('', '')
console.log(logo.src); //absolute
console.log(logo.getAttribute('src')); //relative */

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
