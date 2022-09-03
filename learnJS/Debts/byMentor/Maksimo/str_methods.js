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
