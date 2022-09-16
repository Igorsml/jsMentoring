"use strict";

// new methods for prototype
// Object.create(proto, [descriptors])
const pet = {
  loveWatermelon: true,
};

const dog = Object.create(pet, {
  jumps: {
    value: true,
  },
});
console.log(dog.loveWatermelon); // true
console.log(dog.jumps); // true
console.log(Object.getPrototypeOf(dog) === pet); // true
Object.setPrototypeOf(dog, {}); // change prototype
console.log(Object.getPrototypeOf(dog)); // {}

// clone obj (stronger then for...in)
const clone = Object.create(
  Object.getPrototypeOf(dog),
  Object.getOwnPropertyDescriptors(dog)
);
console.log(clone.jumps); // true

// простейший объект, без методов и прототипа
const obj = Object.create(null);
console.log(obj); // [Object: null prototype] {} | there is no toString method
console.log(obj["toString"]); // undefined

const obj = {
  key: "value",
};
obj.key = "__proto__";
console.log(obj.key); //

// with new Map
let map = new Map();

map.set(prompt("What's the key?", "__proto__"), 1);
console.log(map.get("__proto__")); // 1

map.set("__proto__", 2);
console.log(map.get("__proto__")); // 2
