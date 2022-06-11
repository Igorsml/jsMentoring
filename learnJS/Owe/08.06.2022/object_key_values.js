'use strict'

const obj = {}
const key = {}
obj[key] = 'value for the object key'

console.log(obj)
// obj.toString() → { "[object Object]": "value for the object key" } 
// Если использовать в качестве ключа другой тип данных, то он будет приведён к строке с помощью вызова метода toString