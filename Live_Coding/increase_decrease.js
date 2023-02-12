// Задание 1. Является ли массив чисел монотонной последовательностью
console.clear();

function aboba(arr) {
  let increase = 0;
  let decrease = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      decrease += 1;
    } else if (arr[i] < arr[i + 1]) {
      increase += 1;
    }
  }

  console.log("increase:", increase);
  console.log("decrease:", decrease);
  console.log("arr length:", arr.length);

  if (increase !== 0 && decrease !== 0) {
    return false;
  } else if (increase > decrease || decrease > increase) {
    return true;
  } else {
    return true;
  }
}

console.log(aboba([22, 11, 3, 1])); // true
console.log(aboba([1, 2, 3])); // true
console.log(aboba([15, 10, 15])); // false
console.log(aboba([22, 11, 3, 1, 2, 3])); // false
