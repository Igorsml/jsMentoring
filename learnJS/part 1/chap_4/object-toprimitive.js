'use strict'

const obj1 = {}
const obj2 = {}

console.log(obj1 + obj2) // [object Object][object Object]
console.log(obj1 - obj2) // NaN
console.log('obj1:', obj1) // obg1 {}

// Number
let date1 = new Date(2021 - 6 - 25)
let date2 = new Date(2022 - 6 - 22)


let result = date2 - date1;
console.log(result) // 4

//hints = number, string, default
const obj = {}
console.log(obj); // alert expected String → '[object Object]'

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