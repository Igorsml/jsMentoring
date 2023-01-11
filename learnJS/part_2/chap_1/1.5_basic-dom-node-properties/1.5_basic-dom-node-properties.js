// DOM узлы - объекты JS, по цепочке наследуются у классов

function checkInstanceOf(instance) {
  if (
    instance instanceof HTMLElement ||
    instance instanceof HTMLBodyElement ||
    instance instanceof Element ||
    instance instanceof Node ||
    instance instanceof EventTarget
  )
    return true;
}

console.log(checkInstanceOf(document.body));

// console.dir() для более удобного просмотра элементов
console.log(document.body);
// console.dir(global); // <ref *1> Object [global] { ...

// свойство nodeType - "старомодный" способ узнать "тип" DOM узла, изменить его нельзя
console.log("nodeType1:", document.body.nodeType); // 1 - узел-элементов
console.log("nodeType9:", document.nodeType); // 9 - объектов документа
console.log("nodeType3:", document.body.firstChild.nodeType); // text, 3 - текстовый узел
console.log("nodeType1:", document.body.firstChild.nextSibling.nodeType); // script, 1 - узел-элементов

/* innerHTML считать содержимое элемента в виде HTML-строки или установить новый HTML.
Когда в innerHTML присваивается новое значение, все предыдущее содержимое удаляется 
и создаётся новое, что приводит к перерисовке страницы. */
const form = document.querySelector("form");
form.innerHTML = '<div class="success">Вход выполнен</div>';

// но строка не DOM элемент, полноценный йэлемент выглядит так
const divEl = document.createElement("div");

// innerHTML +=  осуществляет перезапись: elem.innerHTML = elem.innerHTML + "..."

// Скрипт станет частью body, но не выполнится
document.body.innerHTML =
  '<script>alert("Мы не смогли вас взломать :(")</script>';

// После вставки в html картинка не загрузится и тогда сработает код из onerror
document.body.innerHTML =
  '<img src="broken-link" onerror="alert("Теперь вы точно взломаны!")">';
