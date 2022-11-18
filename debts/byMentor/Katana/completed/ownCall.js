"use strict";

// standard
function goSleep() {
  console.log(`${this.name} go to zZzZzz`);
}

const person = {
  name: "Igor",
};

goSleep.call(person, "name"); // Igor go to zZzZzz

// own call
function goSleep() {
  console.log(`${this.name} go to zZzZzz`);
}

Function.prototype.ownCall = function (context, ...args) {
  if (context.hasOwnProperty("fun")) {
    context[fun] = this;
  }
  context.fun = this;
  context.fun(...args);
};

const person = {
  name: "Igor",
};

goSleep.ownCall(person, "name"); // Igor go to zZzZzz

// 1. Понять что будет с объектом у которого есть свойство fun в твоем call/apply
function goSleep() {
  console.log(`${this.name} go to zZzZzz`);
}
Function.prototype.ownCall = function (context, ...args) {
  context.fun = this;
  context.fun(...args);
};

const person = {
  name: "Igor",
<<<<<<< HEAD
  fun: "test",
};

goSleep.ownCall(person, "name"); //
console.log(person.fun); // перезапись свойства fun | [Function: goSleep]
=======
  fun: "test fun",
};

goSleep.ownCall(person, "name"); // 'Igor go to zZzZzz'
console.log(person.fun); // свойство перезапишется | [Function: goSleep]
>>>>>>> 1bcc78d2488a66810b92b7f26f21aea785b1adff

// 2. Заюзать тип Symbol в своем call/apply чтобы решить эту проблему
function goSleep() {
  console.log(`${this.name} go to zZzZzz`);
}
Function.prototype.ownCall = function (context, ...args) {
  const sym = Symbol("ownCall symbol");
  context[sym] = this;
  context[sym](...args);
};

const person = {
  name: "Igor",
<<<<<<< HEAD
  fun: "test",
  sym: "test2",
};

goSleep.ownCall(person, "name"); // Igor go to zZzZzz
console.log(person.fun); // 'test'
console.log(person.sym); // 'test2'
=======
  fun: "test fun",
  sym: "test sym",
};

goSleep.ownCall(person, "name"); // 'Igor go to zZzZzz'
console.log(person.fun); // 'test fun'
console.log(person.sym); // 'test sym'
>>>>>>> 1bcc78d2488a66810b92b7f26f21aea785b1adff
