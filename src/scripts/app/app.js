//////////////////////////////////////////////
//                                          //
//              Default Parameters          //
//                                          //
//////////////////////////////////////////////
/* const bookings = [];
const createBooking = function (
  flightNum,
  numPassagers = 1,
  price = 199 * numPassagers
) {
  //   numPassagers = numPassagers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassagers,
    price,
  };

  console.log(booking);

  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 10000);

console.log(bookings); */

//////////////////////////////////////////////
//                                          //
//        Passing Arguments Works:          //
//           Value VS Reference             //
//                                          //
//////////////////////////////////////////////

/* const flight = 'LH234';
const mark = {
  name: 'Mark Njoroge',
  passport: 23235209501,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23235209501) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, mark);
// console.log(flight);
// console.log(mark);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(mark);
checkIn(flight, mark); */

//Passing by Value or Reference: JS only passes by value

//////////////////////////////////////////////
//                                          //
//    First Class & High-Order Functions    //
//  Functions Accepting Callback functions  //
//                                          //
//////////////////////////////////////////////
//
/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transfromed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('🙋‍♀️');
};

document.body.addEventListener('click', high5);

['Jonas', 'Marth', 'Adam'].forEach(high5); */

//////////////////////////////////////////////
//                                          //
//    First Class & High-Order Functions    //
//       Functions Returning Functions      //
//                                          //
//////////////////////////////////////////////
//
/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet('Hello');
greetingHey('Jonas');
greetingHey('Michael');

greet('Hey')('Mark');
//Works because of closures
//Important in functional programming

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Jennifer');
greetArrow('Hi')('Lopez'); */

//////////////////////////////////////////////
//                                          //
//        The Call & Apply Methods          //
//                                          //
//////////////////////////////////////////////
//

/* //Airline 1
const lufthasa = {
  airline: 'Lufthase',
  iataCode: 'LH',
  booking: [],
  book(flightNum, pasgName) {
    console.log(`${pasgName} booked a seat on ${this.iataCode}${flightNum}`);
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, pasgName });
  },
};

lufthasa.book(239, 'Mark');
lufthasa.book(635, 'Simmpson Wanjala');
console.log(lufthasa.booking);

//Airline 2
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

//Method borrowing
const book = lufthasa.book;

//does not work
//book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williums');
console.log(eurowings);

book.call(lufthasa, 239, 'Mary Cooper');
console.log(lufthasa);

// Airline 3
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 583, 'Messy Zippy');
console.log(swiss);

//Apply: Works the same as call, though it receives array as inputs other than list or arguments
const flightData = [583, 'Sir. George Humphrey'];

book.apply(swiss, flightData); // not common coz you can spread the data to the call,
console.log(swiss);

//i.e. using the call with the same info
book.call(swiss, ...flightData);
console.log(swiss); */

//////////////////////////////////////////////
//                                          //
//         Functions: Bind Method           //
//                                          //
//////////////////////////////////////////////

/* //3. The Bind method
// Manually set the this keyword
// It does not immediately call function returns new function where this keyword is bound
console.log('\n\n');
console.log(`${'-'.repeat(20)}     Bind Method    ${'-'.repeat(20)}`);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthasa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

//in the bind we can pass additional arguments to create default values: Partial applications - part of original aargument is already predefined

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas');
bookEW23('Mathew Steddmann');

//Application 2. When using objects with event listeners
lufthasa.planes = 300;

lufthasa.buyPlane = function (el) {
  console.log(el.target);
  console.log(this);

  this.planes++;

  console.log(this.planes);
};

//this keyword always point to the element attached to
document
  .querySelector('.buy')
  .addEventListener('click', lufthasa.buyPlane.bind(lufthasa));

//Apllication 3. Partial applications
//We preset parameters
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.16); //Creates a brand new function
console.log(addVAT(100));
console.log(addVAT(500));

//Closure
const addTaxClosure = rate => value => value + value * rate;

console.log(addTaxClosure(0.23)(500));
console.log(addTaxClosure(0.24)(500));
console.log(addTaxClosure(0.33)(500)); */

//////////////////////////////////////////////
//                                          //
//           Immediately Invoked            //
//        Function Expressions (IIFE)       //
//                                          //
//////////////////////////////////////////////
//
//A Function which only executed once - a function that disappear when called once (async await - aplication)

/* const runOnce = function () {
  console.log('This function can be called again');
};

runOnce();

//Immediately invocked function expression: IIFE
(function () {
  console.log('This will never run again: Function Expression');
})();

//works with arrow function
(() => {
  console.log('This will never run again: Function Arrow');
})();

//Why invent IIFE
// Function creates scope
// One scope's variables cannot be accessed outside that scope
// Therefore: Used to create the scope
// Data inside IIFE is private or encapsulated(Pattern):
// important in programming to protect variables from been overwritten by other data
// Modern JS does not use IIFE more often because let and const are block scope
// But if the goal is to execute code only once, then,
// even with modern JS, they are extremely useful.
 */

//////////////////////////////////////////////
//                                          //
//                 Closures                 //
//                                          //
//////////////////////////////////////////////
//
//Mythical feature of JavaScript: Closures
//Closure not feature: Happens automatically in certain situation
// Not a feature to implement by recognise when it happens

/* const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passanger`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
booker(); */

//////////////////////////////////////////////
//                                          //
//     Closures Application & Examples      //
//                                          //
//////////////////////////////////////////////
//
//Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//Re-assigning f function
h();
f();

console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`There are 3 groups, each with ${perGroup} passangers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

//const perGroup = 1000; //closure has priority over the scope chain;

boardPassengers(180, 3);
console.dir(boardPassengers);

//
//////////////////////////////////////////////////////////////////////
//
//
//
//The end separator
console.log('\n\n');
console.log(`${'-'.repeat(30)}      ./End       ${'-'.repeat(30)}`);
