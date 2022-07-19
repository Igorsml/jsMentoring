"use strict";

const someData = new Map();

someData.set("1", "Значение под строковым ключом 1");
someData.set(1, "Значение под числовым ключом 1");
someData.set(true, "Значение под булевым ключом true");

// check length of someData
console.log(someData.size); // 3

console.log(someData.get(1)); // Возвращает "Значение под числовым ключом 1"
console.log(someData.get("1")); // Возвращает "Значение под строковым ключом 1"
console.log(someData.has(true)); // true
someData.clear();
console.log(someData.size); // 0
