"use strict";

class myFirstClass {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, ${this.name}!`);
  }
}

const user = new myFirstClass("Igor");
user.sayHi(); // Hi, Igor!
console.log(typeof myFirstClass); // function
console.log(myFirstClass === myFirstClass.prototype.constructor); // true | это метод constructor
console.log(Object.getOwnPropertyNames(myFirstClass.prototype)); // [ 'constructor', 'sayHi' ]
