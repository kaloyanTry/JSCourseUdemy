'use strict';

const Person = function (firstName, birthYear) {
  // console.log(this);
  this.firstName = firstName; //Instance properties
  this.birthYear = birthYear;

  // Very bad practise to make methods in constructor function like this:
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// **Creating an object:
// 1. New empty object {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype: set properties
// 4. function automatically return {}

console.log(jonas instanceof Person);

const veni = new Person('Veni', 1996);
const gabi = new Person('Gabi', 2019);
console.log(veni);
console.log(gabi);

// Create a method to Person: Inherit a method or Deligation:
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

jonas.calcAge();
veni.calcAge();
gabi.calcAge();

// Creating a property: Inherit a propery
Person.prototype.species = 'Homo Sapiens';

console.log(jonas.__proto__); //__proto__ = property of the instance jonas
console.log(jonas.__proto__ === Person.prototype);
console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 9, 4];
console.log(arr.__proto__);

// -----------------------

// Chalange 1:

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  //console.log(this.speed + 10);

  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  //console.log(this.speed - 5);

  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);
console.log(mercedes);

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.break();
mercedes.accelerate();

bmw.break();
bmw.break();
bmw.break();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
