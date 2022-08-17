"use strict";

// setInterval (func|code, [delay], [arg1], [arg2], ...)

function sayBark(sound = "Meow", delayAfter = 2000) {
  console.log(sound);
  console.log(delayAfter);
}

setTimeout(sayBark, 1000, "woof-woof after ms", 1000); // woof-woof after ms 1000
setTimeout(sayBark, 2000); // 'Meow' , 2000

// рекурсивный setTimeout для более точной задержки

function sayBark(sound = "Meow") {
  console.log(sound);
  setTimeout(sayBark, 500, "woof-woof");
}

setTimeout(sayBark, 500, "woof-woof"); // 'woof-woof'
clearTimeout(sayBark);

function showNumber(num) {
  console.log(num);
  let timeId = setTimeout(showNumber, 1000, ++num);
  if (num === 4) {
    clearTimeout(timeId);
  }
}

setTimeout(showNumber, 500, 1); // 1 , 2, 3
