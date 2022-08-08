// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x) {
  return x.reduce(function (currentSum, currentNumber) {
    return currentSum + Number(currentNumber);
  }, 0);
}

sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]); // 41

// CW solution
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
