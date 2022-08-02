// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

flattenAndSort([
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
