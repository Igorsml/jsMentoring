"use strict";
// error.stack - свойство класс Error, которая указывает в каком месте кода была создана ошибка
// call stack - очередь вызова, где находится интерпретатор, какая функция выполнятеся, какая будет вызвана следующей

// Унаследуемся от Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

function test() {
  throw new ValidationError("Oopsie");
}

try {
  test();
} catch (err) {
  console.log("err message:", err.message); // 'Oopsie'
  console.log("err.name:", err.name); // 'ValidationError
  console.log("err.stack", err.stack); // stack ValidationError: Oopsie, список вложенных вызовов с номерами строк для каждого
  console.trace(new ValidationError());
}

// https://stackoverflow.com/questions/591857/how-can-i-get-a-javascript-stack-trace-when-i-throw-an-exception
