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

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }

  return undefined;
};

const arr = [1, 2, 3];

arr.myForEach((num, index, arr) => {
  if (index === 0) {
    num += 1;
  } else if (index === arr.length - 1) {
    num *= 2;
  }
  console.log("num:", num);
  console.log("arr:", arr);
  console.log("index:", index);
  console.log(num); // 2, 2, 6
});
