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
