"use strict";
// #1 В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true
// #1 Добавим одну строчку (выделенную в коде ниже). Что вызов console.log покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {};
console.log(rabbit.eats); // true

// #2 …А если код такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;
console.log(rabbit.eats); // false

// #3 Или такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete rabbit.eats;
console.log(rabbit.eats); // true

// #4 Или, наконец, такой:
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;
console.log(rabbit.eats); // undefined

/* #2 Создайте новый объект с помощью уже существующего
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
Можем ли мы сделать так?
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно. */

function Cow(name) {
  this.name = name;
  console.log(name);
}

let obj = new Cow("White cow"); // White cow
let obj2 = new obj.constructor("Black cow"); // Black cow
console.log(obj2.name); // Black cow

// undefined
function Cow(name) {
  this.name = name;
  console.log(name);
}

Cow.prototype = {};

let obj = new Cow("Brown cow"); // Brown cow
let obj2 = new obj.constructor("Green cow");
console.log(obj2.name); // undefined
