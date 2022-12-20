"use strict";

// Функции возвращают 1 значение, генераторы могут несколько
function* generatorNum() {
  yield 1;
  yield 2;
  return 3;
}
console.log(generatorNum()); // Object [Generator] {}

const generator = generatorNum();

// генератор перебираемый объект
for (const value of generator) {
  console.log(value); // 1, 2
}

console.log(JSON.stringify(generator.next())); // {"value":1,"done":false}
console.log(JSON.stringify(generator.next())); // {"value":2,"done":false}
console.log(JSON.stringify(generator.next())); // {"value":3,"done":true}
console.log(JSON.stringify(generator.next())); // {"done":true}
