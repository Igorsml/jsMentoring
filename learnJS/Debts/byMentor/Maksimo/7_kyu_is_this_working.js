"use strict";
// Как заюзать Counter?
// https://www.codewars.com/kata/559f8d487fa8511c43000118/train/javascript

function Counter() {
  this.count = 0;

  this.updateCount = () => {
    this.count++;
  };
}

var counter = new Counter();
counter.updateCount.call({});
var fn = counter.updateCount;
fn();
