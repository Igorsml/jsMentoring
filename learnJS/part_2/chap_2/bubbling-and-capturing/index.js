const input = document.querySelector("input");

function getFocus() {
  input.focus();
}

input.addEventListener("focus", (event) => {
  event.target.style.background = "red";
});

input.addEventListener("blur", (event) => {
  event.target.style.background = "green";
});

// самый глубокий (детский) элемент, который вызывает событие называется целевым
const button = document.querySelector("button");

button.onclick = (event) => {
  event.target.style.backgroundColor = "green";

  setTimeout(() => {
    console.log(event.target.tagName);
  }, 0);
};

// чтобы остановить всплытие юзаем event.stopPropagation()
// если у элемента несколько обработчиков, юзаем event.stopImmediatePropagation()
const buttonStop = document.querySelector(".testStopPropagation");
buttonStop.onclick = (event) => event.stopImmediatePropagation();
// console пустая или если в тесте всплытие - погружение то без всплытия

// тестируем всплытие и погружение
function testBubblingAndCapture() {
  for (let elem of document.querySelectorAll("*")) {
    elem.addEventListener(
      "click",
      (e) => console.log(`Погружение: ${elem.tagName}, Phase: ${e.eventPhase}`),
      true
    );
    elem.addEventListener("click", (e) =>
      console.log(`Всплытие: ${elem.tagName}, Phase: ${e.eventPhase}`)
    );
  }
}

testBubblingAndCapture();

// погружение
const buttonCapturing = document.querySelector(".testCapturing");
const divCapturing = document.querySelector(".testCapturingDiv");

buttonCapturing.addEventListener("click", () => console.log("capturing 1"), {
  capture: true,
});
divCapturing.addEventListener("click", () => console.log("capturing 2"), true);
// вывод capturing 2, capturing 1
