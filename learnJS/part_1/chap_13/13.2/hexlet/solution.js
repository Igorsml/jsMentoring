/* 
1. Импортируйте функцию getTriangleArea() из модуля myMathModule.
2. Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. Для реализации этой функции используйте импортированную функцию getTriangleArea() и функцию square() (принимает число и возвращает его квадрат).
Экспортируйте созданную функцию по умолчанию. 
*/

import getTriangleArea, { square } from "./myMathModule.js";

const result = (n) => getTriangleArea(n, square(n) / 2);

console.log(result(10)); // 250

export default result;
