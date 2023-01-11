/* Task #1
Напишите код, как получить… элемент 
?
<ul>?
второй <li> (с именем Пит)?
*/

console.log("div:", document.body.firstElementChild.innerHTML);
console.log("ul:", document.body.children[1].innerHTML);
console.log("Пит:", document.body.children[1].lastElementChild.innerHTML);

/* Task #2
Если elem – произвольный узел DOM-элемента…
Правда, что elem.lastChild.nextSibling всегда равен null?
Aswer: да, elem.lastChild всегда последний
Правда, что elem.children[0].previousSibling всегда равен null ?
Aswer: elem.children[0] потомок, но перед ним могут быть другие узли
console.log(document.body.children[0].previousSibling); // #text
*/

/* Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red'; */
function makeRedTd() {
  return console.log(table.tBodies);
}

makeRedTd();
