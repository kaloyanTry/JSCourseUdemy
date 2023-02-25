'use strict';
// //// Functions:
// // Coding Challenge 1:
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: [
//     '0: JavaScript',
//     '1: Python',
//     '2: Rust',
//     '3: C++',
//     '4: C#',
//     '5: Java',
//     '6: Go',
//   ],
//   answers: new Array(7).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join(
//           '\n'
//         )}\n(Write your option number)`
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Polls results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // for array output:
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');

// Closure example:
let f1;
const f2 = function () {
  const a = 23;
  f1 = function () {
    console.log(a * 3);
  };
};

f2();
f1();

///////////////// IFIE()
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  const body = document.querySelector('body');
  body.addEventListener('click', () => (header.style.color = 'blue'));
});
