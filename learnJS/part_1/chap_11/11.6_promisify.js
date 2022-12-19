"use strict";

//функция loadScript которая в процессе выполнения НЕ ИЗМЕНЯЕТСЯ
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  document.head.append(script);
}

// промисифицируем ее, чтобы она работала как Promise, c .then/.catch
function promisifyDecorator(f) {
  return function (src) {
    // вызов возвращает функцию-обёртку
    return new Promise((resolve, reject) => {
      //создаем callback, затем вызываем с ним нашу НЕИЗМЕНЯЕМУЮ функцию
      function callback(err, result) {
        if (err) {
          return reject(err);
        } else {
          resolve(result);
        }
      }
      // вызываем оригинальную функцию loadScript с аргументами адрес и callback
      f.call(this, src, callback);
    });
  };
}
let loadScriptPromise = promisifyDecorator(loadScript); //теперь обычная функция работает как Promise
//вызов
loadScriptPromise("my_script.js")
  .then((script) => {
    console.log(script.src); // адрес скрипта
    //скрипт загрузился, стали доступные переменные, функции и т.п.
    console.log(user.name); // Vasya
  })
  .catch((err) => console.log(err));
//создаем в той же папке, что и наш html - JS файл  my_script.js в котором будет литерал объекта:
let user = { name: "Vasya" };

//
function calc(a, b, callback) {
  let sum = a + b;

  if (a < 2) {
    callback(new Error("Первый аргумент должен быть больше 1"));
  } else {
    callback(null, sum);
  }
}

function square(err, sum) {
  if (err) console.log(err);
  else console.log(sum ** 2);
}

calc(6, 2, square);

function promCalc(a, b) {
  return new Promise((res, rej) => {
    calc(a, b, (err, sum) => {
      if (err) rej(err);
      else res(sum);
    });
  });
}
promCalc(3, 1)
  .then((res) => square(null, res))
  .catch(square);
