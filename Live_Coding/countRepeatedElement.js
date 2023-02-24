// Задание 2. Напишите функцию, которая находит наиболее частый элемент в заданном массиве,
// на вывод массив из данного элемента и кол-во повторений.
function mostFrequent(arr) {
  let count = 0;

  const obj = { ...arr };

  for (const value of Object.values(obj)) {
    if (obj.hasOwnProperty(value)) {
      count += 1;
    }
    console.log(obj);
  }
}

console.log(mostFrequent([3, "c", "c", "c", 2, 3, "c", 3, "c", 2, 4, 9, 3])); // c встречается 5 раз
