'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rowsText = text.split('\n');

  for (const [i, row] of rowsText.entries()) {
    const [firstWord, secondWord] = row.toLowerCase().trim().split('_');
    const secondUp = secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    );

    const outputText = `${firstWord}${secondUp}`;

    console.log(`${outputText.padEnd(30)}${'✅'.repeat(i + 1)}`);
  }
});
