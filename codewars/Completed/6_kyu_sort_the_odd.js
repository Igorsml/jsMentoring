// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(arr) {
  const odds = arr.filter((item) => item % 2).sort((a, b) => a - b);
  return arr.map((item) => (item % 2 ? odds.shift() : item));
}
