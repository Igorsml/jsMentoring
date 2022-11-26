"use strict";
// Объект в качестве значения в WeakMap
// ключи в WeakMap должны быть объектами,

// obj key in Map. Объект даже после обнуления доступен в памяти в Map
let person = { name: "Igor" };

const map = new Map();
map.set(person, "value");
person = null;
console.log(map.keys()); // [Map Iterator] { { name: 'Igor' } }

// obj key in WeakMap. Объект удален из памяти сборщиком мусора после очистки
let personRip = { name: "Igor" };

let mapRip = new WeakMap();
mapRip.set(personRip, "value");
mapRip = null;
console.log(mapRip.keys()); // TypeError: Cannot read properties of null (reading 'keys')
