"use strict";
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

const upArray = (arr) => {
  if (arr.length - 1 === 9) arr[arr.length - 1] = 0;

  arr.map((item, i) => {
    if (arr.length - 1 === i) arr[arr.length - 1] += 1;
  });
  return arr;
};

console.log(upArray([4, 3, 2, 5])); // [4, 3, 2, 6]
console.log(upArray([0, 1, 3, 7])); // [0, 1, 3, 8]
console.log(upArray([4, 3, 2, 9])); // [4, 3, 2, 0]
console.log(upArray([9, 9, 9, 9])); // [1, 0, 0, 0, 0]

// if (item === 9) {
//   result.push(0);
// }
// result.unshift(1);
