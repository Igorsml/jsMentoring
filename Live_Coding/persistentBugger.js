function persistence(num) {
  const arrOfNum = String(num).split("");

  if (arrOfNum.length === 1) {
    return 0;
  } else {
    num = arrOfNum.reduce((a, b) => a * b);
    return persistence(num) + 1;
  }
}

console.log(persistence(3178437)); // 2
console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
