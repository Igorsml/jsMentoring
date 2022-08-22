"use strict";

// functions is an objects

function whoAmI() {
  console.log("guess who");
}

console.log(whoAmI.name); // whoAmI

const whoAmI = () => {
  console.log("guess who");
};

console.log(whoAmI.name); // whoAmI

// если имя не определить, возвращается пустая строка
const arr = [function () {}];
console.log(arr[0].name); // ''

// count of parameters function
function motherOfParameters(a, b, c, d, ...rest) {}
console.log(motherOfParameters.length); // 4

// counter of function call
getCall.counter = 0;

function getCall() {
  console.log("Hi there");

  getCall.counter++;
}

getCall(); // 'Hi there'
getCall(); // 'Hi there'
getCall(); // 'Hi there'

console.log(`Function called ${getCall.counter} times`); // Function called 3 times

// рекурсивный вызов функции если параметр отсутствует
let seyAbobus = function func(abob) {
  if (abob) {
    console.log(`${abob}us`);
  } else {
    func("Abobuism");
  }
};

seyAbobus(); // Abobuismus

const newAbobus = seyAbobus;
seyAbobus = null;
newAbobus(); // Abobuismus
