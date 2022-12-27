"use strict";
// переписать с bind задачу по this чтобы было равно не объекту а например числу 5

// наш примитив
const lengthForBound = 5;

function getThis(arg) {
  return console.log(this);
}

getThis(lengthForBound); // undefined

// биндим примитив
const getThisBounded = getThis.bind(lengthForBound);
getThisBounded(lengthForBound); // 5

// изначальная задача --------------------
let length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() {
    arguments[0](); // тоже самое что и console.log(arguments.length); // 3
  },
};
object.method(callback, 1, 2); // 3 | arguments[0]() является вызовом метода callback на объекте arguments, this внутри callback равно arguments. В результате this.length внутри callback() совпадает с arguments.length - а это 3.
