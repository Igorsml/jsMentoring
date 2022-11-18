"use strict";
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      return word.length >= 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
