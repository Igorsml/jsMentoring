"use strict";

/* #1 - Добавьте toString в словарь
Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
Вот так это должно работать: */

let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(String(dictionary)); // "apple,__proto__"

/* #2 - Разница между вызовами
Давайте создадим новый объект rabbit: */
function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

const rabbit = new Rabbit("Bunny");

rabbit.sayHi(); // Bunny
Rabbit.prototype.sayHi(); // undefined | { sayHi: [Function (anonymous)] } , without name 'Bunny'
rabbit.__proto__.sayHi(); // undefined | { sayHi: [Function (anonymous)] } , without name 'Bunny'
Object.getPrototypeOf(rabbit).sayHi(); // undefined | { sayHi: [Function (anonymous)] } , without name 'Bunny'
