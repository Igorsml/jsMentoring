"use strict";

// global variable
let petName = "Miley";

function printName() {
  console.log(petName);
}

printName(); // Miley

petName = "Timmy";
printName(); // Timmy , новый вызов, новое лексическое окружение

function outerFunction(outerVariable) {
  const outer = "stage1";
  return function innerFunction(innerVariable) {
    console.log("Outer Variable:" + outerVariable);
    console.log("Inner Variable:" + innerVariable);
    console.log(outer);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// изменение лексического окружения переменной
let greeting; // undefined
greeting = "Hello"; // 'Hello'
greeting = "Hi"; // 'Hi'

// если переменная не найдется
function greeting(name) {
  return `${hello} ${name}`;
}
greeting("Igor"); // ReferenceError: hello is not defined

// вложенные функции

// функция-конструктор, вложенная функция как метод
function Person(name) {
  this.sayHello = function () {
    console.log(name);
  };
}

let person = new Person("Igor");
person.sayHello(); // Igor

// каждый новый вызов - новое окружение

function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 0 сброс, независимо

// изолировать переменные от конфликта по названию
{
  let isolated = "isolenta";
  console.log(isolated); // isolenta
}
console.log(isolated); // ReferenceError: isolated is not defined

// old, IIFE, запуск функции сразу после объявления
(function () {
  let message = "Hello";

  console.log(message); // Hello
})(); // Hello

// V8 проблема при отладке
function f() {
  let value = Math.random();

  function g() {
    return value; // в консоли: напишите alert(value); Такой переменной нет!
  }

  return g;
}

let g = f();
g(); // 0.08937859096470224

// но при дебагинге после оптимизации V8 переменная становится недоступна
function f() {
  let value = Math.random();

  function g() {
    debugger;
  }

  return g;
}

let g = f();
g(); // undefined
