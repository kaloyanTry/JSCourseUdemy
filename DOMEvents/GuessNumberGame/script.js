'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if (!guess) {
        displayMessage(`Your ${guess} is NOT a number`);
    } else if (guess === secretNumber) {
        displayMessage(`Correct! You guess the number: ${guess}`);
        document.querySelector('.number').textContent = secretNumber;
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess !== secretNumber) {
        displayMessage(guess > secretNumber ? 'Too heigh' : 'Too low');
        score--;
        document.querySelector('.score').textContent = score;
    }
});


document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 100) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});




/////////////////////////
//DOM = Document Object Model
//DOM and DOM methods = is part of Web APIs = libraries /written in JS that browsers implement/

/* console.log(document.querySelector('.message').textContent); //=>select a DOM element
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.quess').value);
document.querySelector('.quess').value = 23; */
