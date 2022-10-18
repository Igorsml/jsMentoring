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

// Понять что будет с объектом у которого есть свойство fun в твоем call/apply
function goSleep() {
  console.log(`${this.name} go to zZzZzz`);
}
Function.prototype.ownCall = function (context, ...args) {
  context.fun = this;
  context.fun(...args);
};

const person = {
  name: "Igor",
  fun: "test fun",
};

goSleep.ownCall(person, "name"); // 'Igor go to zZzZzz'
console.log(person.fun); // свойство перезапишется | [Function: goSleep]

// Заюзать тип Symbol в своем call/apply чтобы решить эту проблему
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
  fun: "test fun",
  sym: "test sym",
};

goSleep.ownCall(person, "name"); // 'Igor go to zZzZzz'
console.log(person.fun); // 'test fun'
console.log(person.sym); // 'test sym'
