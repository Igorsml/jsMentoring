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
