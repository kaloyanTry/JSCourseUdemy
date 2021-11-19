'use strict';

// Data:
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 1. SLICE method does not mutatge the original one:
// let arr = ['a', 'b', 'c', 'd', 'e', 'g', 'f'];
// console.log(arr.slice(2, 5));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(...arr);

// // // 2. SPLICE method change the original array and it is NOT longer the same:
// console.log(arr.splice(2));
// console.log(arr.splice(1, 2)); // the second number/2/ is the number of elements that we want to delete
// console.log(arr);

// // // 3. REVERSE mutate the array
// let arr2 = ['b', 'f', 'c', 'e', 'd', 'a', 'g'];
// let arr3 = ['a', 'b', 'c', 'd', 'e', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2); // arr2 is not longer the same, but reversed

// // // 4. CONCAT method does not mutatge the original one:
// console.log(arr3.concat(arr2));
// console.log(...arr3, ...arr2); // the same operation

// // //5. JOIN
// console.log(arr3.join(' - '));

// // 6. Modern method .at()
// const arr = [2, 3, 4, 5, 6];
// console.log(arr[0]); //traditional way of getting the index: brackets notation
// console.log(arr.at(0)); // the modern way
// console.log(arr.at(-1)); // last element
// console.log('kaloyan'.at(0));
// console.log('kaloyan'.at(-1));

// const movementsMethods = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movementsMethods.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposite is ${movement}`);
//   } else {
//     console.log(`Your withdrew ${Math.abs(movement)}`);
//   }
// });

// movementsMethods.forEach(function (mov, i, arr) {
//   // first: ell, second: i;
//   if (mov > 0) {
//     console.log(`${i + 1}. You deposite is ${mov}`);
//   } else {
//     console.log(`${i + 1}. Your withdrew ${Math.abs(mov)}`);
//   }
// });

// const currenciesMap = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currenciesMap.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currencesSet = new Set(['USD', 'EUR', 'EUR', 'USD', 'GBP']);
// console.log(currencesSet);
// currencesSet.forEach(function (value, _, set) {
//   // JS unnecessary variable: _
//   console.log(value);
// });

// .map
// const eurToUsd = 1.1;

// // const movementsUsd = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // }); //the standard way = regular function
// const movementsUsd = movements.map(mov => mov * eurToUsd);
// console.log(movementsUsd);

// const movementsDesc = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDesc);
// --------------

// .find() = returns the first element of the array that setisfy the condition:
// const firstElement = movements.find(mov => mov < 0);
// console.log(firstElement);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// .some()
//console.log(movements.some(mov => mov > 0));

// .every()
//onsole.log(movements.every(mov => mov > 0));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // combine the elements at first level of nesting

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2)); // combine the elements at second level of nesting

// ***********************
// Array Methods Practice:

// 1. Arrays: sum, flat, map
// const bankDepositSum = accounts.map(acc => acc.movements);
// console.log(bankDepositSum); // all arrays = Array of arrays

// console.log(bankDepositSum.flat()); // all arrays combine together in one

// // and together array method looks like this:
// const depositSum = accounts.flatMap(acc => acc.movements);
// console.log(depositSum);

// console.log(
//   depositSum.filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0)
// ); // sum of all movements

// // 2. Count the elements in array:
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// // 3. Sum all deposits and withdrawals with reduce method:
// const { deposit, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       cur > 0 ? (sum.deposit += cur) : (sum.withdrawals += cur);
//       // sum[cur > 0 ? 'deposit' : 'withdrawals'] += cur; == more sophisticated way
//       return sum;
//     },
//     { deposit: 0, withdrawals: 0 }
//   );
// console.log(deposit, withdrawals);

// 4. Title Capitalize function arrays and strings:
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
