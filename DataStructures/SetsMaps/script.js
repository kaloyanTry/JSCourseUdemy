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
const restMap = new Map();
restMap.set('name', 'Clasica Italiano');
restMap.set('location', '13 Plazza');
restMap.set(1, 'Rome, Italy');
restMap.set(2, 'Lisbon, Portugal');
console.log(restMap);

restMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');

console.log(restMap.get('name'));
const time = 21;
console.log(
  restMap.get(time > restMap.get('open') && time < restMap.get('close'))
);
console.log(restMap);

console.log(restMap.has('categories'));
console.log(restMap.size);
const arr = [1, 2, 3];
restMap.set(arr, 'Test'); //ading array as a Key
restMap.set(document.querySelector('h1'), 'Heading');

console.log(restMap);
