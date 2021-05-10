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
//                 Bankist                  //
//      Implement Smooth Scrolling          //
//                                          //
//////////////////////////////////////////////

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); //coordinates
  /*console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
    window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

   
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  */
  //Only in modern browsers
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

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

//////////////////////////////////////////////
//                                          //
//                  LESSONS                 //
//    Types of Events and Even Handler      //
//                                          //
//////////////////////////////////////////////
//
/* const h1 = document.querySelector('h1');

const alertH1 = e => {
  alert('addEventListener: Great you are reading the heading :D');

  //e.target.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); */

//////////////////////////////////////////////
//                                          //
//                  LESSONS                 //
// Event Propagation: Bubbling & Capturing  //
//                                          //
//////////////////////////////////////////////
//

//rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget, this);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('UL Container', e.target, e.currentTarget, this);

  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget, this);

  console.log(e.currentTarget === this);

  //stop event propagation
  //e.stopPropagation();
});

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
