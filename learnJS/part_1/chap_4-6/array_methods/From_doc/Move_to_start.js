"use strict";

const moveToStart = (arr, number) => {
  if (arr.length < number) {
    return arr;
  }

  let slicedArrEnd = arr.slice(0, number - 1);
  let slicedArrStart = arr.slice(number - 1, arr.length);
  return [...slicedArrStart, ...slicedArrEnd];
};

console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [ 3, 4, 5, 1, 2 ]
console.log(moveToStart([1, 2, 3, 4, 5], 10)); //  1, 2, 3, 4, 5 ]
