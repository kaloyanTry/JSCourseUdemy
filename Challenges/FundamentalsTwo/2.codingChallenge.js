const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

let tips = [];
bills.forEach((bill) => {
  arrTips.push(calcTip(bill));
});

console.log(bills, tips);
