"use strict";

function reverse(str) {
  let arrFromStr = str.split(" ");
  let result = [];

  for (let i = 0; i < arrFromStr.length; i += 2) {
    result.push(
      arrFromStr.map((elem, i) => {
        if (i % 2 === 0) {
          elem.split("").reverse().join("");
        }
        elem;
      })
    );
  }
  return result.join(" ");
}

console.log(reverse("Reverse this string, please!")); //
