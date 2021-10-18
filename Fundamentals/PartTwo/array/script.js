"use strict";

const friends = ["Michael", "Steven", "Peter", 1898, 2021 - 1978];

friends.forEach((element) => {
  console.log(element);
});

const years = [1978, 1983, 1999, 2007];

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

years.forEach((year) => {
  console.log(calcAge(year));
});
