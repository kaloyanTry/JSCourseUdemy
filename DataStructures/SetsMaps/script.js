'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIgredients, ...otherIngredients) {
    console.log(mainIgredients);
    console.log(otherIngredients);
  },
};

// SETS - Creating sets:
// const orderedSet = new Set(['Pasta', 'Pizza', 'Risoto', 'Pizza', 'Pasta']);
// console.log(orderedSet);

// const stringSet = new Set('Johnas');
// console.log(stringSet);

// // Working with sets:
// console.log(orderedSet.size); //length
// console.log(orderedSet.has('Pizza')); //true
// orderedSet.add('Garlic bread'); //add an element
// orderedSet.add('Buttter bread');
// console.log(orderedSet);
// orderedSet.delete('Buttter bread'); // delete an element
// console.log(orderedSet);
// // orderedSet.clear(); // delete all the information
// // console.log(orderedSet);

// for (const order of orderedSet) {
//   console.log(order);
// }

// const staff = ['Shef', 'Waiter', 'Waiter', 'Shef', 'Manager'];
// //const staffOrdered = new Set(staff); // creating a set from array
// const staffOrdered = [...new Set(staff)]; //creating new array without duplicates
// console.log(staffOrdered);

// MAPS
// const restMap = new Map();
// restMap.set('name', 'Clasica Italiano'); //add info
// restMap.set('location', '13 Plazza');
// restMap.set(1, 'Rome, Italy');
// restMap.set(2, 'Lisbon, Portugal');
// console.log(restMap);

// restMap
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are closed :(');

// console.log(restMap.get('name'));
// const time = 21;
// console.log(
//   restMap.get(time > restMap.get('open') && time < restMap.get('close'))
// );
// console.log(restMap);

// console.log(restMap.has('categories'));
// console.log(restMap.size);
// const arr = [1, 2, 3];
// restMap.set(arr, 'Test'); //ading array as a Key
// restMap.set(document.querySelector('h1'), 'Heading');

// console.log(restMap);

// // When you have an object, you can convert it easy to a Map:
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// // Creating a Game-Quiz:
// // creating a Map at once with all info:
// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Pyton'],
//   [4, 'JS'],
//   ['correct', 4],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// console.log(question.get(question));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
// // -------------------

// // converting map to array:
// console.log([...question]);

//  STRINGS:

const airlineString = 'TAP Air Portugal';
const plane = 'A320';

// Manipulating strings:
console.log(airlineString.length);
console.log('B737'.length); //display directly the length

console.log(airlineString.indexOf('r'));
console.log(airlineString.lastIndexOf('r'));

console.log(airlineString.slice(4)); // extract string beginning from the pos/num 4
console.log(airlineString.slice(4, 7)); // extract string finishing to the pos/num 7
console.log(airlineString.slice(0, airlineString.lastIndexOf(' ') + 1));

// extrect back to forward string
console.log(airlineString.slice(-3));

// function check if the seat is in the middle:
const checkMiddleSeat = function (seat) {
  const currentSeat = seat.slice(-1);
  if (currentSeat === 'B' || currentSeat === 'E')
    console.log('You are not that lucky in the middle :(');
  else console.log('You are lucky :)');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('11E');

const passenger = 'JoNaS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

const passengerFunc = function (pasangerName) {
  const nameLower = pasangerName.toLowerCase();
  const correctName = nameLower[0].toUpperCase() + nameLower.slice(1);

  return correctName;
};
console.log(passengerFunc('KALoyAn'));

// checking email address - toLowerCase().trim():
const email = 'princat@mmm.io';
const loginInputEmail = '   PrincaT@MMM.IO  \n   ';
const normalizedEmail = loginInputEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing signs:
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

// replace all words that match
const annoncement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(annoncement.replaceAll('door', 'gate'));
console.log(annoncement.replace(/door/g, 'gate')); // the same method, but global/g

const planeIncludes = 'A32new';
console.log(planeIncludes.includes('Boeing')); // boolien
console.log(planeIncludes.startsWith('A'));

// very powerfull split() and join() methods
console.log('a+good+man+show'.split('+'));
console.log('Kaloyan Ganchev'.split(' '));

const [firstName, secondName] = 'Kaloyan Ganchev'.split(' ');
const newName = ['Mr.', firstName, secondName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jesica ann smith davis');
capitalizeName('jonas schmedtman');

const maskCreditCardNumber = function (number) {
  const numberString = number + '';
  const lastNums = numberString.slice(-4);

  return lastNums.padStart(numberString.length, '*');
};

console.log(maskCreditCardNumber(8714689799));
console.log(maskCreditCardNumber(2121310212131121));
console.log(maskCreditCardNumber('0564656565971323299578'));
