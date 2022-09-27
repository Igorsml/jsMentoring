"use strict";

function randomHappyThreeNumber(result = 0, count = 0) {
  if (result === 3) {
    console.log(`The random result: ${result}`);
    console.log(`How many times random is executed: ${count}`);
    return;
  }
  result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  count += 1;
  randomHappyThreeNumber(result, count);
}

randomHappyThreeNumber();
// The random result: 3
// How many times random is executed: 5

// try to change function name
function randomHappyThreeNumber(result = 0, count = 0) {
  if (result === 3) {
    console.log(`The random result: ${result}`);
    console.log(`How many times random is executed: ${count}`);
    return;
  }
  result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  count += 1;
  randomHappyThreeNumber.name = nullFunctionName;
  randomHappyThreeNumber(result, count);
}

randomHappyThreeNumber(); // ReferenceError: nullFunctionName is not defined
