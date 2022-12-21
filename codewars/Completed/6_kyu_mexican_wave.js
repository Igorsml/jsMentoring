function wave(str) {
  let result = [];
  if (str === "") return [];

  const arrOfStr = str.split("");

  for (let i = 0; i < arrOfStr.length; i++) {
    let copyOfArrOfStr = arrOfStr.concat();

    if (arrOfStr[i] === " ") {
      continue;
    } else {
      copyOfArrOfStr[i] = copyOfArrOfStr[i].toUpperCase();
      result.push(copyOfArrOfStr);
    }
  }

  return result.map((elem) => elem.join(""));
}

console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// result.push(str.replace(str[i], str[i].toUpperCase()));
