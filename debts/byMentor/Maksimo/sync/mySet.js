class MySet {
  constructor(...obj) {
    this.mySet = Object.entries(obj);
  }

  add() {
    for (let arg of arguments) {
      if (arg === null) continue;

      this.mySet[arg] = arguments[arg];
    }
  }

  has() {
    //
  }

  delete() {
    //
  }
}

let set = new MySet([1, 2]);

console.log(set.add(3, 4, 5)); //
console.log(set);
// console.log(set.has(3)); //
// console.log(set.delete(1)); //
// console.log(set.size);
