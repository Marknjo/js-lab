/**
 * Creates a separator markers with a title on the console
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

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
// Constructor functions & the new operator //
//                                          //
//////////////////////////////////////////////
//

//Arrow functions don't work to create objects

/* const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  // this.calAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const mark = new Person('Mark', 1990);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function atomatically return {}

console.log(mark.firstName, mark.birthYear);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1957);

console.log(matilda, jack);

console.log(mark instanceof Person);

//mark.calAge();

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

mark.calcAge();
matilda.calcAge();
jack.calcAge();

Person.prototype.species = 'Homo Sapiens';

console.log(mark.species);
console.log(matilda.species);

console.log(mark.hasOwnProperty('firstName'));
console.log(mark.hasOwnProperty('species')); */

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
// Prototypal Inheritance on Built-in Objs  //
//                                          //
//////////////////////////////////////////////
//

/* console.log(mark.__proto__);
console.log(mark.__proto__.__proto__);
console.log(mark.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 7, 8, 2, 8, 3, 2, 9, 1, 7]; // new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

//bad idea
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); */

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
//          Coding Challenge #1             //
//                                          //
//////////////////////////////////////////////
//

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;

  console.log(`${this.make} Accelerate to: ${this.speed} Km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;

  console.log(`${this.make} brake to: ${this.speed} Km/h`);
};

//Implementing the obkect using two cars
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
