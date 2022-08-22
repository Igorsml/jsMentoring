"use strict";

/* Task # 1 Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.
P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так. */

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }
  counter.set = (value) => (count = value);
  counter.decrease = () => (count -= 1);

  return counter;
}

let counter = makeCounter();
console.dir(counter); // [Function: counter] { set: [Function (anonymous)],  decrease: [Function (anonymous)]}

console.log(counter()); // 0
console.log(counter()); // 1
counter.set(10); // установить новое значение счётчика
console.log(counter()); // 10
counter.decrease(); // уменьшить значение счётчика на 1
console.log(counter()); // 10 (вместо 11)

/* Task # 2 Напишите функцию sum, которая бы работала следующим образом:
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции. */

function sum(a) {
  let curry = (b) => {
    a += b;
    return curry;
  };
  curry.toString = () => a;
  return curry;
}

console.log(sum(1)(2)); // 1 + 2
console.log(sum(1)(2)(3)); // 1 + 2 + 3
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));
