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
console.log(newArr.length); //  100000 (99999 + 1)

let weight = [69, 70, 71, 72, 73, 74, 75]

weight.length = 2;
console.log(weight); // [ 69, 70]

weight.length = 5;
console.log(weight.length); // 5
console.log(weight); // [ 69, 70, empty x 3]
weight.length = 0; // clear array
console.log(weight); // []

// 2й способо создания массива, но элементы не передаются, лишь длинна

let arr = new Array(42);
console.log(arr[0]); // undefined
console.log(arr.length); // 42

// matrix arrays
let activities = [
  ['Work', 9],
  ['Eat', 1],
  ['Commute', 2],
  ['Play Game', 1],
  ['Sleep', 7]
];

activities.push(['Study', 2]);
activities.splice(1, 0, ['Programming', 2]); // удаляет элементов по индексу 1 и вставляет ['Programming', 2]
console.table(activities); 
/*
┌─────────┬───────────────┬───┬───────┐
│ (index) │       0       │ 1 │   2   │
├─────────┼───────────────┼───┼───────┤
│    0    │    'Work'     │ 9 │ '38%' │
│    1    │ 'Programming' │ 2 │ '8%'  │
│    2    │     'Eat'     │ 1 │ '4%'  │
│    3    │   'Commute'   │ 2 │ '8%'  │
│    4    │  'Play Game'  │ 1 │ '4%'  │
│    5    │    'Sleep'    │ 7 │ '29%' │
│    6    │    'Study'    │ 2 │ '8%'  │
└─────────┴───────────────┴───┴───────┘
/

activities.forEach(activity => {
  let percentage = ((activity[1] / 24) * 100).toFixed();
  activity[2] = percentage + '%';
})

console.table(activities);
/*
┌─────────┬───────────────┬───┬───────┐
│ (index) │       0       │ 1 │   2   │
├─────────┼───────────────┼───┼───────┤
│    0    │    'Work'     │ 9 │ '38%' │
│    1    │ 'Programming' │ 2 │ '8%'  │
│    2    │     'Eat'     │ 1 │ '4%'  │
│    3    │   'Commute'   │ 2 │ '8%'  │
│    4    │  'Play Game'  │ 1 │ '4%'  │
│    5    │    'Sleep'    │ 7 │ '29%' │
│    6    │    'Study'    │ 2 │ '8%'  │
└─────────┴───────────────┴───┴───────┘
*/


// toString in arr
console.log([] + 1); // '1'
console.log([1] + 1); // '11'
console.log([1,2] + 1); // '1,21'

// comparing arrays
// ==
console.log([] == []); // false
console.log([''] == [[]]); // false
console.log([undefined] == [null]); // false
// ===
console.log([] == []); // false
console.log([''] == [[]]); // false
console.log([undefined] == [null]); // false

let color = ['white', 'grey', 'orange']
let linkToArr1 = color;
let linkToArr2 = color;
console.log(linkToArr1 == linkToArr2); // true, переменные ссылаются на один и тот же массив

console.log(0 == []); // true, преобразование в примитив, [] в пустую строку '' и далее пустая строка в ноль.
console.log('0' == []); // false, разные строки '0' != ''
