const bill = 275; //275, 40, 430

const tip = bill >= 30 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(tip);

console.log(`Thi bill is: ${bill} and the tip is: ${tip}`);
