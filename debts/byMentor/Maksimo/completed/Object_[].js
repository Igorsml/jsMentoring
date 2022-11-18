"use strict";

//  shorthand for the someObject[someKey]. Квадратные скобки также позволяют обратиться к свойству,
// имя которого может быть результатом выражения.

let sum = 4 + 2;

let math = {
  number: 2,
  [sum]: 3,
};
console.log(math); // { '6': 3, number: 2 }

const user = {
  name: "Igor",
  married: true,
  age: 29,
};

console.log(user["name"]); // Igor

// имя свойства может меняться в процессе обработки. Обращение к свойству через точку не позволяет задавать имя динамически
let propertyName = "name";
user[propertyName]; // 'Igor'
propertyName = "married";
user[propertyName]; // true
