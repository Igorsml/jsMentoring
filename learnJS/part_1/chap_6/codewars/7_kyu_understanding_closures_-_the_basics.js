//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a

function buildFun(n) {
  let res = [];
  let sumOfArr = 0;

  for (let i = 0; i < n; i++) {
    res.push(() => i);
  }
  return res;
}
