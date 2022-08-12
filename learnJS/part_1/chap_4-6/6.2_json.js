"use strict";

const pet = {
  name: "Timmy",
  age: 8,
  isBoy: true,
  parent: ["Igor", "Nika"],
};

const json = JSON.stringify(pet);

console.log(typeof json); // string

console.log(JSON.stringify(42)); // 42 - number
console.log(JSON.stringify(true)); // true - boolean
console.log(JSON.stringify([4, 2])); // [4, 2] - array

// JSON пропускет методы, символы и undined
const car = {
  drive() {
    console.log("wrooom-wroom");
  },
  [Symbol("id")]: 42,
  find: undefined,
};

console.log(JSON.stringify(car)); // {}

// проблема циклической ссылки
const languages = {
  famous: ["JS", "TS"],
};

const meetings = {
  type: "Q&A",
  participants: ["Igor", "Polo"],
};

meetings.about = languages;
languages.count = meetings;
console.log(JSON.stringify(meetings)); // TypeError: Converting circular structure to JSON

//fix
const languages = {
  famous: ["JS", "TS"],
};

const meetings = {
  type: "Q&A",
  participants: ["Igor", "Polo"],
  speak: languages,
};

languages.count = meetings;

JSON.stringify(meetings, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return key == "occupiedBy" ? undefined : value;
});
