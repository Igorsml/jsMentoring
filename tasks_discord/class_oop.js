"use strict";
const log = console.log;
// 1. Почему одни и те же имена свойств, но не ругается интерпретатор?
// data как свойство инстанса и статическое свойство класса разные

// 2. Что такое геттеры и есть ли тут они? Что такое методы и есть ли тут они?
// Геттеры это свойства аксессоры (записи и выдачи)
// 3. Что такое класс и экземпляр класса?
// Класс это сахар над функцией конструктором, дискрипторами свойств. Экземпляр класса это инстанс, новый создаваемый объект

class Item {
  // 4. Куда записывается каждое свойство?
  data = 10; // свойство инстанса
  get() {} //  метод прототипа Item.prototype
  get name2() {
    return "Igor";
  } // метод прототипа Item.prototype

  static data = 20; // статическое свойство класса Item
  static get() {} // статический метод класса Item
}

// 5. Что выведется в результате выполнения for? Почему?
for (const key in Item) {
  log(key); // static data
}
for (const key in new Item()) {
  log(key); // data инстанса
}

const item = new Item(); // экземпляр класса
// 5. Что выведется в результате выполнения spread? Почему?
log({ ...item }); // { data: 10 }
log({ ...Item }); // { data: 20 }
console.log(Item.hasOwnProperty("name2")); //

console.log("new Item", Object.getOwnPropertyDescriptors(Item.prototype)); //
