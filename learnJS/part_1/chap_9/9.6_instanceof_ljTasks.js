"use strict";

// Почему instanceof в примере ниже возвращает true?
// Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();
console.log(a instanceof B); // true
console.log(a.__proto__); // {}
console.log(B.prototype); // {}
