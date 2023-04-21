// pageX / PageY остаются без изменений а clientX / clientY мнеяются по мере скролла

const button = document.querySelector(".client-rect");

function getBoundingClientRect() {
  return console.log("getBoundingClientRect:", button.getBoundingClientRect());
}

getBoundingClientRect();

// коордианты могут быть с десятичной частью и отрицательными, если elem ушел вверх за пределы окна (elem.getBoundingClientRect().top)

// elementFromPoint(x, y)
const buttonFromPoint = document.elementFromPoint(0, 0);
console.log("getBoundingClientRect:", buttonFromPoint.getBoundingClientRect());
console.log("buttonFromPoint:", buttonFromPoint);

// function changeText(newText) {
//   console.log("work");

//   if (buttonFromPoint.value === "Initial text") {
//     console.log("if");
//     buttonFromPoint.value = newText;
//   } else {
//     buttonFromPoint.value = "Initial text";
//   }
// }
