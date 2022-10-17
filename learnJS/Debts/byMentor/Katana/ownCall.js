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
    const sym = Symbol();
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
  fun: "test",
};

goSleep.ownCall(person, "name"); //
console.log(person.fun); // перезапись свойства fun | [Function: goSleep]

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
  fun: "test",
  sym: "test2",
};

goSleep.ownCall(person, "name"); // Igor go to zZzZzz
console.log(person.fun); // 'test'
console.log(person.sym); // 'test2'
