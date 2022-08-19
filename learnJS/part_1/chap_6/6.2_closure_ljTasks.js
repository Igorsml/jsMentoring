"use strict";

/* Task # 1 Независимы ли счётчики?
Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?*/

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter2()); // 0
console.log(counter2()); // 1

/* Task # 2 Объект счётчика
Здесь объект счётчика создан с помощью функции-конструктора.
Будет ли он работать? Что покажет? */

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1

// Task # 3 Функция в if. Посмотрите на код. Какой будет результат у вызова на последней строке?
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // undefined, sayHi живет только внутри блока if

/* Task # 4 Сумма с помощью замыканий
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
Да, именно таким образом, используя двойные круглые скобки (не опечатка). */

function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4

/* Task # 5 Фильтрация с помощью функции
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. 
Если она возвращает true, то элемент добавится в возвращаемый массив.
Сделайте набор «готовых к употреблению» фильтров:
inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:
arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например: */

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(start, end) {
  return function (num) {
    return num >= start && num <= end;
  };
}

function inArray(arr) {
  return function (num) {
    return arr.includes(num);
  };
}

let nums = [1, 2, 10];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
console.log(arr.filter((num) => nums.includes(num))); // 1,2

/* Task # 6 Сортировать по полю
У нас есть массив объектов, который нужно отсортировать:
Обычный способ был бы таким:
по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);
по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Можем ли мы сделать его короче, скажем, вот таким?

users.sort(byField('name'));
users.sort(byField('age'));
То есть, чтобы вместо функции, мы просто писали byField(fieldName).

Напишите функцию byField, которая может быть использована для этого. */
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

users.sort(byField("name"));
users.forEach((user) => console.log(user.name)); // Ann, John, Pete
users.sort(byField("age"));
users.forEach((user) => console.log(user.name)); // Pete, Ann, John

// Task # 7 Армия функций
// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i); // должна выводить порядковый номер
    };

    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

console.log(army.length);
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
