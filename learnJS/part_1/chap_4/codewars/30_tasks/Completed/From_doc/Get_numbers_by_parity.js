"use strict";

// #1 - for
const getNumbersByParity = (arrOfNumbers, str) => {
  let result = [];

  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (str === "even" && arrOfNumbers[i] % 2 === 0) {
      result.push(arrOfNumbers[i]);
    } else if (str === "odd" && arrOfNumbers[i] % 2 === 1) {
      result.push(arrOfNumbers[i]);
    }
  }

  return result;
};

const data = [1, 2, 3, 4, 5, 6];
console.log(getNumbersByParity(data, "even")); // [2, 4, 6];
console.log(getNumbersByParity(data, "odd")); // [1, 3, 5];

// #2 - filter
const dataOfNUmbers = [1, 2, 3, 4, 5, 6];
function isEven(num) {
  return num % 2 === 0;
}
function isOdd(num) {
  return num % 2 === 1;
}

console.log(dataOfNUmbers.filter(isEven)); // [2, 4, 6];
console.log(dataOfNUmbers.filter(isOdd)); // [1, 3, 5];

// #3 - filter
function getNumbersByParity(arr, str) {
  return str === "even"
    ? arr.filter((el) => el % 2 === 0)
    : arr.filter((el) => el % 2 === 1);
}

const data = [1, 2, 3, 4, 5, 6];
console.log(getNumbersByParity(data, "even")); // [2, 4, 6];
console.log(getNumbersByParity(data, "odd")); // [1, 3, 5];
