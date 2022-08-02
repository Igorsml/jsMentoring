"use strict";

let id = Symbol("id");

let obj = {
  name: "Igor",
  weight: 76,
  [id]: 42,
};
console.log(Object.keys(obj)); //  return arr keys — [ 'name', 'weight' ]
console.log(Object.values(obj)); // return arr values — [ 'Igor', 76 ]
console.log(Object.entries(obj)); // return arr pare key-value[ [ 'name', 'Igor' ], [ 'weight', 76 ] ]

// можем использовать for...of
for (let value of Object.values(obj)) {
  console.log(value); // Igor, 76
}

// Object.keys/values/entriesб for..of и for...in не учитывают символы
for (let value of Object.getOwnPropertySymbols(obj)) {
  console.log(value); // Symbol(id)
}

let obj2 = {
  name: "Igor",
  weight: 76,
};

const arrFromObj = Object.entries(obj2); // [ [ 'name', 'Igor' ], [ 'weight', 76 ] ]
console.log(Object.fromEntries(arrFromObj)); // возвращаем обратно объект из массива { name: 'Igor', weight: 76 }
