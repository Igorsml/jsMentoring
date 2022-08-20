"use strict";

if (true) {
  var test = true; // используем var вместо let
}

console.log(test); // true, переменная существует вне блока if

// с let и const переменная не становится глобальной
if (true) {
  let test = true; // используем var вместо let
}

console.log(test); // ReferenceError: test is not defined

// область видимости ограничена функцией (var становится локальной переменной)
function getVar() {
  var imHere = "Hi"; // локальная переменная, "var" вместо "let"
  console.log(imHere); // "Hi"
}

getVar(); // 'Hi'
console.log(imHere); // ReferenceError: imHere is not defined

// TDZ let / cons, могут быть объявлены ниже, если код будет выполнен после инициализации
function foo() {
  console.log("from foo", a);
}

Promise.resolve().then(() => console.log("from promise", a));
setTimeout(() => console.log("from timer", a));

let a = 10;
foo();

// 'from foo 10', 'from promise 10', 'from timer 10'
