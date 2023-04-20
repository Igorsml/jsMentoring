const resizeInfo = document.querySelector(".resizeInfo");

window.addEventListener("resize", (event) => {
  resizeInfo.innerHTML = `<p>${document.documentElement.clientHeight} x ${document.documentElement.clientWidth} px</p>`;
});

// window.innerWidth/innerHeight включают в себя полосу прокрутки а clientWidth/clientHeight нет, что боле важно для позиционирования

// получить надёжно полную высоту документа
const heights = [
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight,
];

const scrollHeight = Math.max(...heights);
console.log("scrollHeight:", scrollHeight);

window.addEventListener("scroll", (event) => {
  resizeInfo.innerHTML = `<p>current scroll top: ${window.pageYOffset} x current scroll bottom: ${window.pageXOffset} px</p>`;
});
// получение текущей прокрутки
console.log("current scroll top:", window.pageYOffset);
console.log("current scroll bottom:", window.pageXOffset);

// elem.scrollIntoView(top = true / false);
const buttonTop = document.querySelector(".button-scrollView-top");
const buttonBottom = document.querySelector(".button-scrollView-bottom");

// скрыть прокрутку
document.body.style.overflow = "hidden";

// возобновить прокрутку
document.body.style.overflow = "";
