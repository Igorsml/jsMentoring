// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(x + x);
  }
  return result;
}

countBy(1, 10);
