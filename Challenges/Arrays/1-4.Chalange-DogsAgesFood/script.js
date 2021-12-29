'use strict';

// Challenge 1:
// const dataJulia = [3, 5, 2, 12, 7];
// const dataKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const actualDogsJulia = dogsJulia.slice();
//   actualDogsJulia.splice(0, 1);
//   actualDogsJulia.splice(-1);
//   console.log(actualDogsJulia);

//   const dogsAll = actualDogsJulia.concat(dogsKate);
//   console.log(dogsAll);

//   dogsAll.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog numger ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog numger ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs(dataJulia, dataKate);

// Challenge 2:
// const data1 = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : age * 4 + 16));
//   const dogsAdult = humanAges.filter(age => age >= 18);

//   const avrgAges = dogsAdult.reduce(
//     (acc, age, _i, arr) => acc + age / arr.length,
//     0
//   );

//   console.log(`Human ages are: ${humanAges}`);
//   console.log(`Adult dogs are: ${dogsAdult} years old.`);
//   console.log(`Dogs average age is: ${avrgAges}`);

//   return avrgAges;
// };
// console.log(calcAverageHumanAge(data1));

// Challenge 3:
// const calcAverageHumanAgeArrow = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
//     .filter(age => age >= 18)
//     .reduce((acc, age, _i, arr) => acc + age / arr.length, 0);

// console.log(calcAverageHumanAgeArrow(data1));

// Challenge 4:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// adding new property recomFood to each dog:
dogs.forEach(dog => (dog.recomFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// finding dogs with owner Sarah and check if eats too much ot little:
const dogsSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogsSarah);
console.log(
  `Sarah's dog eats too ${
    dogsSarah.curFood > dogsSarah.recomFood ? 'much' : 'little'
  }.`
);

// creating array with owners eating too much and little
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recomFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recomFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recomFood));

// function check if dogs eat ok amount of food and filter dogs
const checkOkFood = dog =>
  dog.curFood <= dog.recomFood * 1.1 && dog.curFood >= dog.recomFood * 0.9;
console.log(dogs.filter(checkOkFood));

// creating new array with dogs and sorting by recomFood
const dogsOrdered = dogs.slice().sort((a, b) => a.recomFood - b.recomFood);
console.log(dogsOrdered);
