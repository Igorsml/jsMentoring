"use strict";
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
  const strArr = s.split("");
  let result = [];

  let char = "#";

  if (strArr.includes((elem) => elem === char || char > 1)) {
    strArr.pop(elem);
  }
  return strArr.join("");
}

console.log(cleanString("abc#d##c")); // 'ac'
