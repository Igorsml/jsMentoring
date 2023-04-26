/* Task #1 
Найдите координаты точек относительно окна браузер
В ифрейме ниже располагается документ с зелёным «полем».

Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты. 
Ваш код должен при помощи DOM получить четыре пары координат:

верхний левый, внешний угол (это просто).
нижний правый, внешний угол (тоже просто).
верхний левый, внутренний угол (чуть сложнее).
нижний правый, внутренний угол (есть несколько способов, выберите один).
Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.*/
const field = document.getElementById("field");
const fieldGetBounding = field.getBoundingClientRect();

document.addEventListener(
  "click",
  (event) => {
    console.log("current coords:", `${event.clientX}, ${event.clientY}`);
    console.log(
      "верхний левый, внешний угол:",
      `${fieldGetBounding.left} x ${fieldGetBounding.top}`
    );
    console.log(
      "нижний правый, внешний угол:",
      `${fieldGetBounding.right} x ${fieldGetBounding.bottom}`
    );
    console.log(
      "верхний левый, внутренний угол:",
      `${fieldGetBounding.left + field.clientLeft} x ${
        field.offsetTop + field.clientTop
      }`
    );
    console.log(
      "нижний правый, внутренний угол:",
      `${fieldGetBounding.left + field.clientWidth} x ${
        field.clientHeight + field.offsetTop + field.clientTop
      }`
    );
    console.log(
      "нижний правый, внутренний угол 2:",
      `${fieldGetBounding.left + field.clientWidth + field.clientLeft} x ${
        fieldGetBounding.top + field.clientTop + field.clientHeight
      }`
    );
    console.log("_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/");
  },
  false
);

/* Task #2 
Покажите заметку рядом с элементом
Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

Аргумент position – строка с одним из 3 значений:

"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor
Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor. */
function positionAt(anchor, position, elem) {
  const coords = anchor.getBoundingClientRect();
  console.log(coords);

  if (position === "top") {
    elem.style.top = `${coords.top - elem.offsetHeight}px`;
    elem.style.left = `${coords.left}px`;
  } else if (position === "bottom") {
    elem.style.top = `${coords.bottom}px`;
    elem.style.left = `${coords.left}px`;
  } else {
    elem.style.top = `${coords.top}px`;
    elem.style.left = `${coords.right}px`;
  }
}

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");

/* Task #3 
Покажите заметку около элемента (абсолютное позиционирование)
Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

Это предотвратит расхождение элементов при прокрутке страницы.

Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">. */
function positionAt(anchor, position, elem) {
  const coords = anchor.getBoundingClientRect();
  elem.style.cssText = "position: absolute;";

  if (position === "top") {
    elem.style.top = `${coords.top - elem.offsetHeight}px`;
    elem.style.left = `${coords.left}px`;
  } else if (position === "bottom") {
    elem.style.top = `${coords.bottom}px`;
    elem.style.left = `${coords.left}px`;
  } else if (position === "top-in") {
    elem.style.top = `${coords.top}px`;
    elem.style.left = `${coords.left}px`;
  } else if (position === "right-in") {
    elem.style.top = `${coords.top}px`;
    elem.style.left = `${coords.right - elem.offsetWidth}px`;
  } else if (position === "bottom-in") {
    elem.style.top = `${coords.bottom - elem.offsetHeight}px`;
    elem.style.left = `${coords.left}px`;
  } else {
    elem.style.top = `${coords.top}px`;
    elem.style.left = `${coords.right}px`;
  }
}

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote2 = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
showNote(blockquote, "top-in", "top-in");
showNote(blockquote, "right-in", "right-in");
showNote(blockquote, "bottom-in", "bottom-in");

/* Task #4
Расположите заметку внутри элемента (абсолютное позиционирование)
важность: 5
Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

Новые значения для аргумента position:
top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
Например: */

// result: https://prnt.sc/OAy8Pv9bUeEt
