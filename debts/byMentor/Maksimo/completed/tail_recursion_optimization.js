"use strict";

function sum(num) {
  if (num < 1) return num;

  return num + sum(num - 1);
}

console.log(sum(3)); // 6
sum(100000); // RangeError: Maximum call stack size exceeded

// tail recursive
function sum(num, acc = 0) {
  if (num < 1) return acc;

  return sum(num - 1, num + acc);
}

sum(3); // 6
sum(100000); // RangeError: Maximum call stack size exceeded
