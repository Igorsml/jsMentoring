"use strict";
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function (size) {
  let result = [];

  for (let i = 0; i <= size; i += 1) {
    result.push(i + i);
    for (let j = 0; j <= size; j += 1) {
      result.push(j + j);
    }
  }
  return result;
};
