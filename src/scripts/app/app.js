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

/* const Car = function (make, speed) {
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
 */

//////////////////////////////////////////////
//                                          //
//             Javascript OOP               //
//               ES6 Classes                //
//                                          //
//////////////////////////////////////////////
//

//Class expression

/* const personCL = class {

} */

//class declaration

/* class PersonCL {
  //Constructor
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}.`);
  }

  //getters and setters

  get age() {
    return 2037 - this.birthYear;
  }

  //Pattern important to understand
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  //Static methods
  static hey() {
    console.log('Hey there');
  }
}

const jessica = new PersonCL('Jesica Jones', 1996);

console.log(jessica);
jessica.calcAge();

jessica.greet();

//1. Classes are NOT hoisted - can't use them before declared in the code
//2. Class are first-class citizes - pass them as arguments and returned as values
//3. Classes are executed in strict mode

//////////////////////////////////////////////
//                                          //
//             Javascript OOP               //
//            Getters & Setters             //
//                                          //
//////////////////////////////////////////////
//

//Accessors properties - normal
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 350;

console.log(account.movements);

console.log(jessica.age);

const walter = new PersonCL('Walter White', 1965);

//1. useful for data Validation

//////////////////////////////////////////////
//                                          //
//             Javascript OOP               //
//             Static Methods               //
//                                          //
//////////////////////////////////////////////
//

//1. Useful in implementing some sort of helper methods tied to the class or additional functions

//calling static method
PersonCL.hey();

//Can't be called on an object calling the calles
//i.e.
//-> jessica.hey(); //does not work: Uncaught TypeError: jessica.hey is not a function */

//////////////////////////////////////////////
//                                          //
//             Javascript OOP               //
//             Object.create                //
//                                          //
//////////////////////////////////////////////
//

//3rd way of creating Objects or classes in JavaScript
/* const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  //Manual way of initializing the object
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.firstName = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

//better way
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);

sarah.calcAge();
console.log(sarah); */

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
//          Coding Challenge #2             //
//                                          //
//////////////////////////////////////////////
//

//1. Class: CarCl
//2. Setter speedUS (mi/h) where = (km/h)/1.6
//3. Getter speedUS
//4. accelerate and Brake

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;

    console.log(`${this.make} accelerates to speed of: ${this.speed} km/h`);
    console.log(`${this.make} accelerates to speed of: ${this.speedUS} mi/h`);
    console.log('\n');
  }

  brake() {
    this.speed -= 5;

    console.log(`${this.make} brakes to speed of: ${this.speed} mi/h`);
    console.log(`${this.make} brakes to speed of: ${this.speedUS} mi/h`);
    console.log('\n');
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new CarCl('Ford', 120); //120km/hr
console.log(ford.speedUS);

ford.accelerate();
ford.brake();

ford.speedUS = 140;
consoleSeparator('SPEED 140');
ford.accelerate();
ford.accelerate();
ford.accelerate();

/* f;
ford.brake(); */

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
