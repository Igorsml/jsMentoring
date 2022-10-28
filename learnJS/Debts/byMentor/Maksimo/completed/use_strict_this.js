"use strict";
// If the method is a function in non-strict mode, null and undefined will be replaced with the global object, and primitive values will be converted to objects.
// This в стрелке / объекте

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20 (всё ок, функция имеет область видимости объекта)
console.log(shape.perimeter()); // NaN (стрелка не имеет своего контекста)

// fix
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter() {
    const func = () => 2 * Math.PI * this.radius;
    return func();
  },
};

console.log(shape.diameter()); // 20 (всё ок, функция имеет область видимости объекта)
console.log(shape.perimeter()); // 62.83185307179586

// https://stackoverflow.com/questions/68671225/why-is-this-in-codesandbox-undefined
