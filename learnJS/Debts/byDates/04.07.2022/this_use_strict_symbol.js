// #1 Грубо говоря, this — это ссылка на некий объект, к свойствам которого можно получить доступ внутри вызова функции. 
// Этот this — и есть контекст выполнения.


// #2 this in "use strict" function
'use strict';
function logThis() {
  console.log(this)
}

logThis(); //  undefined, без 'use strict' window
/*
Однако в то же время гибкий this может быть и причиной ошибки, например, если мы используем конструктор без new или просто спутаем контекст выполнения. Всегда используйте 'use strict'.
В нестрогом режиме, если мы забудем new, name станет полем на глобальном объекте.
*/
function User() {
  this.name = "Igor"
}
const user = User() // window.name === 'Igor';
// user === window


// #3 Вызов свойства на undefined, тип ошибки
function Car() {
  'use strict'
  this.make = "Lamborghini";
}

const myCar = Car();
myCar(); // myCar is not a function, без 'use strict'
myCar(); // Cannot set properties of undefined (setting 'make'). В строгом мы получим ошибку, потому что изначально контекст внутри функции в строгом режиме — undefined
console.log(myCar.make); // TypeError: Cannot read properties of undefined (reading 'make')


// #4 [Symbol.toPrimitive] квадратные скобки
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    (`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  } // Если мы хотим использовать символ при литеральном объявлении объекта {...}, его необходимо заключить в квадратные скобки.
};

let user1 = {
  name: "John",
  money: 1000,

  Symbol.toPrimitive(hint) {
    (`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  } 
};

console.log(user); // // Unexpected token '.' in  Symbol.toPrimitive(hint) {