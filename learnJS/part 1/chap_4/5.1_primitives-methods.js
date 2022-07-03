'use strict'

const number = 42.2;
const str = 'Igor';
const bln = true;
const whoosThere;

console.log(number.toUpperCase()); //TypeError: number.toUpperCase is not a function
console.log(Math.round(number)); // 2
console.log(str.toUpperCase()); // IGOR
console.log(bln.toUpperCase()); // TypeError: bln.toUpperCase is not a function
console.log(whoosThere.toUpperCase); // Cannot read properties of undefined

// learn JS task
let strHello = "Hello";
strHello.test = 5;
alert(strHello.test); // str не объект, все примитивы неизменяемы (immutable) TypeError: Cannot create property 'test' on string 'Hello'.  
// Без строгого режима, операция продолжается, объект получает свойство test, но после этого он удаляется, так что на последней линии str больше не имеет свойства test.

// primitive to obj
let strBye = "Goodbye";
let newObj = {...strBye}
newObj.test = 'Igor';
console.log(newObj); // {0: 'G', 1: 'o', 2: 'o', 3: 'd', 4: 'b', 5: 'y', 6: 'e', test: 'Igor'}