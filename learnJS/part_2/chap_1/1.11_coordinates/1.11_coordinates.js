// pageX / PageY остаются без изменений а clientX / clientY мнеяются по мере скролла

// const button = document.querySelector(".client-rect");

// function getBoundingClientRect() {
//   return console.log("getBoundingClientRect:", button.getBoundingClientRect());
// }

// getBoundingClientRect();

// коордианты могут быть с десятичной частью и отрицательными, если elem ушел вверх за пределы окна (elem.getBoundingClientRect().top)

// elementFromPoint(x, y)

// css координаты соответствуют position: fixed | координаты документа position: absolute;

// document.addEventListener(
//   "click",
//   (event) => {
//     console.log("Позиция x относительно документа:", event.pageX);
//     console.log("Позиция y относительно документа:", event.pageY);

//     console.log("Позиция x относительно экрана:", event.clientX);
//     console.log("Позиция y относительно экрана:", event.clientY);
//   },
//   false
// );

// { x: ..., y: ..., top: ..., left: ..., right: ..., bottom: ... }
