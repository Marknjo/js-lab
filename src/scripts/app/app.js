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

/* class CarCl {
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
ford.accelerate(); */

/* f;
ford.brake(); */

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
//      Inheritance Btwn "Classes":         //
//            Constructor Func              //
//                                          //
//////////////////////////////////////////////
//

/* const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

console.log(mike);

mike.introduce();
mike.calcAge(); */

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
//          Coding Challenge #3             //
//                                          //
//////////////////////////////////////////////
//

/* class CarCl {
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

//1. create CarEV Class
const CarEV = function (make, speed, charge) {
  //2.1. Implement inheritance
  CarCl.call(this, make, speed);

  this.charge = charge;
};

//2.2. Linking propertotypes
CarEV.prototype = Object.create(CarCl.prototype);
//Set the constructor of CarEV to itself
CarEV.prototype.constructor = CarEV;

CarEV.prototype.chargeBattery = function (chargeTo) {
  if (chargeTo + this.charge > 100) {
    this.charge = 100;
    return;
  }

  this.charge += chargeTo;
};

CarEV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;

  console.log(
    `${this.make} going at ${this.speed}Km/h, with a charge of ${this.charge}%.`
  );

  console.log(
    `${this.make} going at ${this.speedUS}mi/h, with a charge of ${this.charge}%.`
  );
  console.log('\n');
};

const tesla = new CarEV('Tesla', 120, 23);

console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.accelerate();

tesla.chargeBattery(90);

tesla.accelerate();
tesla.brake();

tesla.accelerate();

tesla.brake(); */

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
//      Inheritance Btwn "Classes":         //
//               ES6 Classes                //
//                                          //
//////////////////////////////////////////////
//
/* 
class PersonCL {
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

class StudentCl extends PersonCL {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

martha.introduce();
martha.calcAge();
 */
//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
//              ES6 Classes                 //
//                Example                   //
//                                          //
//////////////////////////////////////////////
//

/* class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  //Public Interface - API
  deposit(val) {
    this.movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

console.log(acc1);

acc1.deposit(250);
acc1.withdrawal(145);

acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
console.log(acc1.pin); */

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
//       ES6 Classes: Encapsulation         //
//     Protected properties & methods       //
//                                          //
//////////////////////////////////////////////
//

//Reasons#1 protect code fomr outside the class from manipulating with internal logic
//Reasons#2 prevent code breaking

//JS does not yet support encapsulation out of the box
//Still in proposal

/* class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;

    //this is protected but not enforced
    this._movements = []; //protect
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  //public interface
  getMovements() {
    return this._movements;
  }

  //Public Interface - API
  deposit(val) {
    this._movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    if (val < 100) return;
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

console.log(acc1);

acc1.deposit(250);
acc1.withdrawal(145);

acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);

console.log(acc1.getMovements()); */

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
//       ES6 Classes: Encapsulation         //
//     Class Fields (Stage 3 - draft)       //
//                                          //
//////////////////////////////////////////////
//

//1)public fields
//2)private fields
//3)public methods
//4)private methods

//(There is a static method)

/* class Account {
  //1)public field (Instances)
  locale = navigator.language;

  //2)private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  //3)public methods
  //public interface
  getMovements() {
    return this.#movements;
  }

  //Public Interface - API
  deposit(val) {
    this.#movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }
  requestLoan(val) {
    if (this._approveLoan) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  static helper() {
    console.log(`Only available on this class alone`);
  }

  //4)private methods
  //#approveLoan(val) not yet implemented
  _approveLoan(val) {
    if (val < 100) return;
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdrawal(145);
console.log(acc1);
console.log(acc1.getMovements());

Account.helper(); */

//////////////////////////////////////////////
//                                          //
//            Javascript OOP                //
//              ES6 Classes                 //
//            Chaining Methods              //
//                                          //
//////////////////////////////////////////////
//
class Account {
  //1)public field (Instances)
  locale = navigator.language;

  //2)private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  //3)public methods
  //public interface
  getMovements() {
    return this.#movements;
  }

  //Public Interface - API
  deposit(val) {
    this.#movements.push(val);

    return this;
  }

  withdrawal(val) {
    this.deposit(-val);

    return this;
  }

  requestLoan(val) {
    if (this._approveLoan) {
      this.deposit(val);

      console.log(`Loan approved`);

      return this;
    }
  }

  static helper() {
    console.log(`Only available on this class alone`);
  }

  //4)private methods
  //#approveLoan(val) not yet implemented
  _approveLoan(val) {
    if (val < 100) return;
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250); //also works
acc1.withdrawal(50);

acc1
  .deposit(300)
  .deposit(500)
  .withdrawal(35)
  .requestLoan(25000)
  .withdrawal(4000);

console.log(acc1.getMovements());

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
