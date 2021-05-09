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
/* console.log(23 === 23.0);

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
 */
//////////////////////////////////////////////
//                                          //
//              Math & Rounding             //
//                                          //
//////////////////////////////////////////////
//

/* console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); //cubic root

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2)); //does type coersion
console.log(Math.max(5, 18, '23px', 11, 2)); // does not parse

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2); //area of a 10px circle

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// 0...1 -> 0 ...(max - min) -> min... (ma)

console.log(randomInt(10, 20));

//Rounding intengers
console.log(Math.trunc(23.3)); //remove any decimal parts

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Floating point numbers
//Rounding decimals
//returns a string and not a number
const str = '2.7';
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); */

//////////////////////////////////////////////
//                                          //
//           Remainder Operator             //
//                                          //
//////////////////////////////////////////////
//

/* console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

//check if a number is divisible by 2 - even numbers
// NUmber is odd is not divisible by 2
console.log(6 % 2);
console.log(6 / 2);

//odd
console.log(7 % 2);
console.log(7 / 2);

//Function: check num is even or odd
const isEven = n => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(238));
console.log(isEven(23));
console.log(isEven(233)); */

//////////////////////////////////////////////
//                                          //
//          Working wuth BigINT             //
//                                          //
//////////////////////////////////////////////
//

//special, introduced in es2020
// 64bits numbers 64 1 & 0 = 53 are used to strore the digits themselves, the rest are for storing position
//There is limit

/* console.log(2 ** 53 - 1); // NUmber big than this
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(234243222225455555555555555555555521214212031020);
console.log(234243222225455555555555555555555521214212031020n); //from 2020

console.log(BigInt(234243222225455555555555555555555521214212031020));
console.log(BigInt(2342432222254));

console.log(10000n + 10000n);

console.log(3434636346121344124252354126n * 101231210n);
//you cannot mix int with intengers
 */
//////////////////////////////////////////////
//                                          //
//             Creating Dates               //
//                                          //
//////////////////////////////////////////////
//

//Messy and confusing in JavaScript
//step 1. Creating dates (4 ways)
//#1
const now = new Date();
console.log(now);

//#2
console.log(new Date('Aug 02 2020 18:05:41')); //parsing date
console.log(new Date('December 24, 2014'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 11, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
consoleSeparator('DATES METHODS');
//dates have special methods
//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142246180000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
