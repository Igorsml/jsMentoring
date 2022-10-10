"use strict";

// 1) Что такое иммутабельность, мутабельность, осмыслить.
// Мутабельность меняет исходные данные, иммутабельность возвращает измененную копию не затрагивая исходную

// 2) Проверить смутировать обычный объект
const obj = {
  name: "Igor",
  pets: {
    petsName: ["Timmy", "Miley", "Miriam"],
  },
};

obj.name = "S Igor"; // name: 'S Igor'

// 3) попробовать иммутабельно изменить объект.
const obj2 = obj;
obj2.name = "Noname";
console.log(obj); // 'Noname'

// let's copy
const clone = structuredClone(obj);
clone.age = 42; // https://prnt.sc/lbcIoipMnRmU

Object.assign(obj, {});

Object.freeze(obj);
obj.name = "Igor Sml"; // TypeError: Cannot assign to read only property 'name' of object
obj.pets.petsName = ["Timmy", "Miley", "Miriam", "Gavrusha"]; // [ 'Timmy', 'Miley', 'Miriam', 'Gavrusha']

// 4) Знания применить на массивах
const arr = ["Timmy", "Miley", "Miriam"];
const arr2 = [1, 2, 3];

// mutable
arr[0] = "Abobus"; // [ 'Abobus', 'Miley', 'Miriam' ]

// 5) понять какие методы массивов мутирующие и иммутабельные

// mutable methods
console.log(arr.copyWithin(0, 1)); // [ 'Miley', 'Miriam', 'Miriam' ] | copy to index 0 the element at index 1
console.log(arr.fill("*", 1, 3)); // [ 'Miley', '*', '*' ]
console.log(arr2.pop()); // arr2 = [ 1, 2 ], the last element
console.log(arr2.push(3)); // arr2 = [ 1, 2, 3 ]
console.log(arr2.reverse()); // arr2 = [ 3, 2, 1 ]
console.log(arr2.shift()); // arr2 = [ 2, 1 ], the first element
console.log(arr2.sort()); // arr2 = [ 1, 2 ] | sort from small to big
console.log(arr2.splice(0, 1, "Hello, Ia m new")); // [1] | arr2 = [ 'Hello, Ia m new', 2 ]
console.log(arr2.unshift("Not alone")); // arr2 = [ 'Not alone', 'Hello, Ia m new', 2 ]

// other 22 methods are immutable — https://doesitmutate.xyz/
// spread operator is immutable to
const clone = [...arr, ...arr2]; // [ 'Miley', '*', '*', 'Not alone', 'Hello, Ia m new', 2 ]
