// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

const deepCount = (arr = []) => {
  return arr.reduce((acc, val) => {
    return acc + (Array.isArray(val) ? deepCount(val) : 0);
  }, arr.length);
};

deepCount([[[[[[[[[]]]]]]]]]); // 8;

function deepCount(a) {
  let result = 0;

  a.forEach((element) => {
    Array.isArray(element) ? (result += 1) : deepCount(element);
  });

  return result.length;
}

deepCount([[[[[[[[[]]]]]]]]]); // 8;

function deepCount(a) {
  let result = 0;

  for (let i = 0; i <= a.length; i++) {
    if (a[i].some(Array.isArray())) {
      result += 1;
    }
  }
  return result;
}

deepCount([[[[[[[[[]]]]]]]]]); // 8;
