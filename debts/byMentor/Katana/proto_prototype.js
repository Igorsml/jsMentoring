"use strict";

// prototype vs __proto__
// #1
console.log({}.prototype === {}.__proto__); //

// #2
function feedPet() {}
console.log(feedPet.prototype === feedPet.__proto__); //

// #3
function feedDog() {}
function feedCat() {}
console.log(feedDog.__proto__ === feedDog.__proto__); //
console.log(feedCat.prototype === feedCat.__proto__); //

// #4
let Component = (props) => `<div<I don't know Prototype</div>`;
console.log(Component.prototype === Object.prototype); //
console.log(Component.prototype === Component.prototype); //

// #5
let age = 30;
console.log(age.prototype === Number.prototype); //
console.log(age.__proto__ === Number.prototype); //

// #6
class Hacker {}
console.log(Hacker.__proto__ === Function.prototype); //

// #7
function feedMyself() {}
console.log(feedMyself.__proto__ === 1); // ???

// #7
const count = 42;
console.log(count.__proto__ === 1); // ???
console.log(count.__proto__ === Number.prototype); //

console.log((0).__proto__ === Number.prototype); //
console.log(false.__proto__ === Boolean.prototype); //
console.log("string".__proto__ === String.prototype); //
console.log(new Date().__proto__ === Date.prototype); //
console.log(function () {} /* new Function */.__proto__ === Function.prototype); //
