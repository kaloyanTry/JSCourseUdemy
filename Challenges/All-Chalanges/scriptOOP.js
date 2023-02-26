'use strict';

//// OOP
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} goes with ${this.speed}++`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} goes with ${this.speed}--`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = this.speed * 1.6;
  }
}

const carBMV = new Car('BMW', 120);
const carMercedes = new Car('Mercedes', 95);
carBMV.accelerate();
carBMV.accelerate();

carMercedes.brake();
carMercedes.brake();
carMercedes.brake();
console.log('speed in mi/h', carBMV.speedUS);

class EV extends Car {
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

  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EV('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();
console.log(rivian);
