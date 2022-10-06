"use strict";

// mixin — объект или класс с методами для использования в другом классе (без наследования от примеси)

const helpfulMethods = {
  sleep() {
    console.log(`${this.name} zZzZzz`);
  },
  eat() {
    console.log(`${this.name} Omnomnom`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// copy methods
Object.assign(User.prototype, helpfulMethods);

new User("Igor").sleep(); // 'Igor zZzZzz'

// миксины могут наследоваться от других миксинов
const harmfulMethods = Object.create(helpfulMethods);
harmfulMethods.eatJunkFood = function () {
  console.log(`eating junk food`);
};

harmfulMethods.doomscrolling = function () {
  console.log(`scrolling bad news`);
};

console.log(harmfulMethods);
