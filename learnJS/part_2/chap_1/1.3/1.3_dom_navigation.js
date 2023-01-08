// самый верхний элемент дерева DOM - html = document.documentElement
// document.documentElement.innerHTML = "test documentElement";

// доступ к body, перезапишет html test documentElement
// document.body.innerHTML = "test body";

// доступ к head
document.head.innerHTML =
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">';

console.log(document.body.childNodes);
// коллекция NodeList(15) [text, comment, text, script, text, comment, text, div, text, ul, text, comment, text, script, text]

// проверка наличия дочерних узлов
console.log(document.body.hasChildNodes()); // true

// коллекция не массив, а объект-псевдомассив, можем перебирать чеез for...of (не через for...in, иначе попадут перечисляемые лишние свойства по типу length, item, values)
for (const node of document.body.childNodes) {
  console.log(node);
  // #text (<!-- Уже в body... -->), #text (console.log(<script>...</script>) ...
}

// Если нужны методы массивов, можем создать массив из коллекции
console.log(Array.from(document.body.childNodes).reverse());
// [text, script, text, ...]

console.log(document.body.parentNode === document.documentElement); // parent body is html
console.log(document.head.nextSibling); // body after head
console.log(document.head.previousSibling); // htmlHeadElement before head

// выведем только children, не childNodes:
for (const child of document.body.children) {
  console.log("child:", child); // script, div, ul, script
}
