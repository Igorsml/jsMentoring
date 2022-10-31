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
// () => { return this.test; | инстанс имеет свойство arrow

console.log(Test.prototype.arrow);
// undefined | Test.prototype не имеет arrow

console.log(Test.test, Test.arrow);
// 123, класс имеет статик test
//  () => { return this.test | Test.arrow имеет статик свойство arrow

console.log(new Test().arrow());
// undefined, инстанс вызывает метод arrow, который возвращает this.test, которого нет

console.log(Test.arrow());
// 123, класс имеет меод arrow и при вызове this.test в статике возвращает 123
