"usr strict";
// Псевдомассив - объект, структурно похож на массив (есть индексы с 0 и length);
// The main difference between a pseudo-array and an array is its prototype inheritance, that is, a property __proto__.

const pseudoArray = {
  0: "value0",
  1: "value1",
  2: "value2",
  3: "value3",
  length: 4,
};

// основное отличие от массива,
console.log([].__proto__ === Array.prototype); // true
console.log(pseudoArray.__proto__ === Object.prototype); // true

// Из псевдомассива в массив
const beNormalArray = Array.from(pseudoArray);
// const beNormalArray2 = [...pseudoArray]; // но только с NodeList, HTMLCollection и прочее, length не нужен, нужен spread operator

console.log(beNormalArray); // [ 'value0', 'value1', 'value2', 'value3' ]

// замена прототипа для получения методов, но все еще не настоящий массив
pseudoArray.__proto__ = Array.prototype;
pseudoArray.map((elem) => elem.toUpperCase());
console.log("map", pseudoArray);
console.log(Array.isArray(pseudoArray)); // false
