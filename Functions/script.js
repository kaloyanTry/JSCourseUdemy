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
