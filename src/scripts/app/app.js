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

//////////////////////////////////////////////
//                                          //
//         Coding Challenge #1              //
//                                          //
//////////////////////////////////////////////

//Scores Average calculator
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(avgDolphins1, avgKoalas1);
console.log(avgDolphins2, avgKoalas2);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(
      `Dolphins 🏆 wins (${avgDolphins} points vs ${avgKoalas} points)`
    );
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(
      `Koalas 🏆 wins (${avgKoalas} points vs ${avgDolphins} points)`
    );
  } else {
    console.log(`No team wins 😔`);
  }
};

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
