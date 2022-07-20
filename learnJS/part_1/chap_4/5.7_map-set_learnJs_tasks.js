"use strict";

/* Task #1
Допустим, у нас есть массив arr. Создайте функцию unique(arr), 
которая вернёт массив уникальных, не повторяющихся значений массива arr.
*/

function unique(arr) {
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  return set;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // { 'Hare', 'Krishna', ':-O' }

// solution
function unique(arr) {
  return Array.from(new Set(arr));
}

/*Task #2_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era" */

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const aclean = (arr) => {
  let soertedArray = arr.sort();
  let toLowerCase = soertedArray.map(function (s) {
    return s.toLowerCase();
  });
  let result = toLowerCase.join("").split("");
  console.log(result);
};
aclean(arr);

/* Task #3 — Мы хотели бы получить массив ключей map.keys() в переменную 
и далее работать с ними, например, применить метод .push. Но это не выходит:
*/

let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
// fix keys.push
let map = new Map();
map.set("name", "John");
console.log(map); // { 'name' => 'John' }

let keys = Array.from(map.keys());
console.log(keys); // [ 'name' ]

keys.push("more");
console.log(keys); // [ 'name', 'more' ]
