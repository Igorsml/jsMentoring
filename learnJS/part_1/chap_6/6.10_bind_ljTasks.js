"use strict";

// Task # 1 Что выведет функция?

function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g(); // null. В f this === window, но в user мы задаем контекст null

// task # 2 Можем ли мы изменить this дополнительным связыванием? Что выведет этот код?

function f() {
  console.log(this.name);
}

const fun = f.bind({ name: "Вася" }).bind({ name: "Петя" });

fun(); // Вася, повторно задать bind нельзя

// Task # 3 Свойство функции после bind
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Igor",
});

const propOwn = Object.keys(bound).length;
console.log(propOwn); // 0
console.log(bound.name); // bound sayHi
console.log(bound.test); // undefined, Результатом работы bind является другой объект. У него уже нет свойства test.

/* Task # 4 Исправьте функцию, теряющую "this"
Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
Однако, его вызов приводит к ошибке. Почему?
Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо). */

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk, user.loginFail);

/* Task # 5 Использование частично применённой функции для логина
Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail? Ваши изменения должны затрагивать только выделенный фрагмент кода. */

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // изменить тут
