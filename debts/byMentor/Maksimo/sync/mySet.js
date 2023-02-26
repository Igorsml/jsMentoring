class MySet {
  constructor(iterableValue, size = 0) {
    if (iterableValue === null) return;
    this._Set = {};

    for (const value in iterableValue) {
      if (value in this._Set) {
        continue;
      } else {
        this._Set[value] = value;
      }
    }

    this.size = Object.keys(this).length;
  }

  add(value) {
    if (value === null) return;

    const result = Array.from(arguments)
      .map((value) => value)
      .filter((value, index, self) => self.indexOf(value) === index);

    return { ...this, ...result };
  }

  has() {
    for (const arg of arguments) {
      return Object.values(this._Set).indexOf(arg) > -1 ? true : false;
    }
  }

  delete() {
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

  clear() {
    for (const element of this._Set) {
      delete this._Set[element];
      this.size = 0;
    }

    return undefined;
  }
}

let set = new MySet([1, 2, 1, 1]);

// Cat cross-check:
// #1 доступ к свойствам из класса Set() за пределами класса. Нарушение принципа инкапсуляции.
// console.log(set.iterableValue); // undefined
// console.log(set.length); // undefined
// console.log(set); // MySet { _Set: { '0': 0, '1': 1 } }
// console.log(set.size); // 2

// #2
// console.log("clear:", set.clear()); // undefined
// console.log(set.size); // 0

// #3
let setEmpty = new MySet();
console.log("test null:", setEmpty.add(null)); // undefined
console.log("test add:", setEmpty.add(1, 1, 2));
console.log(setEmpty.size); // 1

// end cross-check

// console.log(set.add(2, 3));
// console.log(set); // MySet { obj: { '0': 0, '1': 1, '2': 2, '3': 3 }, length: 4 }

// console.log(set.has(2)); // true
// console.log(set.has(4)); // false

// console.log(set.delete(3)); // true
// console.log(set); // true, MySet { obj: { '0': 0, '1': 1, '2': 2 }, length: 3 }

// console.log(set.size); // 3
