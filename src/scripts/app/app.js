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
/* let marksWeight, marksHeight, johnsWeight, JohnsHeight;
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
 */

/////////////////////////////////
// Multiple decisions

/* const age = 18;

if (age >= 18) {
  console.log("Can have a driving license 🚕.");
} else {
  const yearsLeft = 18 - age;
  console.log(`The lad is too young. Wait another ${yearsLeft} years 😃`);
}

const birthYear = 2048;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century); */

//Data 1
// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnsWeight = 92;
// const JohnsHeight = 1.95;

//Data 2
/* const marksWeight = 95;
const marksHeight = 1.88;
const johnsWeight = 85;
const JohnsHeight = 1.76;

const markBMI = marksWeight / marksHeight ** 2;
const johnBMI = johnsWeight / JohnsHeight ** 2;

if (markBMI >= johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI(${markBMI}) is higher than Mark's (${johnBMI})`);
} */

///////////////////////////////
// Type conversion adn type coersion

//Type conversion
/* const inputYear = "1991";
console.log(inputYear + 18); //concatinate the string year : 199118
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); //type conversion

console.log(Number("Mark")); //NaN - invalid Number
console.log(typeof NaN);

console.log(String("1209"));

//Type coercion
console.log(`I am ${23} years old`);
console.log("23" + "10" - 3);
console.log("23" - "10" - 3);
console.log("23" * 2);
console.log("23" / 2);
console.log("23" > "18");

let n = "1" + 1; //'11'
n = n - 1; // '11' - 1
console.log(n); // 10 */

///////////////////////////////////////////////
//    Falsy and Truthy

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 0;

// if (money) {
//   console.log("Don't spend it all :)");
// } else {
//   console.log("You should get a job!");
// }

// let height; //if height is assigned a zero the with only height as the test, the test will fail. Be buggy.

// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("height is UNDEFINED");
// }

///////////////////////////////////////////////
//  Equality == and ===

/* const age = "18";

if (age === 18) {
  console.log("You just became and adult (Strict)");
}
if (age == 18) {
  console.log("You just became and adult (Loose)");
} */

///////////////////////////////////////////////
//  Logical operators: And, or & not

/* const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is can drive");
} else {
  console.log("Someone else should drive");
}

const isTired = true;

if (shouldDrive && !isTired) {
  console.log("Sarah is can drive");
} else {
  console.log("Someone else should drive");
}
 */

////////////////////////////////////////////
//  Coding Challege #3

//Data #1
/* const scoredolphins1 = 96;
const scoredolphins2 = 108;
const scoredolphins3 = 89;
const dolphinsAverageScore =
  (scoredolphins1 + scoredolphins2 + scoredolphins3) / 3;

const scoreKoalas1 = 96;
const scoreKoalas2 = 108;
const scoreKoalas3 = 89;
const koalasAverageScore = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3; */

//Results: NO team won

//Data #2

/* const scoredolphins1 = 97;
const scoredolphins2 = 112;
const scoredolphins3 = 101;
const dolphinsAverageScore =
  (scoredolphins1 + scoredolphins2 + scoredolphins3) / 3;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 123;
const koalasAverageScore = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3; */

//Results: Koalas team won, score 109 against dolphins, score: 103.33333333333333

//Data #3
const scoredolphins1 = 97;
const scoredolphins2 = 112;
const scoredolphins3 = 101;
const dolphinsAverageScore =
  (scoredolphins1 + scoredolphins2 + scoredolphins3) / 3;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 106;
const koalasAverageScore = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

//Results: dolphins, score: 103.33333333333333 and Koalas, score: 103.33333333333333 - went into a draw.

console.log(dolphinsAverageScore, koalasAverageScore);

const minimumScrore = 100;

if (
  dolphinsAverageScore >= minimumScrore &&
  koalasAverageScore >= minimumScrore
) {
  //determine which team won
  if (dolphinsAverageScore > koalasAverageScore) {
    //Dolphin won
    console.log(
      `dolphins team won 🏆, score ${dolphinsAverageScore} against Koalas, score: ${koalasAverageScore}`
    );
  } else if (dolphinsAverageScore === koalasAverageScore) {
    //They both draw
    console.log(
      `dolphins, score: ${dolphinsAverageScore} and Koalas, score: ${koalasAverageScore} - went into a draw.`
    );
  } else {
    //Koala won
    console.log(
      `Koalas team won 🏆, score ${koalasAverageScore} against dolphins, score: ${dolphinsAverageScore}`
    );
  }
} else if (
  dolphinsAverageScore >= minimumScrore &&
  koalasAverageScore < minimumScrore
) {
  //Koalas did not have scores above the minimum score, Dolhine won automatically
  console.log(
    `Dolphins team won 🏆, score ${dolphinsAverageScore} against Koalas, score: ${koalasAverageScore}`
  );
} else if (
  dolphinsAverageScore < minimumScrore &&
  koalasAverageScore >= minimumScrore
) {
  //dolphins did not achieve more than 100 scores, koalas win automatically
  console.log(
    `Koalas team won 🏆, score: ${koalasAverageScore} against dolphins, score: ${dolphinsAverageScore}`
  );
} else {
  //no team scored above the minimum score
  console.log(
    `No team won. Neither team achieved a score above the minimum score ${minimumScrore}`
  );
}
