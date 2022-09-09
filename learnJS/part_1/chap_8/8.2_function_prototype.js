"use strict";

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
console.log({}.prototype === {}.__proto__); //

// #2
function feedPet() {}
console.log(feedPet.prototype === feedPet.__proto__); //

// #3
function feedDog() {}
function feedCat() {}
console.log(feedDog.prototype === feedDog.__proto__); //
console.log(feedCat.prototype === feedCat.__proto__); //

// #4
let Component = (props) => `<div<I don't know Prototype</div>`;
console.log(Component.prototype === Object.prototype);

// #5
let age = 30;
console.log(age.prototype === Number.prototype); //
console.log(age.__proto__ === Number.prototype); //

// #6
function feedMyself() 
console.log(feedMyself.__proto__ === ???); // 

// #7 
const count = 42;
console.log(count.__proto__. === ???); //