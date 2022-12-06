"use strict";

// редко используемое, скорее ошибка добавление .then к одному промису, это не цепочка

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 1e3);
});

promise.then((result) => {
  console.log(result);
  return result * 2;
}); // 42

promise.then((result) => {
  console.log(result);
  return result * 2;
}); // все еше 42

// рабочий вариант именно с цепочкой

const iAmPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 1e3);
})
  .then((result) => {
    console.log(result);
    return result * 2;
  }) // 42
  .then((result) => {
    console.log(result);
    return result * 2;
  }) // 84
  .finally(() => console.log("I'm done")); // 'I'm done'

// если объект содержит метод .then, он будет обработан как промис, такие объекты называются thenable
const usefulThenable = {
  then(resolve, reject) {
    setTimeout(() => {
      const grade = Math.floor(Math.random() * 11);
      resolve(`You got a ${grade}`);
    }, 1000);
  },
};

// Promise.resolve преобразует thenable объект usefulThenable в promise
let p = Promise.resolve(usefulThenable);

p.then(() => {
  console.log(p); // Promise { 'You got a 9' }
});
console.log(p); // Promise { <pending> }

// пример с fetch
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg, RU&appid=7d9fc0c12d7e72c928c46cab5249ab7e"
)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log(result);
  }); // "timezone":10800,"id":498817,"name":"Saint Petersburg","cod":200 ...
