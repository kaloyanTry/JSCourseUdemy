'use strict';

// const Person = function (firstName, birthYear) {
//   // console.log(this);
//   this.firstName = firstName; //Instance properties
//   this.birthYear = birthYear;

//   // Very bad practise to make methods in constructor function like this:
//   // this.calcAge = function () {
//   //   console.log(2022 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // **Creating an object:
// // 1. New empty object {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype: set properties
// // 4. function automatically return {}

// console.log(jonas instanceof Person);

// const veni = new Person('Veni', 1996);
// const gabi = new Person('Gabi', 2019);
// console.log(veni);
// console.log(gabi);

// // Create a method to Person: Inherit a method or Deligation:
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// jonas.calcAge();
// veni.calcAge();
// gabi.calcAge();

// // Creating a property: Inherit a propery
// Person.prototype.species = 'Homo Sapiens';

// console.log(jonas.__proto__); //__proto__ = property of the instance jonas
// console.log(jonas.__proto__ === Person.prototype);
// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 5, 6, 9, 4];
// console.log(arr.__proto__);

// -----------------------
// Chalange 1:
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   //console.log(this.speed + 10);

//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   //console.log(this.speed - 5);

//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// console.log(bmw);
// console.log(mercedes);

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.break();
// mercedes.accelerate();

// bmw.break();
// bmw.break();
// bmw.break();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();

////////////////////////////////////////
// ES6 classes:
// class PersonClass {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }

//   // Set a property that already exists:
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // get age() {
//   //   return 2022 - this.birthYear;
//   // }
// }

// const jore = new PersonClass('Jore', 1983);

// // Getters and Setters:
// const account = {
//   owner: 'Kalo',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

///////////////////////////////////////////
// Object.create method of creating object:
// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 1992;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

////////////////////////////////////////
// Chalange 2:
// class CarClass {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   break() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = this.speed * 1.6;
//   }
// }

// const ford = new CarClass('Ford', 120);
// console.log(ford.speedUS);

// ford.accelerate();
// ford.accelerate();
// ford.break();

/////////////////////////////////
// Inheritance between classes:
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, coursre) {
//   Person.call(this, firstName, birthYear);
//   this.coursre = coursre;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.inroduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.coursre}`);
// };

// const mike = new Student('Mike', 1999, 'Computer Science');
// mike.inroduce();
// mike.calcAge();

// console.dir(Student.prototype.constructor);

////////////////////////////
// Code Chalange 3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(`Tesla going at ${this.speed} km/h, with ${this.charge}%`);
// };

// const tesla = new EV('Tesla', 120, 23);

// tesla.accelerate();
// tesla.chargeBattery(90);
// tesla.accelerate();

////////////////////////////////
// ES6 Inheritance between Classes:
// class PersonClass {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   introduce() {
//     console.log('Hi, there!');
//   }
// }

// class StudentClass extends PersonClass {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`I am ${this.fullName} and I am styding ${this.course}.`);
//   }

//   calcAge() {
//     console.log(
//       `I am ${2037 - this.birthYear} years old, but it feels like I am ${
//         2037 - this.birthYear + 10
//       } years old now.`
//     );
//   }
// }

// const marta = new StudentClass('Marta Gonzales', 1999, 'Maths');

// marta.introduce();
// marta.calcAge();
// ----------------------------------

// Object.create Class Inheritance:
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// //const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName}, and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();
//-----------------------------

// Class Encapsulation:
// class Account {
//   // 1) Public fields:
//   locale = navigator.language;
//   //_movements = [];

//   // 2) Private fields:
//   #movements = [];
//   #pin;

//   constructor(owner, currancy, pin) {
//     this.owner = owner;
//     this.currancy = currancy;
//     this.#pin = pin;

//     //this._movements = []; //protected property
//     //this.locale = navigator.language;

//     console.log(`Thanks for opening account ${owner}`);
//   }
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   // Private methods /not available for now/:
//   // #approveLoan(val) {
//   //   return true;
//   // }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(350);
// acc1.withdraw(140);
// console.log(acc1);
// console.log(acc1.getMovements());
// //console.log(acc1.#movements);

// // Chaining class methods:
// acc1.deposit(300).deposit(500).withdraw(150);
// console.log(acc1);
// console.log(acc1.getMovements());

// Code Chalange 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }

  break() {
    this.speed -= 5;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().break().chargeBattery(50).accelerate();
console.log(rivian);
