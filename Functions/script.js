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
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//Second function for capitalize first word /lower-order function/:
const upperFirstWord = function (str) {
  const [firstWord, ...otherWords] = str.split(' ');
  return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

// Function that accept f()s = Higher-order function:
const transformerFunc = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

const inputString = 'Javascript is the Best!';

// Calling the Higher-order function:
transformerFunc(inputString, upperFirstWord);

//upperFirstWord is just the value, NOT calling the function(). So, it is said a callback function

transformerFunc(inputString, oneWord);
// JS usees callbacks all the time!!!

const giveSmile = function () {
  console.log(':D');
};
document.body.addEventListener('click', giveSmile);
['Kevi', 'Ani', 'Vesi'].forEach(giveSmile);
