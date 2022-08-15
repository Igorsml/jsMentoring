"use strict";

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(3));
/* 
3 * factorial(2);
3 * 2 * factorial(1);
3 * 2 * 1 * factorial(0);
3 * 2 * 1 * 1;
3 * 2 * 1
3 * 2;
6; 
*/
