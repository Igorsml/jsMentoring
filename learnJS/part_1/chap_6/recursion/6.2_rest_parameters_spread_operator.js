"use strict";

// spread operator
function sumOfAges(...ages) {
  // ages = [0.5, 8, 7]
  let sum = 0;

  for (let age of ages) {
    sum += age;
  }
  return sum;
}

console.log(sumOfAges(0.5, 8, 7)); // 15.5

// rest operator
function abobusMaker(start, end, ...other) {
  console.log(other[0]); // avtobus
  return start + end;
}
abobusMaker("Ab", "bobus", "avtobus", "actors"); // Abbobus

// test, same error (...other, other2) or ()...other, ...other2)
function abobusMaker(start, end, ...other, other2) {
  return start + end;
}
abobusMaker("Ab", "bobus", "avtobus", "actors"); // SyntaxError: Rest parameter must be last formal parameter

// устаревшая переменная 'arguments'
function showArguments() {
  console.log(arguments[0]); // test
  console.log(arguments.length); // 2
}

showArguments('test', 'test2'); //

// стрелка не имеет своего this и arguments
const showArguments = () => {
  console.log(arguments[0]); // 
  console.log(arguments.length); 
}

showArguments('test', 'test2'); // ReferenceError: arguments is not defined

// fix
function fixArrowFun () {
  const showArguments = () => console.log(arguments[0]); // 
  showArguments()
}
fixArrowFun(1); // 1

// оператор расширения (Spread operator) - работает только с итерируемыми объектами
const arr = [4, 2]
const arr2 = [6, 8]
const str = 'spreadOrButter'

console.log(Math.max(4, 2)); // 4
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); 4
console.log(Math.max(1,...arr, 3, ...arr2, 42)); // 42
console.log([...str]); // [ 's', 'p', 'r', 'e', 'a', 'd', 'O', 'r', 'B', 'u', 't', 't', 'e', 'r']
// Array.from работает как с псевдомассивами, так и с итерируемыми объектами
console.log(Array.from(str));  // [ 's', 'p', 'r', 'e', 'a', 'd', 'O', 'r', 'B', 'u', 't', 't', 'e', 'r']
console.log(str.split('')); // [ 's', 'p', 'r', 'e', 'a', 'd', 'O', 'r', 'B', 'u', 't', 't', 'e', 'r']
