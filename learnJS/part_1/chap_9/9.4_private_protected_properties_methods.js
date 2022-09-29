"use strict";

class CoffeeMachine {
  _waterAmount = 0; // water amount inside

  set waterAmount(value) {
    if (value < 0) throw new Error("Water amount must be greater than zero");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this_waterAmount;
  }

  constructor(power) {
    this.power = power;
    console.log(`CoffeeMachine was created with power ${this.power}`);
  }

  get power() {
    return this._power;
  }
}

// create coffeeMachine
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;
coffeeMachine.waterAmount = -10; // Error: Water amount must be greater than zero
coffeeMachine.power = 42; // TypeError: Cannot set property power of #<CoffeeMachine> which has only a getter

// private properties
class CoffeeMachine {
  _waterAmount = 0; // water amount inside

  #waterLimit = 200; // private property

  get waterLimit() {
    return this.waterLimit;
  }

  set waterLimit(value) {
    if (value < 0) throw new Error("Water limit must be greater than zero");
    this.#waterLimit = value;
  }

  #checkWater(value) {
    if (value < 0) throw new Error("Negative water level");
    if (value > this.#waterLimit) throw new Error("Water level exceeded");
  }
}

// create coffeeMachine
let coffeeMachine = new CoffeeMachine();

coffeeMachine.waterLimit = 100;
console.log(coffeeMachine.#waterLimit); // SyntaxError: Private field '#waterLimit' must be declared in an enclosing class
coffeeMachine.#checkWater(); // SyntaxError: Private field '#checkWater' must be declared in an enclosing class
coffeeMachine.#waterLimit = 1000; // SyntaxError: Private field '#waterLimit' must be declared in an enclosing class
