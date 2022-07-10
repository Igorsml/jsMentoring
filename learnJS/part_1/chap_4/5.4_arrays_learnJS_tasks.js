'use strict'

// Task 1 — Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log(fruits.length); // 4 
console.log(fruits); // ["Яблоки", "Груша", "Апельсин", "Банан"]; , push() суёт в конец 
// Обе переменные shoppingCart и fruits являются ссылками на один и тот же массив.

/* Task 2 — 
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/
let styles = ['Jazz', 'Blues']
styles.push('Rock\'n Roll'); 
console.log(styles); // [ 'Jazz', 'Blues', "Rock'n Roll" ]

styles.splice(1, 1, 'Classic')
console.log(styles); // [ 'Jazz', 'Classic', "Rock'n Roll" ]

styles.shift()
console.log(styles); // [ 'Classic', "Rock'n Roll" ]

styles.unshift('Rap', 'Reggie');
console.log(styles); // [ 'Rap', 'Reggie', 'Classic', "Rock'n Roll" ]

// Task 3 — Каков результат? Почему?
let arr = ["a", "b"];

arr.push(function() {
  console.log(this);
});

arr[2](); // [ 'a', 'b', [Function (anonymous)] ], arr[2] - вызов функции как метод объекта arr

/* Task 4 — Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInpit() {
  let number = prompt('Enter your number', '')
  let result = [];

  do {
  result.push(number)
} while (typeof(number) != 'string' && number != '');


  let sum = 0;

  result.forEach(arg => {
    sum += arg;
  })
  return sum;
}

sumInpit() //

// Task 5 — 
