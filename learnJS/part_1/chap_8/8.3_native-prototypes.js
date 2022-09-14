"use strict";

const obj = {};
console.log(obj.toString()); // '[object Object]'
console.log(Object.prototype.toString()); // '[object Object]'
console.log(obj.toString() === Object.prototype.toString()); //true
console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.__proto__.__proto__); // obj → Object.prototype → null

const arr = [42, "Abobusray"];
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.entries(arr)); // [ [ '0', 42 ], [ '1', 'Abobusray' ] ]

const num = 5;
const isSame = Object.is(num, 5);
console.log(isSame); // true | Number.prototype → Object.prototype

// Пример замены, но делать не стоит, могут быть конфликты из-за глобальности, исключение это создание полифилов
Array.prototype.map = function map() {
  return "Ehu!";
};

numbers1.map(); // "Ehu!"

// str concat vs arr concat
const str = "Abobus";
const arr = [", how are you?"];

console.log(str.concat(", ", "Hello!")); // 'Abobus, Hello!'
console.log(str.concat(arr)); // 'Abobus, how are you?'
