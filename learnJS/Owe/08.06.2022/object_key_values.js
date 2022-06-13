'use strict'

const animals = {
  age: 3,
  sound: 'Meow',
  loveFood: ['fish', 'milk'],
  sort: {
    type: 'cat',
  },
  canMeow() {
    console.log(this.sound)
  },
  hasWool: true,
}

console.log(typeof (animals.age)) // number
console.log(typeof (animals.sound)) // string
console.log(typeof (animals.sort)) // object
console.log(typeof (animals.canMeow)) // function
console.log(typeof (animals.loveFood)) //object
console.log(typeof (animals.hasWool)) // boolean

//type of key
const animals = {
  // []: 3, // expression expected
  let: 1,
  true: false,
  'sound': 'Meow',
  loveFood: ['fish', 'milk'],
  canMeow() {
    console.log(this.sound)
  },
  hasWool: true,
}

console.log(typeof (animals. [])) // expression expected
console.log(typeof (animals.let)) // number ||reserved word is ok (return, for, const etc.)
console.log(typeof (animals.true)) // boolean
console.log(typeof (animals.sound)) // string
console.log(typeof (animals.loveFood)) // object
console.log(typeof (animals.hasWool)) // boolean

//Имена свойств (иногда их называют ключи) могут быть либо строками, либо символами.
// Если использовать в качестве ключа другой тип данных, то он будет приведён к строке с помощью вызова метода toString

const obj = {}
const key = {}
obj[key] = 'value for the object key'

console.log(obj)
// obj.toString() → { "[object Object]": "value for the object key" } 


const obj = {
  num: '1',
  valueOf() {
    return this.num;
  },
};

console.log('num:', typeof (obj.num)); // number
console.log('obj:', obj); // obj

//все, что вы используете для ключа, преобразуется в строку из-за функции хеширования, которая хэширует строки до почти уникального короткого набора байтов, который может быть интерпретирован как целое число, потому что целочисленное сравнение во время линейного поиска является низким и быстрым. (Объекты JavaScript - это хэш-таблицы). Вы используете объекты и массивы для использования в качестве ключа. Ключи могут быть неограниченными по размеру. 