"use strict";

// func.call([thisArg[, arg1, arg2, ...argN]]) _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
function callPet() {
  console.log(`Come here ${this.name}!`);
}

const petTimmy = { name: "Timmy" };
const petMiley = { name: "Miley" };

callPet.call(petTimmy); // Come here Timmy!
callPet.call(petMiley); // Come here Miley!

function callPet() {
  console.log(`Come here ${this.name}!`);
}
const petFood = ["Watermelon", "Meat", "Shit"];

const petMiriam = { name: "Miriam" };
const petAbobus = { name: "Abobus" };

callPet.apply(petMiriam, petFood); // Come here Miriam!
callPet.apply(petAbobus, petFood); // Come here Abobus!

// call forwarding ES6
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

function bar(...args) {
  console.log(args); // [ 1, 2, 3 ]
  return sum(...args);
}

console.log(bar(1, 2, 3)); // 6

// заимствование метода, т.к. иначе TypeError: arguments.join is not a function
function hash() {
  console.log([].join.call(arguments)); // 1, 2
}

hash(1, 2, 3); // 1, 2, 3

// func.apply(thisArg, [ argsArray]) _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const max = Math.max.apply(null, numbers);
console.log(max); // 8

// call forwarding ES3/ES5
function foo() {
  console.log(["a", "b", "c", "d", "e", "f"]);
}

function bar() {
  return foo.apply(null, arguments);
}

bar(); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
