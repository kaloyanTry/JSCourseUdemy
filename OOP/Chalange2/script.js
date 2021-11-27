'use strict';

class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = this.speed * 1.6;
  }
}
const ford = new CarClass('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.break();
