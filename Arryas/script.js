'use strict';

// 1. SLICE method does not mutatge the original one:
let arr = ['a', 'b', 'c', 'd', 'e', 'g', 'f'];
console.log(arr.slice(2, 5));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(...arr);

// // 2. SPLICE method change the original array and it is NOT longer the same:
console.log(arr.splice(2));
console.log(arr.splice(1, 2)); // the second number/2/ is the number of elements that we want to delete
console.log(arr);

// // 3. REVERSE mutate the array
let arr2 = ['b', 'f', 'c', 'e', 'd', 'a', 'g'];
let arr3 = ['a', 'b', 'c', 'd', 'e', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // arr2 is not longer the same, but reversed

// // 4. CONCAT method does not mutatge the original one:
console.log(arr3.concat(arr2));
console.log(...arr3, ...arr2); // the same operation

// //5. JOIN
console.log(arr3.join(' - '));

// 6. Modern method .at()
const arr = [2, 3, 4, 5, 6];
console.log(arr[0]); //traditional way of getting the index: brackets notation
console.log(arr.at(0)); // the modern way
console.log(arr.at(-1)); // last element
console.log('kaloyan'.at(0));
console.log('kaloyan'.at(-1));

const movementsMethods = [200, 450, -400, 3000, -650, -130, 70, 1300];

movementsMethods.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposite is ${movement}`);
  } else {
    console.log(`Your withdrew ${Math.abs(movement)}`);
  }
});

movementsMethods.forEach(function (mov, i, arr) {
  // first: ell, second: i;
  if (mov > 0) {
    console.log(`${i + 1}. You deposite is ${mov}`);
  } else {
    console.log(`${i + 1}. Your withdrew ${Math.abs(mov)}`);
  }
});

const currenciesMap = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currenciesMap.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currencesSet = new Set(['USD', 'EUR', 'EUR', 'USD', 'GBP']);
console.log(currencesSet);
currencesSet.forEach(function (value, _, set) {
  // JS unnecessary variable: _
  console.log(value);
});
