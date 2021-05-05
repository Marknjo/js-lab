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

const flight = 'LH234';
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
checkIn(flight, mark);

//Passing by Value or Reference: JS only passes by value
