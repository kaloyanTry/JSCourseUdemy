'use strict';

const dogsJulia = [3, 4, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// //// Code Challenge 1:
// // 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cats
// function checkDogs(dogsJulia, dogsKate) {
//   const acctualDogs = dogsJulia.slice(1);
//   acctualDogs.splice(-2);
//   console.log(acctualDogs);

//   // 2. Create an array with both Julia's (corrected) and Kate's data
//   const bothDogs = [...acctualDogs, ...dogsKate];
//   console.log(bothDogs);

//   // 3. 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
//   const printAges = bothDogs.map((dog, i) =>
//     dog >= 3
//       ? `Dog number ${i + 1} is an adult`
//       : `Dog number ${i + 1} is a puppy`
//   );
//   console.log(printAges);
// }
// checkDogs(dogsJulia, dogsKate);

//// Code Challenge 2 & 3:
// const ages = [5, 2, 4, 1, 15, 8, 3];
// const ages = [16, 6, 10, 5, 6, 1, 4];

// function calcAverageHumanAge(ages) {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : age * 4 + 16));
//   console.log(humanAges);
//   const adult = humanAges.filter(age => age >= 18);
//   console.log(adult);

//   const avrgAge = adult.reduce((a, b) => a + b, 0) / adult.length;
//   console.log('average age is:', avrgAge);
// }

// calcAverageHumanAge(ages);

//// 4.
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog eating ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'too much' : 'too little'
  }`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log('dogs eat to much', ownersEatTooMuch);

const ownersEatToLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log('dogs eat too little', ownersEatToLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much.`);
console.log(`${ownersEatToLittle.join(' and ')}'s dogs eat too little.`);

const exactFood = dogs.some(dog => (dog.curFood = dog.recommendedFood));
console.log(exactFood);

const checkOkFood = dog =>
  dog.curFood <= dog.recommendedFood * 1.1 &&
  dog.curFood >= dog.recommendedFood * 0.9;
console.log(dogs.filter(checkOkFood));
