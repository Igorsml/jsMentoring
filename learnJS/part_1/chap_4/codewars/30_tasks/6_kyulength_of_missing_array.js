// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript

function getLengthOfMissingArray(arrayOfArrays) {
  let lengthOfArrays = [];
  let result = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays.some(Array.isArray)) {
      lengthOfArrays.push(arrayOfArrays[i].length);
    }
  }

  for (let i = 1; i <= lengthOfArrays.length; i++) {
    if (lengthOfArrays.indexOf(i) == -1) {
      result.push(i);
    }
  }
  result.join("");
  return Number(result);
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]) // 3
); // 3
