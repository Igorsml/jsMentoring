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
    this;
  }
}

const arr = new MyArray();
arr.push(1, 2, 3);

const length = arr.myPush("a", "b", "c");

console.log("length:", length); // 6
console.log("array:", arr); // [1, 2, 3, 'a', "b", "c"];
