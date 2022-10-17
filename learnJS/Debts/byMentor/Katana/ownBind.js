"use strict";

// standard
const person = {
  name: "Igor",
  goSleep() {
    console.log(`${this.name} go to zZzZzz`);
  },
};

setTimeout(person.goSleep, 1000); // 'undefined go to zZzZzz'
setTimeout(() => person.goSleep(), 1000); // 'Igor go to zZzZzz'
const bindedPerson = person.goSleep.bind(person); // Igor go to zZzZzz
bindedPerson(); // 'Igor go to zZzZzz'

// own bind
const obj = { number: 5 };
const fn = function (number) {
  console.log(number + this.number);
};

Function.prototype.ownBind = function (obj, ...args) {
  const fun = this;

  return function (...newArgs) {
    fun.apply(obj, [...args, ...newArgs]);
  };
};

const fnWithContext = fn.ownBind(obj);
fnWithContext(3); // 8

// 3. Убедиться что проблема решена. В ownBind заюзать ownApply, а не apply
const obj = {
  number: 5,
};

const fn = function (number) {
  console.log(number + this.number);
};
Function.prototype.ownApply = function (context, args) {
  const sym = Symbol("ownApply symbol");
  context[sym] = this;
  context[sym](...args);
};

Function.prototype.ownBind = function (obj, ...args) {
  const fun = this;

  return function (...newArgs) {
    fun.ownApply(obj, [...args, ...newArgs]);
  };
};

const fnWithContext = fn.ownBind(obj);
fnWithContext(3); // 8
