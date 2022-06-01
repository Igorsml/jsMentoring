//https://ru.hexlet.io/courses/introduction_to_programming/lessons/string/exercise_unit

//reverse string
const reverse = (str) => {
  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    // Соединяем в обратном порядке
    result = `${result}${str[i]}`;
    // Тоже самое через конкатенацию
    // result = str[i] + result;
    i = i - 1;
  }
  return result;
};