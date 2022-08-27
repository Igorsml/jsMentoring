"use strict";

// loose this in setTimeout
const pet = {
  name: "Timmy",
  sayBark() {
    console.log(`${this.name} say bark-bark!`);
  },
};

setTimeout(pet.sayBark, 1000); // undefined say bark-bark!
// fix with wrap, closure
setTimeout(() => pet.sayBark(), 1000); // Timmy say bark-bark!

// bind метода объекта
const analisisCost = {
  B12: 1000,
  pay() {
    console.log(`Hi, your order sum is ${this.B12}`);
  },
};

const pay = analisisCost.pay.bind(analisisCost);
pay(); // Hi, your order sum is 1000
setTimeout(pay, 1e3); // Hi, your order sum is 1000

// массовая привязка контекста
const pets = {
  firstPet: "Timmy",
  secondPet: "Miley",
  canSwim: true,
  sayBark() {
    console.log(`${this.firstPet} say bark-bark!`);
  },
  checkSwim() {
    console.log(`Yes, it's ${this.canSwim}`);
  },
};

for (let key in pets) {
  if (typeof pets[key] === "function") {
    pets[key] = pets[key].bind(pets);
  }
}

const sound = pets.sayBark();
sound();
const swim = pets.checkSwim();
swim();

// передаем аргументы в bind
function multiply(a, b) {
  return a * b;
}

// для bind контекст обязательный, поэтому лепим заглушку в виде null
const double = multiply.bind(null, 2);
console.log(double(3)); // 6
console.log(double(42)); // 84

// JavaScript — асинхронный язык программирования. Из-за этого функции часто вызываются как колбеки других функций. Особенно много этого в браузере, где колбек на колбеке и колбеком погоняет.
const seyHelloToConsole = {
  name: "console",
  print(greeting = "aloha") {
    console.log(`${greeting}, ${this.name}`);
  },
};

seyHelloToConsole.print(); // aloha, console
setTimeout(seyHelloToConsole.print, 1e3); // aloha, undefined

// fix with bind
const bindedHello = seyHelloToConsole.print.bind(seyHelloToConsole);
bindedHello(); // aloha, console
setTimeout(bindedHello, 1e3); // aloha, console

//
function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Igor",
  age: 30,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function () {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`IQ is ${this.iq}`);
    console.groupEnd();
  },
};

const person2 = {
  name: "Nika",
  age: 27,
  iq: 100500,
};

const fnPerson2InfoLog = person.logInfo.bind(person2);
fnPerson2InfoLog(); //  Name is Nika, Age is 27, IQ is 100500
