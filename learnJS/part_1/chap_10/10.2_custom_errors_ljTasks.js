"use strict";

// Наследование от SyntaxError
// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
// Класс должен поддерживать свойства message, name и stack.
// Пример использования:

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("ошибка форматирования");

console.log(err.message); // "ошибка форматирования"
console.log(err.name); // FormatError
console.log(err.stack); // FormatError: ошибка форматирования

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
