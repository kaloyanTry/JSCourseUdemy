'use strict';
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `Your are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Kaloyan';
calcAge(1978);
