// [Дескрипторы, глава 7 learjs] Задача с собеса. Сложность 2/10

const obj = {
  testProp: 123,
};

Object.defineProperty(obj, "getProp", {
  value: function getProp() {
    return this.testProp;
  },
});

obj.getProp(); //  123
obj.testProp = 345;
obj.getProp(); //  345
