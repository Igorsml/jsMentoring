import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  timer = 60;
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  get total() {
    return `Count: ${this.timer + this.count}`;
  }
}

const counter = new Counter();
export default counter;
