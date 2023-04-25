function getHappyNumber(num) {
  let obj = {};
  let resultArr = [];
  const arr = String(num).split("");

  arr.forEach((elem) => (obj[elem] = (obj[elem] || 0) + 1));

  for (const key in obj) {
    if (key === String(obj[key])) {
      resultArr.push(key);
    }
  }

  return resultArr.sort((a, b) => a - b).at(-1);
}

const num = 155555488444;

console.log(getHappyNumber(num));

// second variant
const happyNumbers = (num) => {
  const numStrArr = String(num).split("").sort();
  let count = 0;
  let elem;

  new Set(numStrArr).forEach((elem) => {
    const qty = numStrArr.lastIndexOf(elem) - numStrArr.indexOf(elem) + 1;
    count < qty && ([count, elem] = [qty, elem]);
  });

  return elem;
};

const num2 = 155555488444;

console.log(getHappyNumber(num2));
