let massMark1 = 78;
let hightMark1 = 1.69;
let massJohn1 = 92;
let hightJohn1 = 1.95;

let massMark2 = 95;
let hightMark2 = 1.88;
let massJohn2 = 85;
let hightJohn2 = 1.76;

let BMIMark1 = massMark1 / hightMark1 ** 2;
let BMIMark2 = massMark2 / hightMark2 ** 2;
let BMIJohn1 = massJohn1 / hightJohn1 ** 2;
let BMIJohn2 = massJohn2 / hightJohn2 ** 2;

let mark1HigherBMI = BMIMark1 > BMIJohn1;
let mark2HigherBMI = BMIMark2 > BMIJohn2;

console.log(BMIMark1);
console.log(BMIMark2);
console.log(BMIJohn1);
console.log(BMIJohn2);

console.log(mark1HigherBMI);
console.log(mark2HigherBMI);
