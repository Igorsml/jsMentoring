// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  let arr = String(value).split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]) ** arr.length;
  }

  return sum === value ? true : false;
}

// clever
function narcissistic(value) {
  return (
    value
      .toString()
      .split("")
      .map((x, i, arr) => x ** arr.length)
      .reduce((a, b) => +a + +b) === value
  );
}
