function getSum(a, b) {
  debugger;
  if (a == b) {
    return a;
  } else if (a > b) {
    return a + getSum(a - 1, b);
  } else {
    return a + getSum(a + 1, b);
  }
}

console.log(getSum(-1, 2)); //
