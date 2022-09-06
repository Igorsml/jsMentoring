// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  const seen = new Set(); // [1, 2]

  const duplicates = arr.filter(
    (number) => seen.size === seen.add(number).size
  ); // [ 1, 1, 1, 1 ]

  const result = arr.filter((item) => !duplicates.includes(item));
  return +result.join("");
}

findUniq([1, 1, 1, 2, 1, 1]); // 2

// CW solution
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
