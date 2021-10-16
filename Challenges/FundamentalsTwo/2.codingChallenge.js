const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

//const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

let tips = [];
bills.forEach((bill) => {
  arrTips.push(calcTip(bill));
});

console.log(bills, tips);
