// Fundamentals Part Two

// Coding Challenge 1

const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

const dolphinsScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(65, 54, 49);

// console.log(dolphinsScore);
// console.log(koalasScore);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas}`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(dolphinsScore, koalasScore);

// Fundamentals Part One
// Coding Chalange 4
// const bill = 275;

// const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

// console.log(bill);
// console.log(tip);
// console.log(bill + tip);

//////////////////////////////////////////////////
// Coding Chalenge 3
// const dolphinsScores = [196, 108, 89];
// const koalasScores = [188, 91, 110];

// const dolphinsAvrg =
//   dolphinsScores.reduce((a, b) => a + b, 0) / dolphinsScores.length;

// const koalasAvrg =
//   koalasScores.reduce((a, b) => a + b, 0) / koalasScores.length;

// const isHigher = koalasAvrg > 100 && dolphinsAvrg > 100;

// if (isHigher) {
//   if (dolphinsAvrg > koalasAvrg) {
//     console.log(`Dolphis wins ${dolphinsAvrg} to ${koalasAvrg}`);
//   } else if (dolphinsAvrg < koalasAvrg) {
//     console.log(`Koalas wins ${koalasAvrg} to ${dolphinsAvrg}`);
//   } else {
//     console.log(`Equal: ${dolphinsAvrg} = ${koalasAvrg}}. No winner.`);
//   }
// }

// console.log();
///////////////////////////////////////////////////
// Code Chalenges 1 and 2
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

// if (markHigherBMI) {
//   console.log(`Mark has higher ${markBMI} BMI than John's ${johnBMI}`);
// } else {
//   console.log(`John has higher ${johnBMI} BMI than Mark's ${markBMI}`);
// }
