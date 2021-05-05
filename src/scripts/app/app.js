//////////////////////////////////////////////
//                                          //
//              Default Parameters          //
//                                          //
//////////////////////////////////////////////
const bookings = [];
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

console.log(bookings);
