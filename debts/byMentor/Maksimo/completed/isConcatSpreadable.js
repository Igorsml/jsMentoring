"use strict";

const arr = [1, 2];
const arrayLike = {
  0: "что-то",
  1: "ещё",
  driver: {
    2: "Igor",
    [Symbol.isConcatSpreadable]: true,
    length: 1,
  },
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(arr.concat(arrayLike)); // [ 1, 2, 'что-то', 'ещё' ]

// expected [ 1, 2, 'что-то', 'ещё', 'Igor']
const arr2 = [1, 2];

const arrayLike2 = {
  0: "что-то",
  1: "ещё",
  3: {
    4: "Igor",
  },
  [Symbol.isConcatSpreadable]: true,
  length: 4,
};

console.log(arr2.concat(arrayLike2)); // [ 1, 2, 'что-то', 'ещё', <1 empty item>, { '4': 'Igor' } ]
console.log(arr2.concat(arrayLike2[3])); // [ 1, 2, { '4': 'Igor' }  ]
console.log(...arr2, ...arrayLike2); // TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
