'use strict'


//Почему  TypeError "obj2" is read-only
const obj1 = {
  test: 123,
}
obj1.opa = '456'

const obj2 = Object.assign({}, obj1)
obj2.opa = '789' //  

obj2 = obj1 // same error when obj2 = 10

console.log(obj1 === obj2) // Assignment to constant variable
console.log(obj2.opa) // -||-

//fix with let
const obj1 = {
  test: 123,
}
obj1.opa = '456'

let obj2 = Object.assign({}, obj1)

obj2 = obj1

console.log(obj1 === obj2) // true
console.log(obj2.opa) // 456
//Если константа хранит массив или объект, то сам массив/объект изменять можно! Нельзя заменить один объект на другой. 
// Это происходит из-за того, что константа хранит ссылку на сложное значение, а не само значение.

// try another type 

const obj1 = {
  test: 123,
}
obj1.opa = '456'

let obj2 = Object.assign({}, obj1)

obj2 = 10

console.log(obj1 === obj2) // false
console.log(obj2.opa) // undefined

// test Object.freeze(obj);
const obj1 = {
  test: 123,
}
Object.freeze(obj1);

obj1.opa = '456'
obj1.test = 321 // don't add in obj1

console.log('obj1.opa:', obj1) // {test: 123}