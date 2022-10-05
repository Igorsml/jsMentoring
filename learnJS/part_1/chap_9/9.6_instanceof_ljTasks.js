"use strict";

// Почему instanceof в примере ниже возвращает true?
// Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();
console.log(a instanceof B); // true
console.log(a.__proto__); // {}
console.log(B.prototype); // {}

console.log(a instanceof A); // true
console.log(a instanceof Object); // true
console.log(A instanceof B); // true
/* Конструкция object instanceof constructor проверяет, присутствует ли объект constructor.prototype в цепочке прототипов object. 
В примеры мы создаём две функции и присваиваем ссылки на один объект обоим прототипам этих функций. 
Теперь прототип A равен прототипу B это значит значит что в первых двух выводах в консоль оператор instanceof 
находит один и тот же объект в цепочке прототипов foo и возвращает true. 
Третий раз в консоль выводится true потому что прототипом прототипа функций A и B является Object
и instanceof его находит в цепочке. Последним в консоль выводится false потому что хоть у этих функций 
и общий прототип они всё-таки не являются инстенсами друг друга.
*/
