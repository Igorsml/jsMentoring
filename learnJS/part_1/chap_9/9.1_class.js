"use strict";
// Class — это разновидность функции
class myFirstClass {
  constructor(name) {
    this.name = name;
  } // методы не разделяются запятой в классе

  sayHi() {
    console.log(`Hi, ${this.name}!`);
  }
}

const user = new myFirstClass("Igor");
user.sayHi(); // Hi, Igor!
console.log(typeof myFirstClass); // function
myFirstClass(); // TypeError: Class constructor myFirstClass cannot be invoked without 'new'
console.log(myFirstClass === myFirstClass.prototype.constructor); // true | это метод constructor
console.log(Object.getOwnPropertyNames(myFirstClass.prototype)); // [ 'constructor', 'sayHi' ]
console.log(Object.getOwnPropertyDescriptors(myFirstClass)); // )); // writable: false, enumerable: false,configurable: true

class User {
  constructor(name) {
    this.name = name;
  } // без конструктора и просто "this.name = name" не работает

  sayHi() {
    console.log(this.name);
  }
}

// Использование:
let user = new User("Igor");
user.sayHi();

// можем записать в класс (Names Class Extension)
const Pet = class petClass {
  makePee() {
    console.log(petClass);
  }
};

new Pet().makePee(); // [class petClass]
console.log(petClass); // ReferenceError: petClass is not defined

// в классы можно совать get / set
class Person {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    value.length < 4
      ? console.log("Name is too short")
      : console.log("Beatiful name!");
    this._name = value;
  }
}

const user = new Person("Igor");
console.log(user.name); // 'Beatiful name!' 'Igor'
const user2 = new Person("Abs"); // 'Name is too short'
