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
  context.fun = this;
  context.fun(...args);
};

const person = {
  name: "Igor",
};

goSleep.ownCall(person, "name"); // Igor go to zZzZzz
