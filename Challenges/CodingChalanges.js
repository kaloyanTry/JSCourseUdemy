// Coding Chalange 4
const bill = 275;

const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(bill);
console.log(tip);
console.log(bill + tip);

//////////////////////////////////////////////////
// Coding Chalange 3
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
// Code Chalanges 1 and 2
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
