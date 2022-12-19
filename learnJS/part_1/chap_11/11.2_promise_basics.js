"use strict";

// успешно выполненный промис
const iPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(console.log("I promise you")), 1e3); // I promise you
});

// Ошибочно выполненный промис
const iCantPromise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Ooopsie"), 1e3)); // Error: Ooopsie
});

// выполнится первый callback у промиса, state изменяется только один раз
const firstInPromise = new Promise(function (resolve, reject) {
  resolve(console.log("Haha, I am first")); // Haha, I am first

  setTimeout(() => reject(new Error("Ooopsie"), 1e3)); // ignore
});

// колбек принимает только один аргумент
const iPromise = new Promise(function (resolve, reject) {
  resolve(
    console.log("Haha, I am first"),
    "не выполнится 1",
    "не выполнится etc."
  ); // Haha, I am first
});

// свойства result и state внутренние, для работы с ними используются методы .then, .catch, .finally
const promiseWithThen = new Promise(function (resolve, reject) {
  resolve(console.log("Success!"));

  promise.then(
    (result) => console.log(result),
    (error) => new Error(error.message)
  );
}); // Success

// в случае ошибки
const promiseWithThen2 = new Promise(function (resolve, reject) {
  reject(new Error("Oopsie"));

  promise.then(
    (result) => console.log(result),
    (error) => new Error(error.message)
  );
}); // Error: Oopsie

/* Однако промисы — это тоже не серебряная пуля. У них есть несколько недостатков:
1) Код не такой лаконичный, как мог быть.
2) В цепочке промисов, как на примере (со стрелочными функциями), невозможно выставить брейкпоинт, потому что нет тела функции. Приходится раскрывать функцию.
3) Стек ошибок может содержать в себе then.then.then.then....
4) Вложенные условия сильно увеличивают количество кода и ухудшают читаемость.
Для решения этих проблем придумали асинхронные функции. */
