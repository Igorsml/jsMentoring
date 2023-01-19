// forEach, push, reverse, join без методов массивов

class MyArray extends Array {
  myForEach() {}

  myPush(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
    }

    return this.length;
  }

  myReverse() {
    //
  }

  myJoin(separator) {
    if (this.length === 0) {
      return "";
    }

    let result = "";

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += "";
      } else if (separator) {
        result += this[i] + separator;
      } else if (separator === "") {
        result += this[i];
      } else {
        result += this[i] + ",";
      }
    }

    if (result.length > this.length) {
      result = result.slice(0, -1);
    }

    return result;
  }
}

const arr = new MyArray();

// test myPush
arr.push(1, 2, 3);

const length = arr.myPush("a", "b", "c");

console.log("length:", length); // 6
console.log("array:", arr); // [1, 2, 3, 'a', "b", "c"];

// test myJoin

const array = ["a", "b", "c", null, undefined];
Object.setPrototypeOf(array, arr);

console.log(array.myJoin()); // 'a,b,c'
console.log(array.myJoin("")); // 'abc'
console.log(array.myJoin("-")); // 'a-b-c'

const emptyArr = [];
Object.setPrototypeOf(emptyArr, arr);
console.log("empty:", emptyArr.myJoin()); // ''

// Does it mutate?
console.log("array:", array); // ["a", "b", "c"]
