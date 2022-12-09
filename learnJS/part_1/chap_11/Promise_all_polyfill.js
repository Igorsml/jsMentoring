"use strict";
// На вход к нам приходит массив промисов
Promise.all = (promises) => {
  const results = [];
  let rest = promises.length;

  // Возвращаем, естественно, новый промис
  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      promise.then((result) => {
        // сохраняем индекс, под которым он был в массиве `promises`
        results[index] = result;
        rest -= 1;

        if (rest === 0) resolve(results);
      });
    });
  });
};

// Сделаем искусственную задержку
const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

// И создадим несколько промисов для тестирования
const fetchUsers = () => delay(1000).then(() => ["Timmy", "Miley", "Miriam"]);
const stringPromise = delay(5000).then(() => "Lorem ipsum dolor sit amet");

// Прогоним позитивный случай
Promise.all([fetchUsers(), stringPromise]).then(console.log);
/*
[
  ["Timmy", "Miley", "Miriam"],
  'Lorem ipsum dolor sit amet'
]
*/

// Прогоним негативный случай, когда возникает ошибка
const problemPromise = delay(2000).then(() => {
  throw "Houston, we have a problem";
});
Promise.all([fetchUsers(), problemPromise, stringPromise]).then(console.log);
/*
Uncaught (in promise) Houston, we have a problem
*/
