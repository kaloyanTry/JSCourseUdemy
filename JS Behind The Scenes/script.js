'use strict';
// function calcAge(birthYear) {
//   const age = 2022 - birthYear;

//   function printAge() {
//     const output = `Your are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Kaloyan';
// calcAge(1978);
//-------------

//this keyword
// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(1978);
// const jonas = {
//   year: 1991,
//   calcAgeMethod: function () {
//     console.log(this);
//     console.log(2034 - this.year);
//   },
// };
// jonas.calcAgeMethod();

//primetives vs objects:
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Johnas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend: ', friend);
console.log('Me: ', me);
