function wave(str) {
  let result = [];
  let arrOfStr = str.split("");

  for (let i = 0; i < arrOfStr.length; i++) {
    result.push((arrOfStr[i] = arrOfStr[i].toUpperCase()));
    return arrOfStr.join("");
  }
  return result;
}

console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// result.push(str.replace(str[i], str[i].toUpperCase()));
