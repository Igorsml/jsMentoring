// в статике не можем задавать импорт функции | SyntaxError: Unexpected identifier
// import sum from sum()

// console.log(sum(1, 2, 3));

// в статике не можем задавать условия
// if (puk) {
// import sum from './math';
// An import declaration can only be used at the top level of a module.
// }

{
  // import sum from './math';
  // An import declaration can only be used at the top level of a module.
}

// можем юзать import(modulePath), который вернет промис, результатом которого станет объект модуля с его экспортами
import("./math.js")
  .then((obj) => console.log(obj)) // 6, [Module: null prototype] { sum: [Function: sum] }
  .catch((err) => {});

// асинхронный динамический импорт
const { square } = await import("./math.js");
console.log(square(2, 2)); // 4

// если экспорт по дефолту, то нужно взять свойство
const obj = await import("./math.js");
const { default: pow } = obj;
console.log(pow(10, 2)); // 100

// в динамическоим импорте можно не указывать type='module'
