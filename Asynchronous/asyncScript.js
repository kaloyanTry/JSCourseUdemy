'use strict';

// //// Event Loop: Microtasks Queue vs. Callback Queue
// console.log('Test start'); //0
// setTimeout(() => console.log('0 sec timer'), 0); //4
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //2
// Promise.resolve('Resolved Promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {
//     console.log(res); //3
//   }
// });
// console.log('test ends.'); //1

//// Promise => creating Basic pattern:
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening: ');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win 💰');
    } else {
      reject(new Error('You lost your money 🔥'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
