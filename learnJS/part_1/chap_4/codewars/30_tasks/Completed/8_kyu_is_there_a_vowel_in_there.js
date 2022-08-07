// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

const { symbols } = require("ansi-colors");

function isVow(arr) {
  const vowels = ["a", "e", "i", "o", "u"].join("");

  const result = arr.map((number) =>
    vowels.includes((charCode = String.fromCharCode(number)))
      ? charCode
      : number
  );
  return result;
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
