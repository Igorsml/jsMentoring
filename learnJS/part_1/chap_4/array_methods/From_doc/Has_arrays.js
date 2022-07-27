"use strict";

// #1 isArray
const hasArray = (arr) => arr.some(Array.isArray);

const data = [false, true, [1, 2], {}];
console.log(hasArray(data)); // true

const dataWithoutArrays = [false, true, 42, "hobby", {}];
console.log(hasArray(dataWithoutArrays)); // false
