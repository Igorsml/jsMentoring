// https://www.codewars.com/kata/585a1f0945376c112a00019a/train/javascript

function repeater(string, n) {
  let repeatedStr = string.repeat(n);

  return `"${string}" repeated ${n} times is: "${repeatedStr}"`
}