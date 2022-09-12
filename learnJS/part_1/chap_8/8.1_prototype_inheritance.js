"use strict";

// __proto__ can be object or null
const animal = {
  eats: true,
  canLickOwnDick() {
    console.log("Male can");
  },
};

const pet = {
  name: "Timmy",
  age: 8,
};

const superAbility = {
  jumps: true,
  __proto__: pet,
};

pet.__proto__ = animal;
console.log(pet.name); // ' Timmy'
console.log(pet.eats); // true
pet.canLickOwnDick(); // 'Male can'
superAbility.canLickOwnDick(); // ' Male can'
delete pet.eats;
console.log(animal);
console.log(pet);
console.log(pet.eats); // true

// if object has own method, he ingore method of prototype
pet.canLickOwnDick = function () {
  console.log("Female can't");
};
pet.canLickOwnDick(); // 'Female can't'

//  прототипы никак не влияют на this
const animal = {
  sleep() {
    this.isSleeping = true;
  },
};

const cat = {
  name: "Miriam",
  __proto__: animal,
};

cat.sleep();
console.log(cat.isSleeping); // true

// cycle for in work on each object property & methods
const animal = {
  eats: true,
};

const cat = {
  jumps: true,
  __proto__: animal,
};
console.log(Object.keys(cat)); // jumps
for (let prop in cat) console.log(prop); // jumps, eats
for (let prop in cat) {
  let isOwn = cat.hasOwnProperty(prop);

  isOwn ? console.log(`Own: ${isOwn}`) : console.log(`Inherited: ${prop}`); // Own: true | Inherited: eats
}

// obj __proto__
const man = {}; // man.__proto__
const woman = {}; //woman.__proto__
console.log(man.__proto__ === woman.__proto__); // true

// arr
const users = []; // users.__proto__ | new Array
const animals = []; // animals.__proto__
console.log(users.__proto__ === animals.__proto__); // true

const age = 25 + 5; // age.__proto__ | new Array |  примитив, но если к примитиву обращаемся как к объекту, то в памяти временно создается объектная версия примитива
const trueOrFalse = true; // true.__proto__ | new Boolean | в памяти создается временный объект
const greeting = "Aloha, Abobus!"; // greeting.__proto__ | new String
console.log(trueOrFalse.__proto__ === greeting.__proto__); // false

function checkIQ() {} // checkIQ.__proto__ | new Function
const checkWeight = () => {}; // checkWeight.__proto__ | new Function
console.log(checkIQ.__proto__ === checkWeight.__proto__); // true
