function countSymbols(string) {
  if (string.length === 0) return {};
  const res = {};

  for (let char of string) {
    if (char in res) {
      res[char] += 1;
    } else {
      res[char] = 1;
    }
  }
  return res;
}

console.log(countSymbols("aba")); // OUTPUT: { a: 2, b: 1 }
console.log(countSymbols("ccddhhf")); // OUTPUT: {c: 2, d: 2, h: 2, f: 1}
console.log(countSymbols("")); // OUTPUT: {}
