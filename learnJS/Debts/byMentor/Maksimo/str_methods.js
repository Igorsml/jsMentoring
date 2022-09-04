"use strict";

const str = "I want to be a FE 😍 developer";
const strForConcat = " asap";

console.log(str.length); // 30
console.log(str[0]); // 'I' | 1st char
console.log(str.charAt(0)); // 'I' | 1st char
console.log(str.charCodeAt(0)); // 73 | Position in UTF-16
console.log(str.codePointAt(18)); // 128525 | Position in UTF-16
console.log(String.fromCharCode(1120)); // Ѡ
console.log(str.slice(-1)); // 'r' | last char
console.log(str.at(-1)); // 'r' | last char
console.log(str.replace("want to be", "am")); // 'I am a FE 😍 developer'
console.log(str.concat("", strForConcat)); // 'I want to be a FE 😍 developer asap'
console.log(str.endsWith("developer")); // true
console.log(str.includes("want", 1)); // true | 'want' from 1 position
console.log(str.indexOf("developer")); // 21 | developer from 21 position, start searching from start
console.log(str.indexOf("developer, 30")); // -1 | not found |
console.log(str.lastIndexOf("developer")); // 21
console.log(str.localeCompare(strForConcat)); // 1 | str sort after strForConcat
console.log(str.match(/developer/g)); // return arr [ 'developer' ] | null if not found

const matches = [...str.matchAll("want", "g")]; //
for (const match of matches) {
  console.log(match); // 'want', index: 2, input: 'I want to be a FE 😍 developer'
}
console.log("CO₂".normalize("NFKC")); // 'CO2'
console.log(str.padEnd(33, ".")); // 'I want to be a FE 😍 developer...'

// str.padStart(targetLength [, padString])
const card = "2200700439627927";
const lastFourDigits = card.slice(-4);
console.log(lastFourDigits.padStart(card.length, "*")); // ************7927

// String.raw
const name = "Igor";

console.log(String.raw`Hi, \n${name}`); // 'Hi, \nIgor'
console.log(strForConcat.repeat(strForConcat.length)); //  'asap asap asap asap asap'
console.log(strForConcat.replace("asap", "whats up?")); // 'whats up?'
console.log(str.replaceAll("FE", "webcam")); // 'I want to be a webcam 😍 developer'
console.log(str.search("want")); // 2 | new RegExp(regexp)
console.log(str.slice(0, 6)); // 'I want'
console.log(strForConcat.split("")); // [ ' ', 'a', 's', 'a', 'p' ]
console.log(strForConcat.split("a")); // [ ' ', 's', 'p' ]
console.log(str.startsWith("I want")); // true
console.log(str.substring(0, 6)); // 'I want'
console.log("ABOBUS".toLowerCase().toUpperCase()); // 'abobus' → ABOBUS
const arr = [1, "2", 3];
console.log(arr.toString()); // '1,2,3'
console.log(strForConcat.trim()); // 'asap'
