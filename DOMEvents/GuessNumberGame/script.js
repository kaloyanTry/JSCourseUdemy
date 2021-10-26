'use strict';

//DOM = Document Object Model
//DOM and DOM methods = is part of Web APIs = libraries /written in JS that browsers implement/

/* console.log(document.querySelector('.message').textContent); //=>select a DOM element
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.quess').value);
document.querySelector('.quess').value = 23; */

document.querySelector('.check').addEventListener('click', function () {
  const quess = Number(document.querySelector('.guess').value);

  console.log(quess);

  if (!quess) {
    document.querySelector('.message').textContent = 'No number!';
  } else {
  }
});
