"use strict";

// writable
const pet = {
  name: "Timmy",
  age: 8,
};

// look properties object of pet | Object.getOwnPropertyDescriptor(obj, prop)
const descriptor = Object.getOwnPropertyDescriptor(pet, "name");
console.log(descriptor);
/* {
  value: 'Timmy',
  writable: true,
  enumerable: true,
  configurable: true
} */

// change properties of pet
Object.defineProperty(pet, "name", {
  writable: false,
});
pet.name = "Miley";
pet.weight = 10;

console.log(pet.name); // TypeError: Cannot assign to read only property 'name' of object
console.log(pet.weight); // 10

// enumerable
const pet = {
  name: "Timmy",
  age: 8,
  toString() {
    return this.name;
  },
};

console.log(Object.keys(pet)); // [ 'name', 'age', 'toString' ]

Object.defineProperty(pet, "toString", {
  enumerable: false,
});

// теперь toString не выводится
for (let key in pet) {
  console.log(key); // name [ 'name', 'age' ]
  console.log(Object.keys(pet)); // name [ 'name', 'age' ]
}

// configurable, for example Math.pi, enumerable & configurable false
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/* {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */
Math.PI = 3; // TypeError: Cannot assign to read only property 'PI' of object

// Object.defineProperties(obj, props) for many properties
Object.defineProperties(pet, {
  name: { value: "Miley", writable: false },
  weight: { vale: 5, writable: false },
  // ...
});

// copy the object with flags
const pet = {
  name: "Timmy",
  age: 8,
};

const clone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(pet)
);
console.log(clone); // { name: 'Timmy', age: 8 }

// methods freeze properties

//Object.preventExtensions(obj) - add new properties to object
const pet = {
  name: "Timmy",
  age: 8,
};

Object.preventExtensions(pet);
console.log(Object.isExtensible(pet)); // false
delete pet.name; // delete ok
pet.height = 35; // TypeError: Cannot add property height, object is not extensible

// Object.seal(obj) | configurable: false
const pet = {
  name: "Timmy",
  age: 8,
};

Object.seal(pet);
Object.isSealed(pet); // true
pet.height = 35; // TypeError: Cannot add property height, object is not extensible
delete pet.name; // TypeError: Cannot delete property 'name' of #<Object>

// Object.freeze(obj) | configurable: false, writable: false
const pet = {
  name: "Timmy",
  age: 8,
};

Object.freeze(pet);
Object.isFrozen(pet); // true
delete pet.name; // TypeError: Cannot delete property 'name'
pet.name = "Miley"; // TypeError: Cannot assign to read only property 'name' of object
pet.height = 35; // TypeError: Cannot add property height, object is not extensible
