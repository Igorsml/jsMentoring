'use strict'

let number = 42000000;
let numberE = 42e6;
console.log(number); // 42000000
console.log(numberE); // 42000000

// 1 микросекунда
let ms = 1e-6;
console.log('ms:', ms) // 0.000001

console.log(0xff) // 255
console.log(0xFF) // 255, register doesn't matter
console.log(0b11111111) // 255, бинарная форма записи числа
console.log(0o377) // 255, восьмеричная форма записи числа

// num.toString(base), от 2 до 36 (default 10)
let num = 42;

console.log(num.toString(16)) // 2a
console.log(num.toString(2)) // 101010
console.log(num.toString(36)) // 16
// console.log(42.toString(36)) //  Invalid or unexpected token
console.log((42).toString(2)) //  101010

// Округление
let num = 42.234;
console.log(Math.floor(num)); // 42, в меньшую сторону
console.log(Math.ceil(num)); // 43, в большую сторону
console.log(Math.round(num)); // 42, ближайшее целое

let num2 = 42.6;
console.log(Math.floor(num2)); // 42, в меньшую сторону
console.log(Math.ceil(num2)); // 43, в большую сторону
console.log(Math.round(num2)); // 43, ближайшее целое

let numMinus = -42.234;
console.log(Math.floor(numMinus)); // -43, в меньшую сторону
console.log(Math.ceil(numMinus)); // -42, в большую сторону
console.log(Math.round(numMinus)); // -42, ближайшее целое

console.log(Math.trunc(num)); // 43, Производит удаление дробной части без округления
console.log(Math.trunc(numMinus)); // -42, Производит удаление дробной части без округления
