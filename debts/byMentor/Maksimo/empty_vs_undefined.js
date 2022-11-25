// разница между empty и undefined значениями в массиве
// Array(10) не заполняет массив. Он просто устанавливает свойство length в 10.
// Разреженный массив (a sparse array) медленнее и затратнее по памяти чем обычный без дыр

console.log(Array(3)); // [ <3 empty items> ]
let newArr = [];
newArr[2] = 5;

console.log(newArr); // [ <2 empty items>, 5 ]
newArr.map((elem) => elem * 2); // [ <2 empty items>, 10 ]

// undefined
let newArr = [undefined, undefined, 3];
let result = newArr.map((elem) => elem * 2);
console.log(result); // [ NaN, NaN, 6 ]
// https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/ch07s03.html

console.log(Array.from({ length: 3 })); // [ undefined, undefined, undefined ]
// the same as
let arr = {
  0: undefined,
  1: undefined,
  // 2 doesnt exist at all
  3: 3,
  length: 5,
};

console.log(arr); // { '0': undefined, '1': undefined, '3': 3, length: 5 }
console.log(arr[2]); // undefined, 2 не существует, но слот занят
console.log(arr[3]); // 3
console.log(1 in arr); // true
console.log(2 in arr); // false

// https://stackoverflow.com/questions/51936008/difference-between-empty-and-undefined-in-javascript
