// forEach, push, reverse, join без методов массивов

class MyArray extends Array {
  myForEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }

    return undefined;
  }

  myPush(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
    }

    return this.length;
  }

  // O(n)
  myReverse() {
    let tempArray = [];

    for (let i = this.length - 1; i >= 0; i--) {
      tempArray[tempArray.length] = this[i];
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = tempArray[i];
    }

    return this;
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

// test myReverse
const arrayForReverse = ["a", 1, undefined, true, null];
Object.setPrototypeOf(arrayForReverse, arr);
console.log("myReverse:", arrayForReverse.myReverse()); // [ null, true, undefined, 1, 'a']

// test myForEach
const arrForForeach = [1, 2, 3];
Object.setPrototypeOf(arrForForeach, arr);

arrForForeach.myForEach((num, index, arr) => {
  if (index === 0) {
    num += 1;
  } else if (index === arr.length - 1) {
    num *= 2;
  }
  console.log("num:", num); // 1, 2, 3
  console.log("arr:", arr); // [1, 2, 3]
  console.log("index:", index); // 0, 1, 2
  console.log(num); // 2, 2, 6
});
