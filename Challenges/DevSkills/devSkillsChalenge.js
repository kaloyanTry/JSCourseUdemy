const testArr1 = [17, 21, 23];
const testArr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += ` ... ${arr[i]} in ${i + 1} days`;
  }
  console.log(str);
};

printForecast(testArr1);
