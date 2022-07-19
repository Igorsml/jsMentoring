// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
"use strict";

function sumTwoSmallestNumbers(numbers) {
  let sortedArray = numbers.sort((a, b) => a - b);
  let num = sortedArray.slice(0, 2);

  return num.reduce((a, b) => a + b, 0);
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // 13,
sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // 6
