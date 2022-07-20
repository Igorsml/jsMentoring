"use strict";

// or create new collection with some data (each array has 2 elements - key: value)
const map = new Map([
  ["js", "JavaScript"],
  ["css", "Cascading Style Sheets"],
]);
console.log(map.size); // 2
console.log(map.get("js")); // JavaScript

// add element to collection
map.set("ts", "TypeScript");
console.log(map.get("ts")); // TypeScript

// create new empty collection
const someData = new Map();
console.log(someData.size); // 0 (empty collection)

someData.set("1", "Значение под строковым ключом 1");
someData.set(1, "Значение под числовым ключом 1");
someData.set(true, "Значение под булевым ключом true");
console.log(typeof someData.get(true)); // string | question: почему строка если ключ boolean, если значение сделать false, то уже будет тип boolean

// check length of someData
console.log(someData.size); // 3

console.log(someData.get(1)); // Возвращает "Значение под числовым ключом 1"
console.log(someData.get("1")); // Возвращает "Значение под строковым ключом 1"
console.log(someData.has(true)); // true (возвращает true, если ключ key присутствует в коллекции, иначе false)
someData.clear(); // (clear collection from all elements)
console.log(someData.size); // 0 (return current collection size)

// if try to use object as key in object
let person = { name: "Igor" };
let juniorList = {};

juniorList[person] = "Igorsml";
console.log(juniorList); // { '[object Object]': 'Igorsml' }

// try some types keys
const map = new Map();
const func = () => null;
const object = {};
const array = [];
const bool = false;
const und = undefined;

console.log(map.set(func, "value1")); //  [Function: func] => 'value1'
console.log(map.set(object, "value2")); // {} => 'value2'
console.log(map.set(array, "value3")); // ] => 'value3'
console.log(map.set(bool, "value4")); //   false => 'value4'
console.log(map.set(NaN, "value5")); // NaN => 'value5'
console.log(map.set(undefined, "value6")); //   undefined => 'value6'

// question #2: how to compare key of collection Map? NaN === NaN, undefined === undefined?

//compare call in one chain
const mapThree = new Map();
mapThree.set(NaN, "value1").set(1, "num1").set(true, "boolean1");

console.log(mapTrie); // { NaN => 'value1', 1 => 'num1', true => 'boolean1' }

// methods for iteration
const mapLanguages = new Map([
  ["js", "JavaScript"],
  ["css", "Cascading Style Sheets"],
]);

console.log(mapLanguages.keys()); // { 'js', 'css' }
console.log(mapLanguages.values()); // { 'JavaScript', 'Cascading Style Sheets' }
console.log(mapLanguages.entries()); // [ 'js', 'JavaScript' ], [ 'css', 'Cascading Style Sheets' ]

mapLanguages.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // 'js: JavaScript' 'css: Cascading Style Sheets'
});

// creating the Map from default object
const dog = {
  name: "Miley",
  age: 0.4,
};

let map = new Map(Object.entries(dog));
console.log(map); // { 'name' => 'Miley', 'age' => 0.4 } // question 3, почему не массив
console.log(map.get("name")); // 'Miley'

// creating object from Map
const cat = new Map([
  ["name", "Miriam"],
  ["age", "8"],
]);

let obj = Object.fromEntries(cat.entries());
console.log(obj.name); // Miriam

// Set
let userList = new Set();
let igor = { name: "Igorsml" };
let nika = { name: "Nika" };
let kris = { name: "Kris" };

userList.add(igor);
userList.add(nika);
userList.add(igor);
userList.add(kris);

// only uniq property
console.log(userList.size); // 3

// we can iteration Set with for..of / forEach
const petNames = new Set(["name", "Miriam"], ["age", "8"]);

// for (let value of petNames) console.log(value); // Timmy, Miley, Miriam
// petNames.forEach((value) => console.log(value)); // Timmy, Miley, Miriam
console.log(petNames.values()); // { 'name', 'Miriam' }
console.log(petNames.keys()); // { 'name', 'Miriam' } , то же что и values, для обратной совместимости с Map
console.log(petNames.entries()); // { [ 'name', 'name' ], [ 'Miriam', 'Miriam' ] }  – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.

// speed test, question 4, who's faster?
let obj = {},
  map = new Map(),
  n = 1000000;
for (let i = 0; i < n; i++) {
  obj[i] = i;
  map.set(i, i);
}

let result;
search property
console.time("Object");
result = obj.hasOwnProperty("999999");
console.timeEnd("Object"); // 0.202ms

console.time("Map");
result = map.has(999999);
console.timeEnd("Map"); // 0.021ms

// add propertie
console.time("Object");
obj[n] = n;
console.timeEnd("Object"); // 0.209ms

console.time("Map");
map.set(n, n);
console.timeEnd("Map"); // 0.016ms
