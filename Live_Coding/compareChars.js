function countChars(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if ([str[i]] in obj) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  let firstValue = str[1];
  console.log(obj);

  let counter = 0;

  let result;

  for (let key in obj) {
    if (obj[firstValue] !== obj[key]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}

console.log(countChars("abc")); // false
console.log(countChars("abcc")); // false
