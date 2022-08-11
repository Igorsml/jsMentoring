"use strict";

const pet = {
  name: "Timmy",
  age: 8,
  isBoy: true,
  parent: ["Igor", "Nika"],
};

const json = JSON.stringify(pet);

console.log(typeof json); // string

console.log(JSON.stringify(42)); // 42 - number
console.log(JSON.stringify(true)); // true - boolean
console.log(JSON.stringify([4, 2])); // [4, 2] - array
