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

// destructing arrays:
// let [first, , third] = restaurant.categories;
// console.log(first, third);

// reasign the values/switching the variables
// [first, third] = [third, first];
// console.log(first, third);

//destructuring array:
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//the same values:
// const [x, y, z] = arr;
// console.log(arr);
// console.log(x, y, z);

// nested destruturing:
// const nested = [2, 3, [4, 5]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// destructuring objects:
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// destructing default values:
// const { menu = [], startMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutaitng variables:
// let a = 101;
// let b = 340;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// *** SPREAD operator: Really very usefull***
// const arr = [7, 8, 9];
// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);
// // add new menu item with the spread operator: ...
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// copy array - ... spread:
// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// spread function arguments - modern js:
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 4);
// add(8, 6, 9, 1, 3, 4, 2);

// const x = [23, 4, 6];
// add(...x);

// ........

// REST operator with arrays:
// const arr = [1, 2, ...[4, 5]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// // REST with object elements:
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// // REST functions-multuple arguments:
// restaurant.orderPizza('tommato', 'mashrooms', 'olive', 'onion');
// restaurant.orderPizza('tommato');

// logical operator OR || short-curcuiting = return first true:
// const guestsNumber = restaurant.numbers || 10;

// For..of LOOP:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
// for...of with i:index items
for (const itemI of menu.entries()) {
  console.log(itemI);
}
// the same but with destructuring indexes
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
