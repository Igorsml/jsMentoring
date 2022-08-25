"use strict";

let person = { name: "Igor" };
let arrWithPerson = [person];
person = null;
console.log("arrWithPerson:", arrWithPerson); // [ { name: 'Igor' } ] , переменная перезаписана, ссылка на объект осталась в массиве

// object in map
let pet = { name: "Miley," };
let map = new Map();
map.set(pet, "...");
pet = null;
console.log(map.keys()); //  { { name: 'Miley,' } }

// WeakMap
const weakMapTest = new WeakMap();
const obj = {};
weakMapTest.set(obj, "Add me"); // 'it's work, obj in key object
console.log(weakMapTest); // WeakMap { <items unknown> } , question
weakMapTest.set("iAmNotAnObject", true); // TypeError: Invalid value used as weak map key

// если перезапишем и не будет ссылок на объект
const obj2 = {};
const weakMapTest2 = new WeakMap();
weakMapTest2.set(obj2, "..."); // объект в качестве ключа ок | TypeError: Invalid value used as weak map key
weakMapTest2.set("I am primitive", ",,,"); // примитив строка в качестве ключа футак

console.log(weakMapTest2.keys()); //  WeakMap не поддерживает перебор и методы keys(), values(), entries() | TypeError: weakMapTest2.keys is not a function
obj = null;
console.log(weakMapTest2.has(obj2)); // true

// WeakSet, тоже самое что и WeakMap, только в качестве и ключей и значений только объекты
