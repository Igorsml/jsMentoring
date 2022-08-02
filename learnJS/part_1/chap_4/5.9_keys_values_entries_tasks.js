"use strict";

/* Task # 1
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат 
с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
*/

// for...of
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sumOfSalaries = 0;
  for (const value of Object.values(salaries)) {
    sumOfSalaries += value;
  }
  return sumOfSalaries;
}

console.log(sumSalaries(salaries)); // 650

// reduce
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  const values = Object.values(salaries);
  const sum = values.reduce((acc, value) => {
    return acc + value;
  }, 0);
  return sum;
}

console.log(sumSalaries(salaries)); // 650

/* Task # 2
Напишите функцию count(obj), которая возвращает количество свойств объекта:
Постарайтесь сделать код как можно короче.
P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/
let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2
