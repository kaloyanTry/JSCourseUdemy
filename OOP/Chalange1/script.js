'use strict';

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
