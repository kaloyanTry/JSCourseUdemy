const calcAgerage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAgerage(44, 23, 71);
let scoreKoalas = calcAgerage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins!`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAgerage(85, 54, 41);
scoreKoalas = calcAgerage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
