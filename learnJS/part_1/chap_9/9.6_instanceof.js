"use strict";

// object instanceof constructor. Проверяет принадлежит ли объект к какому-то определенному классу
class Pets {}
let pet = new Pets();

console.log(pet instanceof Pets); // true
console.log(Pets instanceof Object); // true

// with function constructor
function constructorFunction() {}
console.log(new constructorFunction() instanceof constructorFunction); // true

// arr & obj
const arr = [1, 2, 3, 4, 5];
const obj = { a: 1, b: 2, c: 3 };
console.log(arr instanceof Array); // true
console.log(obj instanceof Object); // true

// можем изменить поведение instanceof
class arrArrArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([1, 2, 3] instanceof arrArrArray); // true

// method prototypeObj.isPrototypeOf(obj) | проверяет, входит ли объект в цепочку прототипов другого объекта.
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

let myFather = new Person("Vitaly", "Sml", 57, "brown");
console.log(Person.prototype.isPrototypeOf(myFather)); // true
console.log(Person.prototype.toString.call(myFather)); // [object Object]

// Symbol.toStringTag === typeof на стероидах (настройка метода объектов toString)
const assHole = {
  [Symbol.toStringTag]: "Zopa",
};

console.log({}.toString.call(assHole)); // [object Zopa]
console.log(window[Symbol.toStringTag]); // Window (в бразуере)

// fun
console.log(Function instanceof Object); // true | Object.prototype на вершине всех прототипов
console.log(Object instanceof Function); // true | Object это функция-конструктор с прототипом Function.prototype
