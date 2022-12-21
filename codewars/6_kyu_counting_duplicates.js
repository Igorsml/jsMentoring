// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  let count = 0;

  if (text.length === 0) return 0;
  const strLowerCase = text.split("").map((elem) => {
    if (typeof elem === "string") {
      return elem.toLowerCase();
    } else {
      return elem;
    }
  });

  strLowerCase.forEach((elem) => (count = +strLowerCase.indexOf(elem)));

  return count;
}

console.log(duplicateCount("aA11")); // 2
console.log(duplicateCount("Indivisibilities")); // 6
