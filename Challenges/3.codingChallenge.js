const dolhinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;

if (dolhinsScore >= 100 && koalasScore >= 100) {
  if (dolhinsScore > koalasScore) {
    console.log(`Dolphins win (${dolhinsScore} to ${koalasScore})`);
  } else if (dolhinsScore < koalasScore && koalasScore) {
    console.log(`Koalas win (${koalasScore} to ${dolhinsScore})`);
  }
} else {
  console.log("No winner!");
}
