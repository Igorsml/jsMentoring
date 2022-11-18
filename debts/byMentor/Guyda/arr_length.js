"use strict";
// Пустые слоты в массиве
// мы задаем для массива по индексу 9999 значение 5, соответственно предыдущие будут пустыми
let newArr = [];
newArr[9999] = 5;
newArr.weight = 75;

console.log(newArr); // [ <9999 empty items>, 5, weight: 75 ]
console.log(typeof newArr[9999]); // number, 5
console.log(typeof newArr.weight); // number, 75
console.log(typeof newArr[10000]); // undefined, его нет, weight: 75 это проперти массива

// Почему length + 1 | индекс с 0, length с 1. 9998 пустых слотов, последний - 5
console.log(newArr.length); // 10000
