function wave(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result.push(str.replace(str[i], str[i].toUpperCase()));
    } else {
      result.push(str.replace(str[i], str[i].toUpperCase()));
    }
  }

  return result;
}

console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
