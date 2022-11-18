// https://www.codewars.com/kata/536950ffc8a5ca9982001371/train/javascript

"use strict";

function solution(a) {
  let result = 0;
  debugger;
  for (let i = 1; i <= a.length; i++) {
    let sum = a.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    if (sum <= a.length) {
      result += 1;
    } else if (sum > a.length) {
      result = -1;
    }
  }
  return result;
}

console.log(solution([1, 2, 2, -1])); // 4
console.log(solution([1, 2, 1, 5])); //  3
console.log(solution([1, 1, 1, 1])); //  4
console.log(solution([1, -1])); // -1
console.log(solution([-3])); // 1
