"use strict";

// prototype in class or function

const pet = {
  eatSand: true,
};

function Dog(name) {
  this.name = name;
}

Dog.prototype = pet;
const dog = new Dog("brown dog"); // dog.__proto__ = pet
console.log(dog.eatSand); // true

// prototype vs __proto__
// #1
console.log({}.prototype === {}.__proto__); // false  | prototype only in function or class

// #2
function feedPet() {}
console.log(feedPet.prototype === feedPet.__proto__); // false | Function.prototype != feedPet.prototyp

// #3
function feedDog() {}
function feedCat() {}
console.log(feedDog.__proto__ === feedDog.__proto__); // true 
console.log(feedCat.prototype === feedCat.__proto__); // false | Function.prototype

// #4
let Component = (props) => `<div<I don't know Prototype</div>`;
console.log(Component.prototype === Object.prototype); // false
console.log(Component.prototype === Component.prototype); // true

// #5
let age = 30;
console.log(age.prototype === Number.prototype); // false
console.log(age.__proto__ === Number.prototype); // true | new Number

// #6
function feedMyself() 
console.log(feedMyself.__proto__ === Function.prototype); // true

// #7 
const count = 42;
console.log(count.__proto__ === ???); 
console.log(count.__proto__ === Number.prototype); // true

console.log((0).__proto__ === Number.prototype); // true
console.log(false.__proto__ === Boolean.prototype); // true
console.log("string".__proto__ === String.prototype); // true
console.log((new Date).__proto__ === Date.prototype); // true
console.log((function(){}/* new Function */).__proto__ === Function.prototype); // true


const numbers1 = [1, 3];

// Как только выполнится этот код, все массивы,
// включая уже созданные, обзаведутся методом last
Array.prototype.last = function last() {
  // Такое обращение законно, ведь this это ссылка на сам объект,
  // который в нашем случае массив
  return this[this.length - 1];
}

numbers1.last(); // 3

const numbers2 = [10, 0, -2];
numbers2.last(); // -2

// Пример замены
Array.prototype.map = function map() {
  return 'Ehu!';
}

numbers1.map(); // "Ehu!"