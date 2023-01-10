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

// передача значений в генератор

function* getNumber() {
  console.log("start");

  const first = yield 1;
  console.log(first);

  const second = yield 2;
  console.log(second);

  const third = yield 3;
  console.log(third);
}

const iterator = getNumber();

console.log(iterator.next()); // start, { value: 1, done: false }
console.log(iterator.next("b")); // b, { value: 2, done: false }
console.log(iterator.next("c")); // c, { value: 3, done: false }
console.log(iterator.next("d")); // d, { value: undefined, done: true }

// композиция генераторов
function* generator1() {
  yield 1;
  yield* generator2();
}

function* generator2() {
  yield 2;
  yield 3;
}

const gen = generator1();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// for...of
function* getNumber() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = getNumber();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

for (let value of gen) {
  if (value === 2) break;
  console.log(value); // 1, 2, 3
}

// for vs for...of
function* generator() {
  for (let i = 1; true; i++) {
    if (i === 2) break;
    yield i;
  }
}

const gen = generator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // undefined
console.log(gen.next().value); // undefined

// метод return
function* generate() {
  yield "Hello";
  yield "World";
}
let text = generate();
console.log(text.return().value); // { value: undefined, done: true }
console.log(text.next().value); // { value: undefined, done: true }

// Если требуется завершить выполнение генератора, но при этом вернуть определенное значение можно,
// передать это значение в параметр метода return.
function* generate() {
  yield "Hello";
  yield "World";
}
let text = generate();
console.log(text.return("Hello")); // { value: «Hello», done: true }

// Метод throw, в параметр которого можно передать само исключение и уже затем обработать его в самом генераторе
function* generate() {
  while (true) {
    try {
      yield "Hello";
    } catch (e) {
      console.log("Error!");
    }
  }
}

let gen = generate();

console.log(gen.next()); // { value: 'Hello', done: false }
console.log(gen.throw(new Error("Error"))); // "Error caught!"
