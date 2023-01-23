// Task #1. Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

console.log("data-widget-name:", datasetTest.dataset.widgetName); // 'menu'
// ответ LJ
const elem = document.querySelector("[data-widget-name]");
console.log(elem.getAttribute("data-widget-name"));
console.log(elem.dataset.widgetName);

/* task #2
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
Ссылка является внешней, если:
Её href содержит ://
Но не начинается с http://internal.com.*/
let link = document.querySelectorAll("a[href*='://']");

for (const elem of link) {
  if (!elem.href.startsWith("http://internal.com")) elem.style.color = "orange";
}

//https://bobbyhadz.com/blog/javascript-get-element-by-href-attribute
