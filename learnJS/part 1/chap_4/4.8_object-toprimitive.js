'use strict'

const obj1 = {}
const obj2 = {}
let result = obj1 + obj2;
console.log(result) // [object Object][object Object]
console.log(typeof(result)) // string
console.log(obj1 - obj2) // NaN
console.log('obj1:', obj1) // obg1 {}

// Number
let date1 = new Date(2021 - 6 - 25)
let date2 = new Date(2022 - 6 - 22)
let result = date2 - date1;
console.log(result) // 4

//hints = number, string, default
const obj = {}
console.log(obj); // 

let newObj = {}
newObj[obj] = 42;
console.log(typeof (newObj[obj])); // number

let str = '1';
let str2 = '2';
console.log('Number(str):', Number(str)) // 1
console.log('+str:', +str) // 1
console.log('2 - 1:', 2 - str) // 1
console.log('str < str2:', str < str2) // true

// Symbol.toPrimitive

let user = {
  name: "Igor",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

console.log(user); // hint: string -> {name: "Igor"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

let dog = {
  name: 'Miley',
}
console.log(dog); // '[object Object]'
console.log(dog.valueOf()) // object dog

// Symbol.toPrimitive is more safety (return error or primitive)

let obj = {
  // toString обрабатывает все преобразования в случае отсутствия других методов
  toString() {
    return "2";
  }
};

console.log(obj * 2); // 4, объект был преобразован к примитиву "2", затем умножение сделало его числом

let obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ''); // "[object Object]"

// An object with Symbol.toPrimitive property.
let obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint == 'number') {
      return 10;
    }
    if (hint == 'string') {
      return 'hello';
    }
    return true;
  }
};
console.log(+obj2); // 10        -- hint is "number"
console.log(`${obj2}`); // "hello"   -- hint is "string"
console.log(obj2 + ''); // "true"    -- hint is "default"

function Person(name, age) {
  this.name = name,
  this.age = age,

  this[Symbol.toPrimitive] = (hint) => {
    // hint: string, number, default
    if('string' === hint) {
      return this.name;
    }
    if('number' === hint) {
      return this.age;
    }
    return 'default' // базово number
  }
}

const igor = newPerson(name: 'Dave', age: '29');
const timmy = newPerson(name: 'Timmy', age: '8');
console.log(String(igor)) // Igor
console.log(Number(igor)) // 29
console.log(igor - timmy) // 21
console.log(igor + timmy) // 21

// source https://youtu.be/vgB5eNMvXBk

// 1. Простой объект
const obj1 = {}
obj1.valueOf() // {}
obj1.toString() // "[object Object]"

// Чтобы «сложить» число с объектом,
// вначале будет вызван obj1.valueOf().
// Он вернёт объект (непримитив),
// после чего будет вызван obj1.toString().

1 + obj1
// 1 + "[object Object]"
// "1" + "[object Object]"
// "1[object Object]"

// 2. Объект с указанным .valueOf()
const obj2 = {}
obj2.valueOf = () => "obj2"
obj2.valueOf() // "obj2";
obj2.toString() // "[object Object]"

// Теперь, когда мы объявили метод .valueOf(),
// при вызове он будет возвращать строку.
// Так как строка — примитив,
// она и будет использована при «сложении».

1 + obj2
// 1 + "obj2"
// "1" + "obj2"
// "1obj2"

// 2.1. Если же мы будем возвращать число
const obj2 = {}
obj2.valueOf = () => 42
obj2.valueOf() // 42
obj2.toString() // "[object Object]"

1 + obj2
// 1 + 42
// 43
