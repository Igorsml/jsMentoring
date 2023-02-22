class MySet {
  constructor(obj) {
    this._obj = { ...obj };
    this.size = obj.length;
  }

  add() {
    Array.from(arguments).forEach((elem, i) => {
      if (elem === null) return;

      this._obj[arguments.length + i] = elem;
      this._length++;
    });
  }

  has() {
    for (const arg of arguments) {
      return Object.values(this._obj).indexOf(arg) > -1 ? true : false;
    }
  }

  delete() {
    for (const arg of arguments) {
      if (Object.values(this._obj).indexOf(arg) > -1) {
        delete this._obj[arg];
        this._length--;
        return true;
      } else {
        return false;
      }
    }
  }

  clear() {
    this._obj = null;
    return undefined;
  }
}

let set = new MySet([0, 1]);

// Cat cross-check:
console.log(set.obj); // undefined
console.log(set.size); // 2

// end cross-check

// console.log(set.add(null));
// console.log(set); // MySet { obj: { '0': 0, '1': 1 }, length: 2 }

// console.log(set.add(2, 3));
// console.log(set); // MySet { obj: { '0': 0, '1': 1, '2': 2, '3': 3 }, length: 4 }

// console.log(set.has(2)); // true
// console.log(set.has(4)); // false

// console.log(set.delete(3)); // true
// console.log(set); // true, MySet { obj: { '0': 0, '1': 1, '2': 2 }, length: 3 }

// console.log(set.size); // 3
