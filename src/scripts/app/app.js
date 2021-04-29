"use strict";
//import "./utils/utils";
//////////////////////////////////////////////
//                                          //
//                Strict Mode               //
//                                          //
//////////////////////////////////////////////

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) console.log("I can drive"); */

//////////////////////////////////////////////
//                                          //
//          Functions Buddies               //
//                                          //
//////////////////////////////////////////////

/* function logger() {
  console.log("My name is Mark");
}

//callling, running, or invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `🥤 Juice with ${apples} 🍎 apples and ${oranges} 🍊 oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

//////////////////////////////////////////////
//                                          //
//               Functions                  //
//       Declaration vs Expression          //
//                                          //
//////////////////////////////////////////////

//Function declaration
/* function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(2021);

console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1919);

console.log(age2);
 */

//////////////////////////////////////////////
//                                          //
//           Arrow Functions                //
//                                          //
//////////////////////////////////////////////
//Function expression
/* const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow Function: easier to write, simple, implicit return.
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1990, "Mark"));
console.log(yearsUntilRetirement(1980, "Bob")); */

//////////////////////////////////////////////
//                                          //
//           Functions Calling              //
//            Other Functions               //
//                                          //
//////////////////////////////////////////////

const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `🥤 Juice with ${applePieces} 🍎 apples pieces and ${orangesPieces} 🍊 oranges pieces.`;

  return juice;
};

console.log(fruitProcessor(2, 3));
