function persistence(num, countTimes = 0) {
  if (num < 9) return 0;
  if (String(num).includes("0")) return 1;
  const arrOfNum = String(num).split("");

  let multiplyNumbers = arrOfNum.reduce((acc, num) => {
    countTimes += 1;
    return acc * num;
  }, 1);

  if (String(multiplyNumbers).includes("0")) return 2;

  if (multiplyNumbers > 10) {
    ++countTimes;
    persistence(multiplyNumbers);
  }

  return countTimes;
}

console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(25)); // 2
console.log(persistence(4923151)); // 2
console.log(persistence(3042254)); // 1
console.log(persistence(3178437)); // 2
// 3178437 → 14112 → 8 = 2
