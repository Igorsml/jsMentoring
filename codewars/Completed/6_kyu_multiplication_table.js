"use strict";
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

const multiplicationTable = function (size) {
  let result = [];
  let finalArr = [];

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      result.push(i * j);
    }
    finalArr.push(result);
    result = [];
  }
  return finalArr;
};

console.log(
  multiplicationTable(3, [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
  ])
); // [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]

// CW solution
function multiplicationTable(size) {
  return Array.apply(null, new Array(size)).map(function (val, i) {
    return Array.apply(null, new Array(size)).map(function (val, j) {
      return (i + 1) * (j + 1);
    });
  });
}

console.log(
  multiplicationTable(3, [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
  ])
);
