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

// https://medium.com/swlh/function-with-duplicate-parameters-your-turn-js-ffd42944dfe4
