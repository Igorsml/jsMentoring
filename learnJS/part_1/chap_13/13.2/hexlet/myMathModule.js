/* 
1. Создайте функцию getTriangleArea(), которая принимает два аргумента h и b 
и вычисляет площадь треугольника по формуле 
A = 1/2 * h * b, где h — высота, а b — основание треугольника.
2. Экспортируйте функцию. 
*/

export const getTrianglePerimeter = (a, b, c) => a + b + c;
export const square = (x) => x * x;

const getTriangleArea = (h, b) => 0.5 * (h * b);

console.log(getTriangleArea(5, 10)); // 25
console.log(getTriangleArea(15, 12)); // 90

export default getTriangleArea;
