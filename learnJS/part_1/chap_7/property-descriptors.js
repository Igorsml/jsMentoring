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
const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptor(pet));
