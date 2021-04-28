import "./utils/utils";

/* let js = "Amazing";

if (js === "Amazing") {
  //alert("JavaScript is amazing");
}

let firstName = "Matilda";
let lastName = "Kafna";

console.log(firstName + " " + lastName); */

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// // console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");

// javaScriptIsFun = "YES!";

// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

/**
 *   Declaring Variables: Let, const
 **/

//let - declaring variables that can dynamically change their values later
// let age = 30;
// age = 31; //rassigning a value/mutate the variable

//const - declare variable shich cannot be mutated/immutable
//      - Const needs an initial variable
// const birthYear = 1991;
// birthYear = 1990;

//const job;

//var - for regacy reasons - should be avoided. ES5

// var job = "Programmer";
// job = "teacher";

/**
 *   Operators
 **/

//Arithmetic operators
/* const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 - exponetiation operator

const firstName = "Jonas";
const lastName = "Schemedtmann";

console.log(firstName + " " + lastName); //concatnation
console.log(`${firstName} ${lastName}`); //template strings

//Assignment operators
let x = 10 + 5;
x += 10; //15 + 10
x *= 4;
x++;
x--;
x--;
x /= 3;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
 */

/* const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;

console.log(currentYear - 1991 > currentYear - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, averageAge);
 */

//////////////////////////////////
//          COding Challenge 1

//Formula: BMI = mass / height ** 2 = mass / (height * height)
let marksWeight, marksHeight, johnsWeight, JohnsHeight;
//Data 1
marksWeight = 78;
marksHeight = 1.69;
johnsWeight = 92;
JohnsHeight = 1.95;

let markBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnsWeight / JohnsHeight ** 2;

let markHigherBMI = markBMI >= johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

//Data 2
marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
JohnsHeight = 1.76;

markBMI = marksWeight / marksHeight ** 2;
johnBMI = johnsWeight / JohnsHeight ** 2;

markHigherBMI = markBMI >= johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
