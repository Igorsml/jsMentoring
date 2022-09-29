// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  let splittedArr = str.split(" ");
  const result = splittedArr.map((word) => word.split("").reverse().join(""));
  return result.join(" ");
}

reverseWords("double  spaced  words"); // 'elbuod  decaps  sdrow'

// CW solution
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
