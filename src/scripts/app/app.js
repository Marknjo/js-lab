/**
 * Creates as a separator in the console
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

//Starter data
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

//////////////////////////////////////////////
//                                          //
//      Converting and checking Numbers     //
//                                          //
//////////////////////////////////////////////
//
console.log(23 === 23.0);

//Base 10 - 0 to 9 1/10 = 0.1 3/10 = 3.33333333333
//Binry base 2 - 0.1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//Convert strings to numbers
console.log(Number('23'));
console.log(+'23');

//Parsing number from a string
//the string need to start with a number
//Global numbers
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23'));

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

//isNaN()
// does not test Infinity
// only to check if a value is not and number
// Avoid it
console.log(Number.isNaN(20));
console.log(Number.isNaN(+'20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Check if value is number -> It is the best tool to use than the isNaN
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite(20 / 0));
console.log(Number.isFinite(0.3));

//IF using intengers use isIntenger
console.log(Number.isInteger(23)); //intenger
console.log(Number.isInteger(23.04)); //float
console.log(Number.isInteger(23 / 0)); //Infinity

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
