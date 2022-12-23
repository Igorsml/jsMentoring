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

// find favorite color
function* getFavColor() {
  const reply = yield "What is your favorite color?";
  console.log("Reply:", reply);
  if (reply !== "yellow") return "Wrong!";
  return "You may pass.";
}

{
  const iter = getFavColor();
  const question = iter.next().value; // Iterator yields question
  iter.next().value;
  iter.next().value;
  console.log("Q:", question);
  const answer = iter.next("black").value; // Pass reply back into generator
  console.log("A:", answer);
}

const iter = crossBridge();
const q = iter.next().value;
console.log(q);
const a = iter.next("yellow").value;
console.log(a);
