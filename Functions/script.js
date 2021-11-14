'use strict';
// Default set parameters function:

// const bookingArray = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 99 * numPassengers
// ) {
//   // setting default values
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookingArray.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2, undefined); // skip the parameter with undefined
// createBooking('LH123', undefined, 1000); //and leave the default value
// *****************

// Diference between premitive value: flight and reference: traveler
// const flight = 'LH234';
// const traveler = {
//   name: 'Kaloyan Ganchev',
//   pass: 6549873131,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LA999';
//   traveler.name = 'Mr. ' + traveler.name;
// };

// checkIn(flight, traveler);
// console.log(flight); // flight is still: LA234
// console.log(traveler); // traveler is already: Mr. Kaloyan Ganchev
// awere of the issues: JS has only: passing by value, but NOT passing by reference
// *********************

// Functions accepting Callback functions:
// Functions that accept other functions as input:

// First function for replace and lowercase string /lower-order function/:
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// // Second function for capitalize first word /lower-order function/:
// const upperFirstWord = function (str) {
//   const [firstWord, ...otherWords] = str.split(' ');
//   return [firstWord.toUpperCase(), ...otherWords].join(' ');
// };

// // Function that accept f()s = Higher-order function:
// const transformerFunc = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// const inputString = 'Javascript is the Best!';

// // Calling the Higher-order function:
// transformerFunc(inputString, upperFirstWord);

// //upperFirstWord is just the value, NOT calling the function(). So, it is said a callback function

// transformerFunc(inputString, oneWord);
// // JS usees callbacks all the time!!!

// const giveSmile = function () {
//   console.log(':D');
// };
// document.body.addEventListener('click', giveSmile);
// ['Kevi', 'Ani', 'Vesi'].forEach(giveSmile);

// // *********************
// // my callback functioin
// const inputStr = '  New genoration        is comm ing      now   . ';
// const input = prompt('Type your text here...');

// const withoutSpaceStr = function (str) {
//   return str.replace(/ /g, '');
// };

// const higherEditFunc = function (str2, fn2) {
//   console.log(`Your input string: ${input}`);

//   console.log(`Your edited string: ${fn2(str2)}`);
//   console.log(`Your edit function name: ${fn2.name}`);
// };

// higherEditFunc(input, withoutSpaceStr);

// const greet = function (greeting) {};
// ----------------------------------

// Function returning function:
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}!`);
//   };
// };

// const greetingHey = greet('Hey');
// greetingHey('John');
// greetingHey('Jouvi');

// greet('Hello')('Johnas');

// //the same result, but with arrow function:
// const greetArrow = greetingArrow => nameArrow =>
//   console.log(`${greetingArrow}, ${nameArrow}!`);
// greetArrow('HelloArrow')('JohnasArrow');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(234, 'Jonas Schmidt');
// lufthansa.book(699, 'Jock Sparow');
// console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // menualy set this book method:
// book.call(eurowings, 233, 'Sarah Williams');
// book.call(lufthansa, 363, 'Bilie Jean');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 358, 'Mary Cooper');
// const flightData = [583, 'George Cooper']; // .call the same swiss but with const:
// book.call(swiss, ...flightData);
// console.log(swiss);

// // .bind is the same as .call but it creates a new function
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// // we can create not only specific airlines, but specific flights with bind:
// // == specifing arguments before hand: eurowings, 23 == pattern: Partial Application
// // == part of the app are already set:
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtman');
// bookEW23('Martha Cooper');
// // -----------

// // .bind with Event Listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // .bind gives us a new specific function of the root function

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23); // is a new more specific function based on addTax
// console.log(addVat(100));
// console.log(addVat(23));
//  ----------------------

// ***Once functions: IIFE/Imidietly Invoked Function Expressions:
// this is for securiy reasons /OOP
(function () {
  console.log('This function will run imimdietly and once.');
})();

// the same function, but arrow
(() => console.log('Arrow IIFE function runs imimdietly and once.'))();

// !!! Imprtant to understand:
// ***Closures = variable environment attached to the function:
// Closures = is a connection to variables that existed at the function's birthplace
// Closures = has proprity over the scope chain:
// => executions have access to the contex enviroment in which were created:
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
