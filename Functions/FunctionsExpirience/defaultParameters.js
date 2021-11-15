'use strict';

const bookingArray = [];
const createBooking = function (
  flighNum,
  numPassengers = 1,
  price = 99 * numPassengers
) {
  const booking = {
    flighNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookingArray.push(booking);
};

createBooking('LH123');
createBooking('LX987', 2);
createBooking('WO', 3, 600);
