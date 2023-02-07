class MySet {
  constructor(obj) {
    this.obj = { ...obj };
    this.length = obj.length;
  }

  add() {
    Array.from(arguments).forEach((elem, i) => {
      if (elem === null) return;

      this.obj[arguments.length + i] = elem;
      this.length++;
    });
  }

  has() {
    for (const arg of arguments) {
      return Object.values(this.obj).indexOf(arg) > -1 ? true : false;
    }
  }

  delete() {
    for (const arg of arguments) {
      if (Object.values(this.obj).indexOf(arg) > -1) {
        delete this.obj[arg];
        this.length--;
        return true;
      } else {
        return false;
      }
    }
  }

  size() {
    return this.length;
  }
}

let set = new MySet([0, 1]);

console.log(set.add(null));
console.log(set); // MySet { obj: { '0': 0, '1': 1 }, length: 2 }

console.log(set.add(2, 3));
console.log(set); // MySet { obj: { '0': 0, '1': 1, '2': 2, '3': 3 }, length: 4 }

console.log(set.has(2)); // true
console.log(set.has(4)); // false

console.log(set.delete(3)); // true
console.log(set); // true, MySet { obj: { '0': 0, '1': 1, '2': 2 }, length: 3 }

console.log(set.size()); // 3
