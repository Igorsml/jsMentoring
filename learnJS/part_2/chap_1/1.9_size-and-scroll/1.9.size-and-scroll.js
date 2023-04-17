// offsetLeft / offsetTop содержат координаты x/y относительно верхнего угла offsetParent
const children = document.querySelector("#size-scroll");

console.log(children.offsetParent); // parent
console.log(children.offsetLeft); // 211
console.log(children.offsetTop); // 290

// offsetParent может быть null если элементы скрыт (display: none) или это body / html или position: fixed
const fixed = document.querySelector(".fixed");
console.log(fixed.offsetParent); // null
console.log(document.body.offsetParent); // null
console.log(document.documentElement.offsetParent); // null

// offsetWidth/Height внешняя ширина / высота элемента включая отступы и рамки
console.log(children.offsetWidth); // 350 (300(width) + 10(border) + 40(padding))
console.log(children.offsetHeight); // 350 (300(width) + 10(border) + 40(padding))
console.log(typeof children.offsetWidth); // number

// clientTop/Left. Исключение это на иврите, тогда будет рамка + скролл
console.log(children.clientTop); // 5
console.log(children.clientLeft); // 5

// clientWidth/Height, лучше юзать когда точно знаем что отступов нет и не будет
console.log(children.clientWidth); // 323 (283 (content width) + 40(padding))
console.log(children.clientHeight); // 340 (300 (content width) + 40(padding))

// scrollLeft/scrollTop - сколько уже прокручено вверх / влево. Можно менять, юзается для кнопки прокрутки вверх / вниз задав 1e9, прокрутит элемент в самый верх/низ соответственно.
console.log(children.scrollLeft); // 0
console.log(children.scrollTop); // 56

// лучше юзать элемента а не getComputedStyle, т.к. css не стабильный (width: auto, box-sizing, ширина скролла разных браузеров) и может сломать вычисления JS.

const info = document.querySelector(".info");
let props = {
  geometry: [
    "clientLeft",
    "clientTop",
    "clientWidth",
    "clientHeight",
    "offsetWidth",
    "offsetHeight",
    "scrollWidth",
    "scrollHeight",
  ],
  scroll: ["scrollLeft", "scrollTop"],
  offsetParent: ["offsetParent", "offsetLeft", "offsetTop"],
};

info.innerHTML = "<h3>Click to see the value:</h3>";
for (let k in props) {
  info.innerHTML += `<h4>${k}</h4>`;
  let prop = props[k];
  for (let i = 0; i < prop.length; i++) {
    info.innerHTML +=
      "<span class='key'>" +
      prop[i] +
      '</span>: <span id="' +
      prop[i] +
      '">&nbsp;</span>' +
      " ";
    i++;
    if (i < prop.length) {
      info.innerHTML +=
        "<span class='key'>" +
        prop[i] +
        '</span>: <span id="' +
        prop[i] +
        '">&nbsp;</span>';
    }
    info.innerHTML += "<br/>";
  }
}

document.onclick = function (event) {
  let target = event.target;
  if (!target.classList.contains("key")) return;

  let prop = target.innerHTML;
  let value = children[prop];
  value = value.tagName || value;
  document.getElementById(prop).innerHTML = value;
};

function openFullHeight() {
  return (children.style.height = `${children.scrollHeight}px`);
}
