"use strict";

function incrementString(strng) {
  const arrOfDigits = Array.from(strng, Number);
  const arrOfStrings = Array.from(arrOfDigitsstrng, String);
  console.log(arrOfDigits);
  console.log(arrOfStrings);
  let result = [];

  for (let i = 0; i < arrOfDigits.length; i++) {
    if (arrOfDigits[i] === NaN) {
      result.push(arrOfDigits.splice(i, 1));
    } else if (arrOfDigits[i] !== NaN) {
      result.push(arrOfDigits[i] + 1);
    }
    return arrOfStrings + result.join("");
  }
}

incrementString("foobar000"); // "foobar001"
incrementString("foo"); // "foo1"
incrementString("foobar001"); // "foobar002"
incrementString("foobar99"); // "foobar100"
incrementString("foobar099"); // "foobar100"
incrementString(""); // "1"

/*
function incrementString(strng) {
  let strSplited = strng.split("");
  let strToNumber = +(strSplited.length[-1]);
  console.log(strSplited);
  console.log(strToNumber)
  let result = '';

  if (strToNumber === Number) {
    result += (strSplited.join('') + 1)
  } else if (strToNumber === String) {
    result += (strSplited.join('').splice(strSplited.length - 1, 1, 1))
  } 
  return result;
}
*/
