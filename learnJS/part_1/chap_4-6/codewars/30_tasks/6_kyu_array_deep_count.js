// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

const deepCount = (arr = []) => {
  return arr.reduce((acc, val) => {
    return acc + (Array.isArray(val) ? deepCount(val) : 0);
  }, arr.length);
};

deepCount([[[[[[[[[]]]]]]]]]); // 8;

function deepCount(a) {
  let result = [];
  a.forEach(function (element) {
    if (!Array.isArray(element)) {
      result.push(element);
    } else {
      result = result.concat(deepCount(element));
    }
  });
  return result.length;
}

function deepCount(a) {
  let result = 0;

  for (let i = 0; i <= a.length; i++) {
    if (a.some(Array.isArray())) {
      result += 1;
    }
    return result;
  }
}

deepCount([[[[[[[[[]]]]]]]]]); // 8;
