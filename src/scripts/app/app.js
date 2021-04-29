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

function logger() {
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
console.log(appleOrangeJuice);
