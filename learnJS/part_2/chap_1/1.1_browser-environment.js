"use strict";
// DOM (Document Object Model) — это специальная древовидная структура,
//  которая позволяет управлять HTML-разметкой из JavaScript-кода.

// присвоение переменной глобальному объекту window
number = 5;
console.log(window.number); // 5

// присвоение функции глобальному объекту window
function checkWindow() {
  console.log("Ok");
}
window.checkWindow(); // 'ok'

// window с методом высоты окна
console.log(window.innerHeight); // 963

document.title = "My document name";
console.log(document.title); // 'My document name'
