"use strict";

const arr = ["0 index in array"];
const [a] = arr;
console.log(a); // 0 index in array

const [firstChar, secondChar] = "Igor Sml".toUpperCase();
console.log(firstChar, secondChar); // I G , question

let user = {};
[user.name, user.surname] = "Igor Sml".split(" ");
console.log(user.name); // Igor

// можем работать с любым перебираемым объектом
const [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three); // 1 2 3

// можем пропускать элемент массива
const [one, , three] = ["Timmy", "Miley", "Miriam"];
console.log(three); // Miriam

// можно задуть пару свойств и далее оставшиеся через rest, но годится и любое другое имя переменной
let objChar = ({ a, b, ...abobus } = { a: 1, b: 2, c: 3, d: 4 });
console.log(abobus); // { c: 3, d: 4 }

// reverese значений
let a = 1;
let b = 2;
console.log(([a, b] = [b, a])); // 2, 1

// деструктуризация в цикле
let user = {
  name: "Igor",
  pet: "Miley",
};

for (let [key, value] of Object.entries(user)) {
  console.log([key, value].join(" ")); // name Igor pet Miley
}

// если ничего не назначим, то будет undefined
const [Cloudy, Sunny] = [];
console.log(Cloudy, Sunny); // undefined undefined
// но на этот случай можем задать по дефолту значения
const [weather = "Sunny", temperature = "27 °C"] = ["Cloudy"];
console.log(weather); // Cloudy
console.log(temperature); // 27 °C

// можем присвоить значения в переменные по ключу объекта, но названия должны совпадать,
// очередность не важна, при опечатке будет unfdined. Чтобы JS не думал что это блок кода, заключим выражение в скобки
let dimension = ({ height, width, title } = {
  title: "screen",
  height: 1080,
  width: 1920,
});
console.log(height, width, title); // 200 100 Menu

// можно и без let, но будет ошибка, JS будет считать это блоком кода
{ height, width, title } = {
  title: "screen",
  height: 1080,
  width: 1920,
};
console.log(height, width, title); // SyntaxError: Unexpected token '='

// фиксится скобками
({ height, width, title } = {
  title: "screen",
  height: 1080,
  width: 1920,
});
console.log(height, width, title); // 1080 1920 screen

// сменим название переменной
let { width: w, height: h } = dimension;
console.log(w, h); // 1080, 1920

// если боле сложные структуры то можно также и деструктуризацию подстроить под структуру объектов
const stack = {
  languages: {
    first: 'JS',
    second: 'vue',
  },
  additional: ['TS', 'Docker'],
  extra: true,
}

let { 
  languages: {
    first,
    second,
  },
  additional: [lng1, lng2],
  salary = '6000$'
} = stack;

console.log(first); // JS
console.log(salary); // 6000$

// можем пихать переменные из десруктуризации в функцию
function({incomingProperty: letName = defaultValue} = {})

// но если в фуннкцию не будет передан аргумент, то необходимо передать пустой объект, иначе undefined
function()

// question, можно ли задать для rest default кроме как объект?