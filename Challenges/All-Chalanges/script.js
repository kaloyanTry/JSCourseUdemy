const jsSet = new Set();
jsSet.add(1);
jsSet.add(3);
jsSet.add(4);
jsSet.add(8);

console.log(jsSet);
jsSet.delete(4);
console.log(jsSet);

let fruits = new Map([
  ['banana', 300],
  ['apple', 600],
]);
console.log(fruits);

fruits.set('orange', 400);
console.log(fruits);

console.log(fruits.values());

const nums = [2, 3, 4, 6, 7, 5, 8];
const numsMulty = nums.map((num) => num * 3);
console.log(numsMulty);
