import getYear, { num } from "./13.2_import_export.js";
import * as mathematics from "./math.js";

console.log(num); // [1, 2, 42]

console.log(getYear()); // 2023

const square = (x) => {
  return x * x * x;
};

// метод surfaceArea импортированного объекта mathematics
const surfaceOfMars = mathematics.surfaceArea(3390);
console.log(surfaceOfMars); // 144340776

const weirdSquare = square(2017);
console.log(weirdSquare); // 8205738913

console.log(mathematics);
/* 
[Module: null prototype] {
  e: 2.718,
  pi: 3.14,
  square: [Function: square],
  surfaceArea: [Function: surfaceArea]
}
*/
