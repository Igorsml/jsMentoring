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

// clientWidth/Height
console.log(children.clientWidth); // 323 (283 (content width) + 40(padding))
console.log(children.clientHeight); // 340 (300 (content width) + 40(padding))
