'use strict'

// create array
let newArr = new Array();
let newArr2 = [];

let pets = ['Timmy', 'Miley', 'Miriam'];
console.log(pets[0]); // 'Timmy'
console.log(pets[4]); // undefined

pets[2] = 'Archy' 
pets[3] = 'Gavrusha' 
console.log(pets); // [ 'Timmy', 'Miley', 'Archy', 'Gavrusha' ]
console.log(pets.length); // 4

// type values in array
let soup = ['Dog', 1, true, null, undefined, [true, undefined,], {a: 1,}, Symbol('id'),  BigInt(9007199254740991), function() { return 'Hello! I\'m in arr'},]
console.log(soup); // ['Dog', 1, true, null, undefined, [true, undefined,], {a: 1,}, Symbol(id),  9007199254740991n, [Function (anonymous)]]
console.log(soup[soup.length - 1]()); // 'Hello! I'm in arr'
console.log(soup.at(-1)()); // 'Hello! I'm in arr'
console.log(soup.at(-4)); // { a: 1 }

// pop/push
let pets = ['Timmy', 'Miley', 'Miriam'];
console.log(pets.pop()); // 'Miriam', удаляет последний элемент из массива и возвращает его
console.log(pets.length); // 2
console.log(pets.push('Archy', 'Taska')); // 4 , добавляет в конец, возвращает длину
console.log(pets); //  ['Timmy', 'Miley', 'Archy', Taska']

// shift/unshift
console.log(pets.shift()); // 'Timmy', удаляет первый и возвращает его
console.log(pets); // ['Miley', 'Miriam', 'Archy']
console.log(pets.unshift('Timmy', 'Taska')); // 5, добавляет в начало, возвращает длину
console.log(pets); // ['Timmy', 'Taska', 'Miley', 'Archy', 'Taska']

// broke array
let newArr = [];
newArr[99999] = 5; 
newArr.age = 42;
newArr.weight = 75;

console.log(newArr); //  [empty × 99999, 5, age: 42, weight: 75]

