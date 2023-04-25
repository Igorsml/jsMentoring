/* #1 У нас есть пустой DOM-элемент elem и строка text.
Какие из этих 3-х команд работают одинаково? */

// elem.append(document.createTextNode(text)); // this
// elem.innerHTML = text;
// elem.textContent = text; // this

// Task #2 Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

const ulTask = document.getElementById("elem");
console.log(ulTask);

function clear(elem) {
  console.log("work", elem.length);
  for (let li of elem) {
    console.log("test", li);
    li.remove();
  }
}
clear(ulTask); // очищает список

const olTask = document.querySelectorAll("#elem > li");

function clear(elements) {
  for (const el of elements) {
    el.remove();
  }
}

clear(olTask); // очищает список

// ответы с LJ
function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

function clear(elem) {
  elem.innerHTML = "";
}

/* Task #3 Почему остаётся "aaa"?
В примере ниже вызов table.remove() удаляет таблицу из документа.
Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
Почему так происходит? */

// console.log(table); // таблица, как и должно быть

table.remove();
// почему в документе остался текст "ааа"? Answer: aaa без тега, ошибка

/* Task #4 
Напишите интерфейс для создания списка.
Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.
Если пользователь вводит HTML-теги, они должны обрабатываться как текст. */
const task4List = document.querySelector("#task4");

function createList() {
  while (true) {
    let answers = prompt("Enter item list", "");
    if (answers === null) {
      return;
    }

    let newLi = document.createElement("li");
    newLi.textContent = answers;
    task4List.append(newLi);
  }
}

// createList();

/* Task #5 
Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта. */

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};
console.log(data);
let container = document.getElementById("task5");

function createTree(container, data) {
  for (const elem in data) {
    let newLi = document.createElement("li");
    newLi.textContent = elem;
    container.append(newLi);

    if (typeof data[elem] === "object") {
      let newUl = document.createElement("ul");
      newUl.textContent = data[elem];
      container.append(newUl);
      //   let foundValue = createTree(elem, data);
      //   console.log(foundValue);
      //   if (foundValue) {
      //     return foundValue;
    }
  }
}

let container = document.getElementById("container");
// createTree(container, data); // создаёт дерево в контейнере

createTree(container, data); // создаёт дерево в контейнере

/* Выберите один из двух способов решения этой задачи:

Создать строку, а затем присвоить через container.innerHTML.
Создавать узлы через методы DOM.
Если получится – сделайте оба.

P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне. */

/* Task #6
Есть дерево, организованное в виде вложенных списков ul/li.
Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте. */

/* Task #7
Напишите функцию createCalendar(elem, year, month).

Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь: 
P.S. В этой задаче достаточно сгенерировать календарь, кликабельным его делать не нужно.*/

/* Task #8
Создайте цветные часы как в примере ниже:
Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах. */

/* Task #9
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>: */

/* Task #10
Сортировка таблицы.
В ней может быть больше строк.
Напишите код для сортировки по столбцу "name". */
