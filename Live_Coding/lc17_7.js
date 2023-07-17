/** Задание 1

   * У вас есть массив с оценками студентов за экзамен:
   * let scores = [85, 56, 90, 70, 62, 95, 72, 88, 60, 66, 92];
   *
   * 1.Удалить из массива наивысшую и наименьшую оценку.
   * 2.Вычислить среднюю оценку оставшихся студентов.
   * 3.Создать новый массив, в котором все оценки ниже средней увеличены на 10%.
   *
   */

function getAverageEstimation(arr) {
  const resultArr = [];

  arr.sort((a, b) => a - b);
  arr.shift();
  arr.pop();
  let newArr = arr.reduce((acc, num) => acc + num, 0);
  const averageEstimation = Math.round(newArr / arr.length);

  arr.map((num) => {
    num < averageEstimation
      ? resultArr.push(Math.round(num * 1.1))
      : resultArr.push(num);
  });

  return resultArr;
}

let scores = [85, 56, 90, 70, 62, 95, 72, 88, 60, 66, 92];

console.log(getAverageEstimation(scores)); //

/** Задание 2
 * Вы получили массив объектов,
 * каждый из которых представляет книгу в библиотеке,
 * включая ее название, автора и массив тегов, связанных с книгой.
 *
 * 1.Создать функцию findBooksByTag, которая принимает тег в качестве аргумента и
 * возвращает новый массив названий всех книг, которые содержат этот тег.
 *
 * 2.Создать функцию findTagsByAuthor, которая принимает имя автора в качестве аргумента и
 * возвращает массив всех тегов, связанных с книгами этого автора.
 *
 * 3.Написать функцию findMostProductiveAuthor, которая определяет автора,
 * написавшего наибольшее количество книг в библиотеке
 *
 */

function findBooksByTag(data, bookTag) {
  const resultArr = [];

  data.forEach((book) => {
    if (book.tags.includes(bookTag)) {
      resultArr.push(book.title);
    }
  });

  return resultArr;
}

let library = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    tags: ["Classic", "Coming-of-Age", "Southern US"],
  },
  {
    title: "1984",
    author: "George Orwell",
    tags: ["Dystopia", "Political", "Futuristic"],
  },
  {
    title: "Animal farm",
    author: "George Orwell",
    tags: ["Satire", "Allegorical", "Political"],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    tags: ["Classic", "American Dream", "Tragedy"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    tags: ["Classic", "Whaling", "Obsession"],
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    tags: ["Satire", "Allegorical", "Political"],
  },
];

// Тест для функции findBooksByTag
// console.log(findBooksByTag(library, "Classic")); // Ожидаемый вывод: ['To Kill a Mockingbird', 'The Great Gatsby', 'Moby Dick']
// console.log(findBooksByTag(library, "Political")); // Ожидаемый вывод: ['1984', 'Animal Farm']

// Тест для функции findTagsByAuthor
function findTagsByAuthor(data, author) {
  const resultArr = [];

  data.forEach((book) => {
    if (book.author.includes(author)) {
      resultArr.push(book.tags);
    }
  });

  return resultArr;
}

console.log(findTagsByAuthor(library, "Harper Lee")); // Ожидаемый вывод: ['Classic', 'Coming-of-Age', 'Southern US']
console.log(findTagsByAuthor(library, "George Orwell")); // Ожидаемый вывод: ['Dystopia', 'Political', 'Futuristic', 'Satire', 'Allegorical', 'Political']

// Тест для функции findMostProductiveAuthor

function findMostProductiveAuthor(data) {
  let bestAuthor = "";
  let counts = {};

  data.forEach((elem) => {
    counts[elem.author] = (counts[elem.author] || 0) + 1;
  });

  return (bestAuthor += Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  ));
}

console.log(findMostProductiveAuthor(library)); // Ожидаемый вывод: 'George Orwell'

/** Задание 3
 * Напишите функцию которая возвращает чесло элементов в массиве включая подмассивы.
 *   ALL elements within an array, including any nested arrays.
 *
 *   []                   -->  0
 * [1, 2, 3]            -->  3
 * ["x", "y", ["z"]]    -->  4
 * [1, 2, [3, 4, [5]]]  -->  7
 *
 * function deepCount1(a){
 *
 * }
 */

// console.log(deepCount([])); //0
//   console.log(deepCount([1, 2, 3])); //3
//   console.log(deepCount(["x", "y", ["z"]]));// 4
//   console.log(deepCount([1, 2, [3, 4, [5]]])); //7
//   console.log(deepCount([[[[[[[[[]]]]]]]]]));//8
