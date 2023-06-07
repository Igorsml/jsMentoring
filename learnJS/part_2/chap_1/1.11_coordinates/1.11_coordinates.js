// pageX / PageY остаются без изменений а clientX / clientY мнеяются по мере скролла

const button = document.querySelector(".client-rect");

function getBoundingClientRect() {
  return console.log("getBoundingClientRect:", button.getBoundingClientRect());
}

getBoundingClientRect();

// коордианты могут быть с десятичной частью и отрицательными, если elem ушел вверх за пределы окна (elem.getBoundingClientRect().top)
let pos;
document.addEventListener(
  "mousemove",
  ({ pageX, pageY }) => (pos = `(${pageX}, ${pageY})`)
);

console.log(pos);

console.log("inner div?:", document.elementFromPoint(65, 85)); // div.inner-div
console.log("outer div?:", document.elementFromPoint(40, 55)); // div.outer-div
console.log("elements:", document.elementsFromPoint(95, 120)); // [div.inner-div, div.outer-div, div.container, body, html]
console.log("null:", document.elementFromPoint(4000, 55)); // null

// css координаты соответствуют position: fixed | координаты документа position: absolute;

document.addEventListener(
  "click",
  (event) => {
    console.log("Позиция x относительно документа:", event.pageX);
    console.log("Позиция y относительно документа:", event.pageY);

    console.log("Позиция x относительно экрана:", event.clientX);
    console.log("Позиция y относительно экрана:", event.clientY);
  },
  false
);

// { x: ..., y: ..., top: ..., left: ..., right: ..., bottom: ... }
