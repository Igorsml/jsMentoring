'use strict'

// 1) -0 в js _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
console.log(Math.ceil(-0.5)) // -0

function isNegativeZero(x) {
  return x === 0 && (1 / x) === -Infinity
}
isNegativeZero(-0) // true
isNegativeZero(0) // -0
isNegativeZero(1) // false

//source https://bolknote.ru/all/3116/

// 2) + | - Infinity _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
console.log(Infinity); // Infinity 
console.log(Infinity + 1); // Infinity 
console.log(Math.pow(10, 1000)); // Infinity 
console.log(Math.log(0)); // -Infinity 
console.log(1 / Infinity); // 0 


// 3) Откуда у примитивов есть методы? _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
'Abobus'.toUpperCase(); // ABOBUS

// Для каждого такого типа существует собственный конструктор, 
// "упаковывающий" примитивный тип в объект:
typeof 'Igor'; // string
const name = new String('Igor');
typeof name; // object
console.log(name); // Igor

// Ручная упаковка примитивных значений _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
const number = new Number(1);
typeof number; // object
number.toString(); // "1"

const bool = new Boolean(true);
typeof bool; // object
bool.toString(); // "true"


// Автоматическая упаковка _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
const one = 1;
// Во время вызова происходит упаковка
one.toString(); // "1"
// Обратите внимание что такой код завершится с ошибкой:
// 1.toString();
// js ожидает, что после точки будет продолжение числа
// А вот так заработает (1).toString();

const yes = true;
// Во время вызова происходит упаковка
yes.toString(); // "true"


// Для распаковки JavaScript автоматически вызывает метод valueOf() у объекта:
const number = new Number(100);
// Его можно вызвать самостоятельно
number.valueOf(); // 100

// А еще он вызывается в результате разных операций над объектом
const newName = `${number} is a big number`; // "100 is a big number!"

// В отличие от упаковки, распаковка выполняется абсолютно для всех объектов. 
// Это позволяет определять valueOf() самостоятельно:

const words = ['Hello'];
const helloBuilder = (string) => words.push(string);
const build = () => words.join(' ');

helloBuilder.valueOf = () => build();

helloBuilder('from');
helloBuilder('valueOf');

console.log(helloBuilder == 'Hello from valueOf'); // true


// 4) Как убрать оболочку объекта, какие с этим могут быть проблемы? _|_|