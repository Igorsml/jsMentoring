// Задача 1: Напишите функцию, которая сглаживает многомерный массив до одномерного.
function getFlatArr(arr) {
  if (arr.length === 0) return;
  const resultArr = [];

  arr.forEach((elem) => {
    Array.isArray(elem)
      ? resultArr.push(...getFlatArr(elem))
      : resultArr.push(elem);
  });

  return resultArr;
}

// Тесты:
const multiDimensionalArray = [1, [2, [3, 4], 5], [6, 7]];
console.log(getFlatArr(multiDimensionalArray)); //[1, 2, 3, 4, 5, 6, 7]

// Задача 2: Напишите функцию countWords(text), которая подсчитывает количество повторяющихся слов в заданном тексте и возвращает объект, в котором ключами являются повторяющиеся слова, а значениями — количество их повторений.

// Функция должна исключать слова, которые встречаются в тексте только один раз.
// Обратите внимание, что в данной задаче слова регистронезависимы (то есть "The" и "the" считаются одним словом) и слова могут содержать знаки препинания (например, "dog." и "dog" считаются одним словом).

function countWords(text) {
  if (text.length === 0) {
  }

  const arrOfWords = text
    .toLowerCase()
    .replace(/[^A-Za-z ]/g, ``)
    .trim()
    .split(" ");
  const result = {};

  for (const word of arrOfWords) {
    word in result ? (result[word] += 1) : (result[word] = 1);
  }

  for (const word in result) {
    if (result[word] === 1) delete result[word];
  }

  return result;
}

// Тесты:
const text =
  "The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.";
console.log(countWords(text)); //{the: 4, fox: 2, dog: 2}
