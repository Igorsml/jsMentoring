// // 1 argument
// Array.prototype.myPush = function (value) {
//   let arr = this;
//   arr[arr.length] = value;

//   return arr.length;
// };

// const array = [1, 2, 3];
// const length = array.myPush("end", "end2", "end3");

// console.log("length:", length); // 4
// console.log("array:", array); // [1, 2, 3, 'end'];

// 2 and more arguments
// Array.prototype.myPush = function (value, ...rest) {
//   let arr = this;

//   for (let i = 0; i < arguments.length; i++) {
//     arr[arr.length] = arguments[i];
//   }

//   return arr.length;
// };

// const array = [1, 2, 3];
// const length = array.myPush("end", "end2", "end3");

// console.log("length:", length); // 6
// console.log("array:", array); // [ 1, 2, 3, 'end', 'end2', 'end3' ];

// myReverse
Array.prototype.myReverse = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    this[this.length] = this[i];
  }

  for (let i = 0; i < this.length; i++) {
    this.length = this.length - 1;
  }

  return this;
};

const arr = ["a", 1, undefined, true, null];
console.log(arr.myReverse()); // [ null, true, undefined, 1, 'a']

// myForEach
// Array.prototype.forEach = function (function callback(value, index, array) {
//   //
// };

// const arr = [1, 2, 3];
// console.log(arr.forEach((element) => element * 2));
