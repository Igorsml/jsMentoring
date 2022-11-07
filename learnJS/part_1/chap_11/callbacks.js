"use strict";

// Проблемы без callback
function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

loadScript("./hereYouAre.js"); // если в скрипте есть function myFunction(){} и браузер не успев загрузить, myFunction не выполнится
myFunction(); // ReferenceError: myFunction is not defined

// fix with callback function

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  // Событие onload используется как указатель, что веб-страница полностью загружена,
  // включая содержание, изображения, стилевые файлы и внешние скрипты.
  script.onload = () => callback(script);
  script.onerror = () =>
    callback(new Error(`Oopsie, script ${scr} is not available`)); // стоит учесть если загрузится с ошибкой
  document.head.appendChild(script);
}

// или обработка ошибки на входе, подход error-first callback
loadScript("./hereYouAre.js"),
  function (error, script) {
    error ? console.error(error) : console.log("script uploaded successfully");
  };

function foo(callback) {
  // Есть что-то очень долгое, например супер сложное вычисление.
  // Вопрос, как нам выполнить код после того как это вычисление закончится и использовать результат этого действия?
  // let b = 1000;
  let result = "result";

  // for (let i = 0; i <= b; i++) {
  //   result = "result";
  // }
  // И здесь появляется наш Callback! Он подождет пока вычисления в цикле закончатся и выведет наш результат в консоль.
  setTimeout(() => {
    callback(result);
  }, 1000);
}

foo(function (res) {
  console.log(res);
});
