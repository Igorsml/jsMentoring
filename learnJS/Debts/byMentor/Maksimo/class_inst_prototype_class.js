"use strict";

class Test {
  static test = 123;
  static arrow = () => {
    return this.test;
  };
  arrow = () => {
    return this.test;
  };
}

console.log(new Test().arrow);
// undefined, инстанс не имеет свойства arrow

console.log(Test.prototype.arrow);
// () => { return this.test; | Test.prototype имеет arrow
console.log(Test.test, Test.arrow);

// класс имеет статик test, потмоу 123, Test.arrow имеет статик свойство arrow, потому () => { return this.test;
console.log(new Test().arrow());
// undefined, инстанс вызывает метод arrow, которого нет

console.log(Test.arrow());
// 123, класс имеет меод arrow и при вызове this.test в ститке возвращает 123
