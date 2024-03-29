"use strict";
// вызвать concat массива на строке с call / apply

const str = "concat me";
const str2 = " please";

console.log(str.concat(str2)); // 'concat me please'
console.log([].concat(str, str2)); // [ 'concat me', ' please' ]
console.log(Array.prototype.concat.call([], str, str2)); // [ 'concat me', ' please' ]
console.log(...str, ...str2); // 'c o n c a t   m e   p l e a s e'

// str concat vs arr concat
const str = "Abobus";
const arr = [", how are you?"];

console.log(str.concat(", ", "Hello!")); // 'Abobus, Hello!'
console.log(str.concat(arr)); // 'Abobus, how are you?'
