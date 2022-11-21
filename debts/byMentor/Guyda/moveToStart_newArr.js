"use strict";

// after. Функция должна возвращать новый массив, а не мутировать старый.
const moveToStart = (arr, number) => {
  let baseArr = [];
  if (arr.length < number) {
    baseArr = Array.from(arr);
    return baseArr;
  }

  let slicedArrEnd = arr.slice(0, number - 1);
  let slicedArrStart = arr.slice(number - 1, arr.length);
  let result = [...slicedArrStart, ...slicedArrEnd];
  console.log("compare arrays:", baseArr === result); // 'compare arrays: false'
  return result;
};

console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [ 3, 4, 5, 1, 2 ]
console.log(moveToStart([1, 2, 3, 4, 5], 10)); //  [1, 2, 3, 4, 5 ]

// before
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
