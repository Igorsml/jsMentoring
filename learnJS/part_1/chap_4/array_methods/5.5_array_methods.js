'use strict'

const { CHAR_LEFT_PARENTHESES } = require("picomatch/lib/constants");

// arr.splice(index[, deleteCount, elem1, ..., elemN])
const arr = ['I', 'want', 'to be a', 'Frontend developer']
arr.splice(1, 2, 'am a');
console.log(arr.join(' ')); // 'I am a Frontend developer'

// splice возвращает массив из удалённых элементов
const deleteElements = ['Please', 'don\'t delete me'];
const removed = deleteElements.splice(0, 1)
console.log(removed); // [ 'Please' ]
console.log(deleteElements); // [ "don't delete me" ]

// splice with negative number
let count = [1, 2, 5,,];
count.splice(-1, 0, 3, 4,);
console.log(count); // [ 1, 2, 3, 4, 5 ]


// slice(start, end), end не включёая | return new array,
const charArr = ['f', 'u', 'n', 'n', 'y'];
console.log(charArr.slice(1, 3)); // [ 'u', 'n' ]
console.log(charArr.slice(-3)); // [ 'n', 'n', 'y' ]

// copy with slice, на случай если не хотим менять исходный
const oldArr = [42, 69, 8,];
const newArr = oldArr.slice();
console.log(newArr); // [ 42, 69, 8 ]

// concat
const num = 42;
const str = 'hobby'
const wantToConcat = ['jellyfish', {a: 8}];
const arr = [];
console.log(arr.concat(num, str, wantToConcat)); // [ 42, 'hobby', 'jellyfish', { a: 8 } ]

// concat obj with Symbol.isConcatSpreadable
const arr = [1, 2];
const arrayLike = {
  0: 'что-то',
  1: 'ещё',
  driver: {
    2: 'Igor',
    [Symbol.isConcatSpreadable]: true,
    length: 1
    },
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log(arr.concat(arrayLike)); // [ 1, 2, 'что-то', 'ещё' ], question1

// forEach - fucntion for each elemnt of array
const arr = ['eat', 'study', 'sleep'];

function lovesDoing(item, index, arr) {
  console.log(arr[index] = 'I Love ' + item); 
}

arr.forEach(lovesDoing); // I love eat I love study, I love sleep

// search in arr - indexOf/lastIndexOf и includes. Методы используют ===, находим именно false а не 0.
const arrOther = [1, 0, null, false ];

console.log(arrOther.indexOf(0)); // 1 
console.log(arrOther.lastIndexOf(false)); // 3
console.log(arrOther.includes(null)); // true

/// when NaN
const arrNaN = [NaN]
console.log(arrNaN.indexOf(NaN)); // -1, (должен быть 0, но === проверка на равенство не работает для NaN)
console.log(arrNaN.includes(NaN)); // true, тут ok

// find, findIndex, first true element
const arrayOfNumbers = [5, 12, 8, 130, 44];
const found = arrayOfNumbers.find(element => element > 10);
console.log(found); // 12, -1 если бы не нашолся

const arrayOfStrings = ['5', '12', '8', '130', '44'];
const found1 = arrayOfStrings.findIndex(item => item == '8');
console.log(found1); // 2 

// filter - all true elements
const arrayOfBoolean = [true, false, 1, true];
console.log(arrayOfBoolean.filter(elem => elem == true)); // [true, 1, true]

// Преобразование массива (map, sort, reverse, split, join, reduce/reduceRight, Array.isArray)
// #1_map
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const squares = nums.map(function (num) {
  return num * num;
});

console.log(squares);
// [1, 4, 9, 16, 25, 36, 49, 64, 81]

// array of objects
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const objects = nums1.map(function (num) {
  return {
    field: num,
  }
})

console.log(objects)
// [
//   { field: 1 },
//   { field: 2 },
//   ...
//   { field: 9 }
// ]

// sum of num, index, length
const nums2 = [1, 2, 3];

const transformed = nums.map(function (num, index, arr) {
  return num + index + arr.length;
})

console.log(transformed); // [4, 6, 8]

// Вторым аргументом map() может принимать значение, которое будет передано как контекст выполнения функции-колбэка:
const nums = [1, 2, 3];
const otherData = { delta: 5 };

const transformed = nums.map(function (num) {
  // otherData, this теперь ссылается на объект otherData
  return num + this.delta
}, otherData);

console.log(transformed); // [ 6, 7, 8 ]

// #2_sort (default sort as strings)
const arrayOfNumbers1 = [1, 2, 142];

console.log(arrayOfNumbers1.sort()); // [ 1, 142, 2 ]
console.log(arrayOfNumbers1.sort((a,b) => a - b)); // [ 1, 2, 142 ]
console.log(arrayOfNumbers1.sort((a,b) => b - a)); // [ 142, 2, 1 ]

// #3_reverse 
const dog = ['a', 'b', 'c'];
const copy = dog.reverse(); 


console.log(dog); // [ 'c', 'b', 'a' ]
// link to dog
console.log(copy); // [ 'c', 'b', 'a' ]
/// array with empty
const array = [1, 2, 3];
array[5] = 6;

console.log(array); // [ 1, 2, 3, 2 × empty, 6 ]
array.reverse();
console.log(array); // [6, 2 × empty, 3, 2, 1]

// #4_split(separator, limit), join
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.split(','));  // [ 'The quick brown fox jumps over the lazy dog.' ]
console.log(str.split(''));  /*
[
  'T', 'h', 'e', ' ', 'q', 'u', 'i',
  'c', 'k', ' ', 'b', 'r', 'o', 'w',
  'n', ' ', 'f', 'o', 'x', ' ', 'j',
  'u', 'm', 'p', 's', ' ', 'o', 'v',
  'e', 'r', ' ', 't', 'h', 'e', ' ',
  'l', 'a', 'z', 'y', ' ', 'd', 'o',
  'g', '.'
]
*/ 

// arr.join([separator])

let abobusArr = ['A', 'b', 'o', 'b', 'u', 's'];
console.log(abobusArr.join()); // 'A,b,o,b,u,s'

// #5_reduce/reduceRight

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = nums.reduce(function (currentSum, currentNumber) {
  return currentSum + currentNumber;
}, 0)

console.log(sum); // 36
// 0 - initial, currentSum - accumulator

// without initial value
const emptyArr = [];
console.log(emptyArr.reduce((sum, current) => sum + current)); // TypeError: Reduce of empty array with no initial value

// chek type of array
const whoAmI = [];

console.log(typeof(whoAmI)); // object
console.log(Array.isArray(whoAmI)); // true