// const kalo = {
//   firstName: "Kaloyan",
//   lastName: "Gan",
//   age: 2021 - 1978,
//   job: "teacher",
//   friends: ["Michael", "Ivan", "Pino"],
// };
// console.log(kalo);

// console.log(kalo.firstName);
// //or another way of writting it: if we have common props
// const nameKey = "Name";
// console.log(kalo["first" + nameKey]);
// console.log(kalo["last" + nameKey]);

// const interstedIn = prompt(
//   "What about Kalo? Choose: firstName, lastName, age, job, friends"
// );

// if (kalo[interstedIn]) {
//   console.log(kalo[interstedIn]);
// } else {
//   console.log("Wrong. Choose again:");
// }

// //adding properties:
// kalo.location = "Tryavna"; //much better way
// kalo["gitHub"] = "kaloTry";
// console.log(kalo);

// console.log(
//   `${kalo.firstName} has ${kalo.friends.length + 1} and his best friend is ${
//     kalo.friends[1]
//   }`
// );
//------------
// const minio = {
//   name: "Minio",
//   birthYear: 1991,
//   hadDriving: true,

//   calcAge: function () {
//     return 2022 - this.birthYear;
//   },
// };

// minio.calcAge();
//---------------

// for (let ex = 0; ex < 5; ex++) {
//   console.log(`starting exercise: ${ex}`);

//   for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Exercise ${ex} with ${rep} repetitions`);
//   }
// }
//--------------
//random dice game:
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`6!!! You rolled a ${dice}`);
