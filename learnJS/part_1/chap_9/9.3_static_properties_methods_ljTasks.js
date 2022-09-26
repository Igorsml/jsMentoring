"use strict";

/*Класс расширяет объект?
Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.
Пример: */

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
console.log(rabbit.hasOwnProperty("name")); // true

/* Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?
В чем разница?
Ниже пример кода с таким наследованием (почему он не работает? исправьте его): */

class Rabbit extends Object {
  constructor(name) {
    super(name); // fix | true
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty("name")); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
