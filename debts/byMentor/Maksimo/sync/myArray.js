// forEach, push, reverse, join без методов массивов

class MyArray {
  myForEach() {}

  myPush(element) {
    for (let i = 0; i < arguments.length; i++) {
      this.length = arguments.length;
      this.length++;
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

const myArrayMethod = new MyArray();
console.log(MyArray.prototype.myPush);

const array = [1, 2, 3];

Array.prototype.myPush = function (value) {
  for (let i = 0; i < arguments.length; i++) {
    this.length = arguments.length;
    this.length++;
  }
  return this.length;
};
const length = array.myPush("end");

console.log(length); //
console.log(array); //
