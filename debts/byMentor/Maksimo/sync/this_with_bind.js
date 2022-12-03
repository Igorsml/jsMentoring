"use strict";
// переписать с bind задачу по this чтобы было равно не объекту а например числу 5

// current
const lengthForBound = 5;

function getThis(...args) {
  return console.log(this, ...args);
}

getThis(lengthForBound); // undefined

// биндим примитив
const getThisBounded = getThis.bind("this value:", lengthForBound);
getThisBounded(); // this value: 5

// prevboundLength
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
console.log(object.length); // 5
