"use strict";
// Как заюзать Counter?
// https://www.codewars.com/kata/559f8d487fa8511c43000118/train/javascript

function Counter() {
  this.count = 0;

  this.updateCount = () => {
    this.count++;
  };
}

const requestsCounter = new Counter();
requestsCounter.updateCount();
console.log(requestsCounter.count); // 1
requestsCounter.updateCount();
console.log(requestsCounter.count); // 2

// Class version
class Counter {
  constructor() {
    this.count = 0;
  }
  updateCount() {
    return this.count++;
  }
}

const counter1 = new Counter();
counter1.updateCount();
console.log(counter1.count); // 1
