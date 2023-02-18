Array.prototype.myMap = myMap;

function myMap(callback) {
  let resultArr = [];

  for (let i = 0; i < this.length; i++) {
    resultArr.push(callback(this[i], i, this));
  }

  return resultArr;
}

let arr = [1, 2, 3, 4];
let result = arr.myMap((element, index, arr) => {
  return element + index;
});
console.log(result);
