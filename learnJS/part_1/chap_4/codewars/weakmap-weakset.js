"use strict";

const person = { name: "Igor" };
console.log("person:", person); // person: { name: 'Igor' }

const arrWithPerson = [person];
console.log("arrWithPerson:", arrWithPerson); // arrWithPerson: [ { name: 'Igor' } ]

person = null;
console.log("person:", person); // TypeError: Assignment to constant variable.

// object in map
const pet = { name: "Miley," };
console.log("pet:", pet); // pet: { name: 'Miley,' }

const map = new Map();
map.set(pet, "...");
console.log("map:", map); // map: Map(1) { { name: 'Miley,' } => '...' }

pet = null;
console.log("map:", pet); // TypeError: Assignment to constant variable.

// WeakMap
const weakMapTest = new WeakMap();
const obj = {};
weakMapTest.set(obj, "Add me"); // 'it's work, obj in key object
console.log(weakMapTest); // WeakMap { <items unknown> } , question
weakMapTest.set("iAmNotAnObject", true); // TypeError: Invalid value used as weak map key

// если перезапишем и не будет ссылок на объект
const obj2 = {};
const weakMapTest2 = new WeakMap();
weakMapTest2.set(obj2, "...");
console.log(weakMapTest2.keys()); // TypeError: weakMapTest2.keys is not a function
obj = null;
console.log(weakMapTest2); // WeakMap { <items unknown> }
