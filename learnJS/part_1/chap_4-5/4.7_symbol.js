'use strict'

// let's create symbol 
let id = Symbol('puk'); // puk - name of symbol, can be the same on other symbols

let id1 = Symbol('id');
let id2 = Symbol('id');

console.log('id1 == id2:', id1 == id2) // false

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

let id3 = Symbol('test console.log')

console.log('let id3 :', id3) // Symbol(test console.log, alert) | Symbol(test console.log, alert)

let id3 = Symbol('test alert')
alert(id3) // TypeError: Cannot convert a Symbol value to a string
alert(id3.toString()) //  fix alert | Symbol('test console.log, alert')
alert(id3.description) // fix alert | test console.log, alert

// hidden & freeze property
let user = {
  name: "Igor"
};

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

let id = Symbol("id"); // create symbol

user[id] = 1; // add property for obj 1

console.log(user[id]); // 1

// unique id _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
let user = {
  name: "Igor"
};

let id = Symbol('id')
user[id] = 'their id'

console.log(user[id]); // Question

// Symbol in obj /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

let id = Symbol("id");

let user = {
  name: "Abob",
  [id]: 123 // value let id, not "id"
};

// Symbol for in cycle, Object.keys /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

let id = Symbol("id");

let dog = {
  name: "Miley",
  age: 0.4,
  [id]: 1,
};

console.log(Object.keys(dog)) // ['name', 'age']
for (let key in dog) console.log(key); // name, age (свойства с ключом-символом нет среди перечисленных)
// хотя прямой доступ по символу работает
console.log("Напрямую: " + user[id]);
console.log(Object.assign({}, dog)) // {name: 'Miley', age: 0.4, Symbol(id): 1}

// Global symbols (Symbol.for(key)) /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");

// проверяем - это один и тот же символ
alert(id === idAgain); // true

// Symbol.keyFor (return symbol name) /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by property
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

// Return symbol name (global, local) /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); // name, глобальный символ
console.log(Symbol.keyFor(localSymbol)); // undefined для неглобального символа

console.log(localSymbol.description); // name