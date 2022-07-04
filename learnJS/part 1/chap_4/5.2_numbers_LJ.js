'use strict'

// Task 1 — Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let num = +prompt('Enter number', '') // 1
let num2 = +prompt('Enter number', '') // 1

const sum = (numOne, numTwo) => {
  return numOne + numTwo;
}

console.log(sum(num, num2)) // 2

// Task 2 — Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 
// округляется в меньшую сторону, тогда как 5..9 в большую сторону. Как правильно округлить 6.35?
console.log(6.35.toFixed(1)); // 6.3
console.log((6.35 * 10).toFixed(20)); // 63.50000000000000000000
console.log(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// Task 3 — Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение. Также надо разрешить пользователю остановить процесс ввода, 
// отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.


const readNumber = (num) => {
  do {
    num = prompt('Enter your number', 0)
  } 
  while (!isFinite(num)) 

  if (num === null || num === '') {
    return null;
  }
  return +num;
}

console.log(readNumber())

// Task 4 - Этот цикл – бесконечный. Он никогда не завершится, почему?
let i = 0;
while (i != 10) {
  i += 0.2;
} // 9.999999999999996, 10.199999999999996 | всегда будет не равно 10 из-за десятичной части неточной

let i = 0;
while (i != 10) {
  i += 0.2;
  console.log(Math.trunc(i)) 
}

// Task 5 — Напишите функцию random(min, max), 
// которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
const random = (min, max) => {
  return min + Math.random() * (max - min); // 1+ Math.random(1, 4)
}

console.log(random(1,5)); // 3.5215794395162074
console.log(random(1,5)); // 1.7283289594977012


// Task 6 — Напишите функцию randomInteger(min, max), 
// которая генерирует случайное целое (integer) число от min до max (включительно).
const random2 = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(random2(1,5)); // 1
console.log(random2(1,5)); // 3