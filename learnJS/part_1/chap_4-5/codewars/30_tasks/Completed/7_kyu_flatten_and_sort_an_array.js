// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

const { resourceUsage } = require("process");
const { resourceLimits } = require("worker_threads");

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

// # 2
function flattenAndSort(array) {
  function flatten(array) {
    let flattenArray = [];
    array.forEach((element) => {
      flattenArray.push(...element);
    });
    return flattenArray;
  }
  const result = flatten(array);

  return result.sort((a, b) => a - b);
}

console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
