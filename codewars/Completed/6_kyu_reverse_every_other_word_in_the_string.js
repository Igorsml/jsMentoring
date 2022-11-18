"use strict";
// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

function reverse(str) {
  return str
    .split(" ")
    .map((word, i) => {
      return i % 2 !== 0 ? word.split("").reverse().join("") : word;
    })
    .join(" ")
    .trim("");
}

console.log(reverse("Reverse this string, please!")); //
