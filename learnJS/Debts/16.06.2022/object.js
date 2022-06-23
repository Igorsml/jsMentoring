'use strict'

// [] in obj

let dog = {}

dog['can swim'] = true;
dog['like poop'] = true;
dog['like cat after drink 3l water'] = false;

console.log(dog.like poop); // poop Unexpected identifier
console.log(dog['like poop']); // true
console.log(dog['like cat after drink 3l water']); // false

let key = 'like keys'
dog[key] = true; // dog['like keys']

let car = {
  brand: 'ford fusion',
  age: 14,
};

let key = prompt("What the important parameter of a car?", "brand");

console.log(car.key) // undefined
console.log(car[key]) // prompt if enter brand

// catch name from prompt _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

let fruit = prompt("Iphone?", "apple");

let bag = {
  [fruit]: 1142, // имя свойства будет взято из переменной fruit
};

console.log(bag.apple); // {apple: 1142}

// from youtube _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

const obj = {}
obj[null] = 20; // 20
obj[[]] = 30; // 30

console.log(obj);

let arr = [];
obj.arr = 20; // arr: 20,
obj[arr] = 30; // '': 30; → string(arr) → '': 30
null.toString() // error
String(null) // 'null'

// this in obj property
function Car(make, model, year) {
  // this = {};  (неявно)
  this.make = make;
  this.model = model;
  this.year = year;
  // return this (неявно)
}
let mycar = new Car("Ford", "Fusion", 2008);