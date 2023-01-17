Array.prototype.myPush = function (value) {
  let arr = this;

  for (let i = 0; i < arguments.length; i++) {
    arr = [...arr, arguments[i]];
  }

  return arr.length;
};

const array = [1, 2, 3];
const length = array.myPush("end");

console.log("length:", length); // 4
console.log("array:", array); // [1, 2, 3, 'end'];
