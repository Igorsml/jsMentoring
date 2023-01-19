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

// join
Array.prototype.myJoin = function (separator) {
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
};

const array = ["a", "b", "c", null, undefined];
console.log(array.myJoin()); // 'a,b,c'
console.log(array.myJoin("")); // 'abc'
console.log(array.myJoin("-")); // 'a-b-c'

const emptyArr = [];
console.log("empty:", emptyArr.myJoin()); // ''

// Does it mutate?
console.log("array:", array); // ["a", "b", "c"]
