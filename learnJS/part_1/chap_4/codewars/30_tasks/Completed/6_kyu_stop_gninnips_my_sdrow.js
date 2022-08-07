// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
  let splittedArr = string.split(" ");
  console.log(splittedArr);

  for (word of string) {
    if (word.length > 5) {
      [...word].reverse().join("");
    }
    console.log(word.length);
  }
  return word;
}
