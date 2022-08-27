"use strict";
/* Функции bind(), apply() и call() работают с контекстом и аргументами. В этом упражнении вы научитесь заменять одну функцию другой для получения функциональности, аналогичной bind().

Реализуйте и экспортируйте по умолчанию функцию, которая ведет себя аналогично встроенной bind(obj, fn). 
Аргументы функции:
obj – объект выступающий в роли контекста
fn() – функция привязываемая к контексту 
Ограничение: для реализации нельзя пользоваться только встроенной функцией bind().*/

const obj = { number: 5 };

const fn = function fn(number) {
  return number + this.number;
};

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

const fnWithContext = bind(obj, fn);

// Принимает столько же аргументов сколько и исходная функция
console.log(fnWithContext(3)); // 8

// Что будет в консоли?
// #1
const person = { name: "Igor" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 30); // 'Igor is 30'
sayHi.bind(person, 30); // [Function: bound sayHi]
sayHi.bind(person, 30)(); // Igor is 30
// В обоих случаях мы передаем объект, на который будет указывать this. Но .call выполняется сразу же!
// .bind возвращает копию функции, но с привязанным контекстом. Она не выполняется незамедлительно.

// #2
var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // "🥑"
  console.log(data.getStatus.call(this));
}, 0); // "😎" С помощью метода call мы можем изменить объект, на который ссылается ключевое слово this. В функциях ключевое слово this относится к объекту, которому принадлежит функция. Мы объявили функцию setTimeout для объекта global, поэтому в функции setTimeout ключевое слово this ссылается на объект global. В глобальном объекте есть переменная с именем status со значением "😎". При регистрации this.status выводится "😎".
