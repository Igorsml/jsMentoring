// разница между empty и undefined значениями в массиве
// Array(10) не заполняет массив. Он просто устанавливает свойство length в 10.
// Таким образом, массив, созданный с помощью конструктора Array, - это просто объект со свойством length, но без заполненных элементов.

console.log(Array(3)); // [ <3 empty items> ]
let newArr = [];
newArr[9999] = 5;

console.log(newArr); // [ <9999 empty items>, 5 ]
newArr.map((elem) => elem * 2);
console.log(newArr); //

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
console.log(Object.getOwnPropertyDescriptor(arr)); //

// https://stackoverflow.com/questions/51936008/difference-between-empty-and-undefined-in-javascript
