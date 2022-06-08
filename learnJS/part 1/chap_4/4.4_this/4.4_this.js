//https://learn.javascript.ru/object-methods#tasks

// Task 1 - Каким будет результат выполнения этого кода?
// let user = {
//   name: "Джон",
//   go: function () {
//     console.log(this.name)
//   }
// }; //Missed ; string # 9

// user.go()

/* 
Task 2 - В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?
*/

let obj, method;

obj = {
  let: 123,
  go: function () {
    console.log(this);
  },
};

obj.go(); // (1) [object Object] — this ссылается на объект 
(obj.go)(); // (2) [object Object] — круглые собки внешние оператор группировки, но он не изменяет порядок операций, точка срабатывает раньше
(method = obj.go)(); // (3) 1. method ссылается на код obj, 2. происходит вызов method(), 3. потеря значения this 
(obj.go || obj.stop)(); // (4) undefined — потеря значения this  
/*
Чтобы объяснить поведение в примерах (3) и (4), нам нужно помнить, что доступ к свойству (через точку или квадратные скобки) возвращает специальное значение ссылочного типа (Reference Type).

За исключением вызова метода, любая другая операция (подобно операции присваивания = или сравнения через логические операторы, например ||) превращает это значение в обычное, которое не несёт информации, позволяющей установить this.
*/

// Task 2

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

console.log(user.ref.name); // Каким будет результат? - undefined , необходима функция (не стрелочная) для отработки this

//fix
function makeUser() {
  return {
    name: "Джон",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert(user.ref().name); // Джон

// Task 4 - create calculator

let calculator = {
  read() {
    this.numOne = +prompt('Enter number one', '');
    this.numTwo = +prompt('Enter number two', '');
  },
  sum() {
    return this.numOne + this.numTwo;
  },
  multiply() {
    return this.numOne * this.numTwo;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.multiply());

// Task 5 - Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // fix
  },
  down() {
    this.step--;
    return this; // fix
  },
  showStep: function () { // показывает текущую ступеньку
    alert(this.step);
    return this; // fix
  }
};

ladder.up(); // 0 + 1
ladder.up(); // 1 + 1
ladder.down(); // 2 - 1
ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1