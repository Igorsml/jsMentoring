class MySet {
  constructor(iterableValue, size = 0) {
    if (iterableValue === null) return;
    this.obj = {};

    for (const value of iterableValue) {
      if (value in this.obj) continue;
      this.obj[value] = value;
    }

    this.size = Object.keys(this.obj).length;
  }

  static add(value) {
    if (value === null) return;
    this._Set = value;
    this.size++;
  }

  static has() {
    for (const arg of arguments) {
      return Object.values(this._Set).indexOf(arg) > -1 ? true : false;
    }
  }

  static delete() {
    for (const arg of arguments) {
      if (Object.values(this._Set).indexOf(arg) > -1) {
        delete this._Set[arg];
        this._Set.size--;
        return true;
      } else {
        return false;
      }
    }
  }

  static clear() {
    for (const element in this._Set) {
      delete this._Set[element];
      this.size = 0;
    }

    return undefined;
  }
}

let set = new MySet([1, 2, 1]);

// Cat cross-check:
// #1 доступ к свойствам из класса Set() за пределами класса. Нарушение принципа инкапсуляции.
console.log(set.iterableValue); // undefined
console.log(set.length); // undefined
console.log(set); // MySet { _Set: { '0': 0, '1': 1 } }
console.log(set.size); // 2

// #2
// console.log("clear:", set.clear()); // undefined
// console.log(set.size); // 0

// #3
// let setEmpty = new MySet();
// console.log(setEmpty.add(null));
// console.log(setEmpty.add(1));
// console.log(setEmpty.size); // 1
// console.log(setEmpty); // MySet { _Set: 1, size: 1 }
// end cross-check

// console.log(set.add(2, 3));
// console.log(set); // MySet { obj: { '0': 0, '1': 1, '2': 2, '3': 3 }, length: 4 }

// console.log(set.has(2)); // true
// console.log(set.has(4)); // false

// console.log(set.delete(3)); // true
// console.log(set); // true, MySet { obj: { '0': 0, '1': 1, '2': 2 }, length: 3 }

// console.log(set.size); // 3
