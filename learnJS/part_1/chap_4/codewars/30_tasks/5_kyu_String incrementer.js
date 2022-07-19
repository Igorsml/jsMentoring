// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
"use strict";

function incrementString(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number.isNaN(Number(str[i])) ? 0 : str[i];
  }
  return sum;
}

incrementString("foobar000"); // "foobar001"
incrementString("foo"); // "foo1"
incrementString("foobar001"); // "foobar002"
incrementString("foobar99"); // "foobar100"
incrementString("foobar099"); // "foobar100"
incrementString(""); // "1"

/*
#1
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

#2
function incrementString(strng) {
  const arrOfDigits = Array.from(strng, Number);
  console.log(arrOfDigits);
  const arrOfStrings = Array.from(strng, String);
  console.log(arrOfStrings);
  let result = [];
  
  for (let i = 0; i < arrOfDigits.length; i++) {
    if (arrOfDigits[i] === NaN) {
      result.push(arrOfDigits[i]);
      result.splice(arrOfDigits.length - 1, 1);
    } else if (arrOfDigits[i] !== NaN) {
      result.push(arrOfDigits[i] + 1);
    }
    return arrOfStrings.join("") + result.join("");
  }
}

*/
