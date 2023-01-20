// DOM свойства обычные объекы
document.body.WeightLoss = () => {
  setInterval(() => {
    console.log("You loose 1 Kg");
  }, 1e3);
};

document.body.WeightLoss(); // You loose 1 Kg

Element.prototype.Elemental = () => {
  console.log("Water elemental pipi");
};

// у каждого элемента свои атрибуты
const input = document.querySelector("input");

console.log("inoput:", input.type); // 'test', стандартный для инпута
// console.log("body:", body.type); // но не стандартный для body - ReferenceError: body is not defined

// все атрибуты доступны с помощью меодов, по типу строки
console.log(input.hasAttribute("type")); // true
console.log(input.getAttribute("type")); // 'text'
console.log(input.setAttribute("type", "123")); // задаём новый атрибут
console.log(input.getAttribute("type")); // '123'
console.log(typeof input.getAttribute("type")); // string
console.log(input.removeAttribute("type")); // удаляем атрибут
console.log(input.getAttribute("type")); // null

// HTML атрибуты регистрозависимы
const testId = document.querySelector("#testId"); // 'test big ID'
console.log("testId:", testId);
// свойство => атрибут
testId.id = "newID";
console.log(testId.getAttribute("id")); // 'newID'

// но с attr.value так не реботает
testId.setAttribute("value", "newValue"); // 'newValue'
testId.value = "newValue2";
console.log(testId.getAttribute("value")); // 'newValue', не обновилось
