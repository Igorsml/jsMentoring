"use strict";
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
  const strArr = s.split("");
  let result = [];

  strArr.map((elem, i) => {
    if (elem === "#") {
      result.push(strArr.splice(i - 1, 1));
    }
  });
  return result.join("");
}

console.log(cleanString("abc#d##c")); // 'ac'
