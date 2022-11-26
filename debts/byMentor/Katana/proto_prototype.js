"use strict";

// prototype vs __proto__
// #1
console.log({}.prototype === {}.__proto__); // false, у object нету prototype

// #2
function feedPet() {}
console.log(feedPet.prototype === feedPet.__proto__); // false, feedPet.prototype != Function.prototype

// #3
function feedDog() {}
function feedCat() {}
console.log(feedDog.__proto__ === feedDog.__proto__); // true | Function.prototype === Function.prototype
console.log(feedDog.prototype === feedCat.__proto__); // false | feedDog.prototype !== feedCat.prototype

// #4
let Component = (props) => `<div<I don't know Prototype</div>`;
console.log(Component.prototype === Object.prototype); // false | у стрелки нет прототипа !== Object.prototype
console.log(Component.prototype === Component.prototype); // true

// #5
let age = 30;
console.log(age.prototype === Number.prototype); // false | у age нету prototype
console.log(age.__proto__ === Number.prototype); // true | Number.prototype === Number.prototype

// #6
class Hacker {}
console.log(Hacker.__proto__ === Function.prototype); // true | class → Function.prototype → Object.prototype → null

// #7
function feedMyself() {}
console.log(feedMyself.__proto__ === "what here?"); // Function.prototype

// #7
const count = 42;
console.log(count.__proto__ === "what here?"); // Number.prototype
console.log(count.__proto__ === Number.prototype); // true

console.log((0).__proto__ === Number.prototype); // true
console.log(false.__proto__ === Boolean.prototype); // true
console.log("string".__proto__ === String.prototype); // true
console.log(new Date().__proto__ === Date.prototype); // true
console.log(function () {} /* new Function */.__proto__ === Function.prototype); // true

class Dog {
  constructor(name) {
    this.name = this.constructor.name;
  }
  bark() {
    console.log("bark");
  }
}

let dog = new Dog("Timmy");
console.log(dog.__proto__.__proto__ === "what here?"); // dog → Dog.prototype → Object.prototype
console.log(dog.__proto__.constructor.__proto__ === "what here?"); //
console.log(dog.__proto__.__proto__.__proto__.__proto__ === "what here?"); // dog → Dog.prototype → Object.prototype → Object.prototype → null | error TypeError: Cannot read properties of null (reading '__proto__')
