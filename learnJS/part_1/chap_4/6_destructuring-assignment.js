"use strict";

const arr = ["0 index in array"];
const [a] = arr;
console.log(a); // 0 index in array

const [firstChar, secondChar] = "Igor Sml".toUpperCase();
console.log(firstChar, secondChar); // I G , question

let user = {};
[user.name, user.surname] = "Igor Sml".split(" ");
console.log(user.name); // Igor

// можем работать с любым перебираемым объектом
const [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three); // 1 2 3

// можем пропускать элемент массива
const [one, , three] = ["Timmy", "Miley", "Miriam"];
console.log(three); // Miriam
