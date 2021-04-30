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

/* const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `🥤 Juice with ${applePieces} 🍎 apples pieces and ${orangesPieces} 🍊 oranges pieces.`;

  return juice;
};

console.log(fruitProcessor(2, 3)); */

//////////////////////////////////////////////
//                                          //
//         Coding Challenge #1              //
//                                          //
//////////////////////////////////////////////

//Scores Average calculator
/* const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

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
 */

//////////////////////////////////////////////
//                                          //
//        Arrays: Data Structure            //
//                                          //
//////////////////////////////////////////////

//Two Most importand data structures in js: Arrays and objects
//Big container we can throw variables and later reference

/* const friends = ["Michael", "Steven", "Peter"]; //comma outside the strings - array literal syntax

console.log(friends);

const y = new Array(1991, 1984, 2008, 2020); //can hold any data type

console.log(y);

//getting out values from the array

console.log(friends[0]); //arrays are zero based
console.log(friends[2]);

console.log(friends.length); //length is a property of array.
console.log(friends[friends.length - 1]);

//Array mutation: Only primitive values are immutable.
friends[2] = "Jay";
console.log(friends);

//Array can hold different data types at the same time
const firstName = "Jonas";
const jonas = [firstName, "Schemedtmann", 2007 - 1991, "teacher", friends];

console.log(jonas);

console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [age1, age2, age3];

console.log(ages); */

//////////////////////////////////////////////
//                                          //
//      Arrays Operations: Methods          //
//                                          //
//////////////////////////////////////////////

/* const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay"); //adds elements to the end of array

console.log(friends);
console.log(newLength);

//Adding element to the beginning or array
const newLenghtShift = friends.unshift("John");
console.log(friends);
console.log(newLenghtShift);

//Remove element to the end of array
friends.pop(); //No need to pass the argument.Returns the removed element
const popped = friends.pop();
console.log(friends);
console.log(popped);

//Remove the element at the beggining of the array
const firstElementRemoved = friends.shift();
console.log(friends);
console.log(firstElementRemoved);

//The position of the element in the array

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

//Checks if the element is in the array or not
friends.push(23);

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); //It tests with strict mode. No tyep coesion
//Use includes to test conditions

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} */

//////////////////////////////////////////////
//                                          //
//         Coding Challenge #2              //
//                                          //
//////////////////////////////////////////////

/* const bills = [125, 555, 44];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];

console.log(tips);

const totals = [
  tips[0] + bills[0],
  tips[1] + bills[1],
  tips[tips.length - 1] + bills[bills.length - 1],
];

console.log(totals);

console.log(bills, tips, totals); */

//////////////////////////////////////////////
//                                          //
//        Introduction to Objects           //
//                                          //
//////////////////////////////////////////////

/* const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

//groups together related variables together.
//Order doesn't matter at all when retrieving them.
//Unstructured data

const jonas = {
  firstName: "Mark",
  lastName: "Njoroge",
  age: 2037 - 1993,
  job: "Frontend Developer",
  friends: ["Michael", "Peter", "Steven"],
}; */

//////////////////////////////////////////////
//                                          //
//       Retrieving Data in Objects         //
//        Dot vs Bracket Notation           //
//                                          //
//////////////////////////////////////////////
const jonas = {
  firstName: "Jonas",
  lastName: "Schemidtmann",
  age: 2037 - 1991,
  job: "Frontend Developer",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName); //dot notation
console.log(jonas["lastName"]); // Bracket notation

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//dynamic naming and using of expression is possible when using the bracket notation

const interestedIn = prompt(
  "What would you like to know about Mark? Choose between firstName, lastName, age, job, and friends 🤪."
);

console.log(interestedIn, typeof interestedIn);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request 🌋!");
}

//Adding elements to the object
jonas.location = "Kenya";
jonas["twitter"] = "@Marknjo";

console.log(jonas);

//challenge
// "Jonas has 3 friends, and his best friend is called Michael";

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}"`
);
