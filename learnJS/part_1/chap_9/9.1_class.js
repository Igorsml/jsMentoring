"use strict";

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
console.log(myFirstClass === myFirstClass.prototype.constructor); // true | это метод constructor
console.log(Object.getOwnPropertyNames(myFirstClass.prototype)); // [ 'constructor', 'sayHi' ]
console.log(Object.getOwnPropertyDescriptors(myFirstClass)); // )); // writable: false, enumerable: false,configurable: true

class Budget {
  constructor(amount, daysCount) {
    /* ... */
  }

  // Перенесём деление в Бюджет:
  get perDay() {
    return this.amount / this.daysCount;
  }
}

class History {
  records = [];

  addRecord() {
    /* ... */
  }

  // А вычисление потраченного сегодня — в Историю:
  get spentToday() {
    return this.records.reduce((result, record) => {
      return (result += isToday(record.dateTime) ? record.amount : 0);
    }, 0);
  }
}

// Теперь мы можем использовать поля perDay и spentToday
// на объектах, которые передадим в класс DailyAmount:
class DailyAmount {
  constructor() {
    /* ... */
  }

  get valueOf() {
    return this.budget.perDay - this.history.spentToday;
  }
}
