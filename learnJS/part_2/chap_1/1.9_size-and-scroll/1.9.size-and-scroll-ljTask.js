/* Найти размер прокрутки снизу
Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?
Напишите соответствующее выражение для произвольного элемента elem.
P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0.
*/
const result = document.querySelector("#task1");

function getScrollBottom() {
  let scrollBottom = 0;
  console.log("scrollHeight:", children.scrollHeight);
  // console.log("children.scrollTop:", children.scrollTop);
  console.log("children.clientHeight:", children.clientHeight);

  if (children.scrollHeight === children.clientHeight) {
    result.innerHTML = `<p>ScrollBottom: ${scrollBottom}</p>`;
  }

  children.addEventListener("scroll", (event) => {
    scrollBottom = children.scrollHeight - children.scrollTop;

    result.innerHTML = `<p>ScrollBottom: ${scrollBottom}</p>`;
  });
}

getScrollBottom();

console.log("================");

/* Узнать ширину полосы прокрутки
Напишите код, который возвращает ширину стандартной полосы прокрутки.

Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.

P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого. */

/* Поместите мяч в центр поля
Каковы координаты центра поля?
Вычислите их и используйте, чтобы поместить мяч в центр поля:
Элемент должен позиционироваться за счёт JavaScript, а не CSS.
Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка». */

/* В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
Укажите хотя бы 3 отличия, лучше – больше. */
console.log("1: css может зависеть от наличия полосы прокрутки / браузера");
console.log("2: вместо числа может прилететь auto - width: auto ");
console.log("3: box-sizing");
console.log("4: метрика возвращает число а не строку с px в конце");
