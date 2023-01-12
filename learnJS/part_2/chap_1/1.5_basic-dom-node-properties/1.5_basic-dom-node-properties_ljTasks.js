/* Task #1
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:
Какой в нём текст (без поддерева) ? 
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?*/
function getLiCount() {
  const firstLi = document.querySelectorAll("li");

  firstLi.forEach((elem) => {
    console.log(
      `${elem.firstChild.data.trim()}: ${
        elem.getElementsByTagName("li").length
      }`
    );
  });
}

getLiCount(); // Животные: 9, Млекопитающие: 4 ...

/* Task #2
 Что выведет этот код?
<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html> */
console.log("Answer: 1, script nodeType");

/* Task #3
<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  </script> */
console.log(body.firstChild.data); // вставляем в боди коммент <!--BODY-->,
// data первого и единственного ребенка (комментария) → 'BODY'

// Объектом какого класса является document?
console.log("Answer1: HTMLDocument");
console.log(document.constructor.name); // HTMLDocument

// Task #4 | Какое место он занимает в DOM-иерархии?
console.log("Answer2: 3");
console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
console.log(
  HTMLDocument.prototype.__proto__.__proto__.__proto__.constructor.name
); // EventTarget

// Наследует ли он от Node или от Element, или может от HTMLElement?
console.log("Answer3: от HTMLElement");
