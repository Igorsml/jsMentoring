function sortArray(arr) {
  const odds = arr.filter((item) => item % 2).sort((a, b) => a - b);
  return arr.map((item) => (item % 2 ? odds.shift() : item));
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
