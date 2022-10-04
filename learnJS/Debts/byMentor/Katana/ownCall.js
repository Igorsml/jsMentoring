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
  test: fun,
};

goSleep.ownCall(person, "name"); // ReferenceError: fun is not defined

// Заюзать тип Symbol в своем call/apply чтобы решить эту проблему
function goSleep() {
  console.log(`${this.name} go to zZzZzz`);
}
Function.prototype.ownCall = function (context, ...args) {
  context.fun = this;
  context.fun(...args);
};

const person = {
  name: "Igor",
  [fun]: fun,
};

goSleep.ownCall(person, "name"); // ReferenceError: fun is not defined

/* 
  fun[Symbol.iterator] = function () {
    const properties = Object.keys(this);
    let count = 0;

    return {
      next() {
        if (count < properties.length) {
          const key = properties[count];
          let result = { done: false, value: obj[key] };
          count += 1;
          return result;
        } else {
          return { done: true };
        }
      },
    };
  };
  */
