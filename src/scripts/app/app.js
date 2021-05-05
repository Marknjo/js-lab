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
const greet = function (greeting) {
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
greetArrow('Hi')('Lopez');
