'use strict';

// function logger() {
//   console.log("My name is Kaloyan!");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice is made with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// const currentJuice = fruitProcessor(8, 4);
// console.log(currentJuice);

//----------------
//1.Function declaration = type of function:
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1978);
// console.log(age1);

// //2.Function expression = type of function /anonymus function
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1978);
// console.log(age2);

// //3.Function type: arrow function:
//const calcAverage = () => (44 + 23 + 71) / 3;
//const calcAgerage = (a, b, c) => (a + b + c) / 3; //3 parameters
// const calcaAge3 = birthYear => 2037 - birthYear; //with parameter birthyear
// const age3 = calcaAge3(1991);
//----------------

// function cutFruiter(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePices = cutFruiter(apples);
//   const orangePieces = cutFruiter(oranges);

//   const juice = `Juice with ${applePices} apple pieces and ${orangePieces} orange pices.`;

//   return juice;
// }

// console.log(fruitProcessor(2, 3));
//-----------------

const ageCalc = function (birthYear) {
  return 2022 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = ageCalc(birthYear);
  const retirenmentYear = 65 - age;

  if (retirenmentYear > 0) {
    console.log(`${firstName} has more ${retirenmentYear} to work.`);
    return retirenmentYear;
  } else {
    const msg = 'Work more!';
    console.log(msg);
    return msg;
  }
};

yearUntilRetirement(1978, 'Kaloyan');
//-----------
//the same, but arraw function:
const ageCalcArrow = function (birthYear) {
  return 2022 - birthYear;
};

const yearUntilRetirementArrow = (birthYear, firstName) => {
  const age = ageCalc(birthYear);
  const retirenmentYear = 65 - age;

  if (retirenmentYear > 0) {
    console.log(`${firstName} has more ${retirenmentYear} to work.`);
    return retirenmentYear;
  } else {
    const msg = 'Work more!';
    console.log(msg);
    return msg;
  }
};

yearUntilRetirement(1978, 'Kaloyan');

const name = 'Kaloyan';
const age = 42;

if (age === 422) {
}
