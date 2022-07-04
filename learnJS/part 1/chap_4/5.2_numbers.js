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
42..toString(36) // '16' string

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

let num = 42.234;
console.log(Math.trunc(num)); // 43, Производит удаление дробной части без округления
console.log(Math.trunc(numMinus)); // -42, Производит удаление дробной части без округления

let num = 42.234;
console.log(num.toFixed(1)); // 42.2
console.log(typeof(num.toFixed(1))); // string
console.log(typeof(+num.toFixed(1))); // number
console.log(num.toFixed(10)); // 42.2340000000 , если n больше количества дробной части он накидывает нулей

//Infinity
console.log(1e500); // Infinity
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(+(0.1 + 0.2).toFixed(1)); // 0.3
console.log(0.1 + 0.2 == 0.3); // false
console.log(9999999999999999); // 10000000000000000

function isNegativeZero(x) {
  return x === 0 && (1 / x) === -Infinity
}
isNegativeZero(-0) // true
isNegativeZero(0) // -0
isNegativeZero(1) // false

console.log(Infinity); // Infinity 
console.log(Infinity + 1); // Infinity 
console.log(Math.pow(10, 1000)); // Infinity 
console.log(Math.log(0)); // -Infinity 
console.log(1 / Infinity); // 0 

console.log(isNaN(NaN)); // true
console.log(NaN === NaN); // false, NaN уникально тем, что оно не является равным ни чему другому, даже самому себе
console.log(isNaN('str')); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(42)); // true
console.log(isFinite('42')); // flase, потому что NaN

// parseInt и parseFloat
console.log(+'100px'); // NaN
console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5
console.log(parseFloat('12.5.4')); // 12.5, произойдёт остановка чтения на второй точке