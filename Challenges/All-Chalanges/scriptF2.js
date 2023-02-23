// // Fundamentals 2 - Challenge 2
// function calcTip(bill) {
//   const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// }
// const bills = [125, 555, 44];

// const tips = bills.map(bill => calcTip(bill));

// const totals = bills.map(bill => bill + calcTip(bill));

// console.log(tips);
// console.log(totals);

// Challange 3
const mark = {
  name: 'Mark',
  mass: 78,
  height: 1.69,

  bmiCalc: function () {
    const bmi = this.mass / this.height ** 2;
    return bmi.toFixed(1);
  },
};

const john = {
  name: 'John',
  mass: 92,
  height: 1.95,

  bmiCalc: function () {
    const bmi = this.mass / this.height ** 2;
    return bmi.toFixed(1);
  },
};
console.log('mark', mark.bmiCalc());
console.log('john', john.bmiCalc());
const msg =
  mark.bmiCalc() > john.bmiCalc()
    ? `${mark.name}'s BMI (${mark.bmiCalc()}) is higher than ${
        john.name
      }'s (${john.bmiCalc()})!`
    : `${john.name}'s BMI (${john.bmiCalc()}) is higher than ${
        mark.name
      }'s (${mark.bmiCalc()})!`;
console.log(msg);
