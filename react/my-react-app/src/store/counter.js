import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  timer = 60;
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
    console.log("this.count:", this.count);
  }

  decrement() {
    this.count -= 1;
    console.log("this.count:", this.count);
  }

  get total() {
    return `Count: ${this.timer + this.count}`;
  }
}

export default new Counter();
