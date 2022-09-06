"use strict";

let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true
delete rabbit.jumps;
console.log(rabbit.jumps); // null
delete animal.jumps;
console.log(rabbit.jumps); // undefined

/* #2 Задача состоит из двух частей.
С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
У нас есть объекты:*/

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined

/* #3 Куда будет произведена запись?
Объект rabbit наследует от объекта animal.
Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit? */

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); // rabbit, __proto__ не влияет на this

/* #4 Почему наедаются оба хомяка?
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить? */

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // [ 'apple' ]

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // []
