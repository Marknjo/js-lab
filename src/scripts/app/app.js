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
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const btnNavLinks = document.querySelectorAll('.nav__link');

const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

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
  document.querySelector('.footer__year').textContent =
    new Date().getFullYear();
};
displayYear();

//////////////////////////////////////////////
//                                          //
//                 Bankist                  //
//      Implement Smooth Scrolling          //
//                                          //
//////////////////////////////////////////////

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
//                 Bankist                  //
//   Implement Event Delegation to Links    //
//                                          //
//////////////////////////////////////////////
//

/* 
Leads to Performance issue
btnNavLinks.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
}); */
//Solution
//1. Add event listener to common parent element
//2. Determine what element origitnated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching Strategy
  if (
    e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('nav__link--btn')
  ) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//////////////////////////////////////////////
//                                          //
//                 Bankist                  //
//            Tabbed Navigation             //
//                                          //
//////////////////////////////////////////////
//

tabContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  //Activate the current clicked tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Activate content area
  tabContent.forEach(c => c.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  //
});

//////////////////////////////////////////////
//                                          //
//                 Bankist                  //
//           Menu Fade Animation            //
//                                          //
//////////////////////////////////////////////
//

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });

    logo.style.opacity = this;
  }
};

//Passing arguments into handler functions
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////////////
//                                          //
//                 Bankist                  //
//           Sticky Navigation              //
//                                          //
//////////////////////////////////////////////
//

/* const initialCoords = section1.getBoundingClientRect();
//Scroll event fires all the time. This creates a huge bottleneck on performance
window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
 */

//Sticky navigation: INtersectonObserver API

/* const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); */

const header = document.querySelector('.header');
const navHeight = `-${nav.getBoundingClientRect().height}px`;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    nav.classList.remove('sticky');
  } else {
    nav.classList.add('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: navHeight,
});
headerObserver.observe(header);

//////////////////////////////////////////////
//                                          //
//                 Bankist                  //
//             Reveal Sections              //
//                                          //
//////////////////////////////////////////////
//

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  //Guard clause
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(sec => {
  sec.classList.add('section--hidden');

  sectionObserver.observe(sec);
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
/* const randomInt = (min, max) =>
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
}); */

//////////////////////////////////////////////
//                                          //
//                  LESSONS                 //
//           Tranversing the DOM            //
//                                          //
//////////////////////////////////////////////
//

/* const h1 = document.querySelector('h1');

//going downwards: Child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); //only direct children
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
}); */
//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
