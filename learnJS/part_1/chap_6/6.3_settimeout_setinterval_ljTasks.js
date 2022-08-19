"use strict";

// Task # 1 Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
let count = 0;

function printNumbers(from, to) {
  let interval = setInterval(function () {
    console.log(from);
    if (from === to) {
      clearInterval(interval);
    }
    from += 1;
  }, 1e3);
}

printNumbers(1, 3);

// рекурсивный setTimeout
let count = 0;

function printNumbers(from, to) {
  setTimeout(function go() {
    console.log(from);
    if (from < to) {
      setTimeout(go, 1e3);
    }
    from += 1;
  }, 1e3);
}

printNumbers(1, 3);

/* task # 2 Что покажет setTimeout?
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?
После цикла.
Перед циклом.
В начале цикла.
Что покажет console.log? */

let i = 0;
setTimeout(() => console.log(i), 100); //
// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}

// answer - после цикла, i = 1e8;
