"use strict";

// Always throws a syntax error
const logParams = (first, second, first) => {
  console.log(first, second);
};
logParams(); // SyntaxError: Duplicate parameter name not allowed in this context

function logParams(first, second, first) {
  console.log(first, second);
}
logParams(); // undefined

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// Still, this hiding makes little sense and is probably undesirable (it might hide a typo, for example), so in strict mode duplicate argument names are a syntax error:
