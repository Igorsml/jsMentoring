const baseDiv = document.querySelector(".base");
console.log(baseDiv.className); // base

// добавим еще класс через classList.add('className');
baseDiv.classList.add("secondClass");
console.log(baseDiv.className); // base secondClass

// другие методы classList
const buttonChangeTheme = document.querySelector("#theme-button");

buttonChangeTheme.onclick = () => {
  baseDiv.classList.toggle("lightTheme");
  console.log("contains:", baseDiv.classList.contains("lightTheme")); // it depends
};

// classList можем перебрать
function getAllClasses() {
  console.log(document.body.classList);
  for (const className of buttonChangeTheme.classList) {
    console.log("classNames:", className); // themeButton
  }
}

getAllClasses();

// можно добавить сразу inline стили список, но это перезапишет все текущие стили, потому редко используется
const testInline = document.querySelector(".test-inline");
console.log("testInline:", testInline.style.width); // 100px

testInline.style.cssText = `width: 30px; height: 30px; background-color: #ccc; margin: 5px;`;
console.log("testInline:", testInline.style.width); // 30xp
console.log("testInline:", testInline.style.borderRadius); // ''

// getComputedStyle фактически возвращает окончательное значение свойства (1em → 16px)
// Из-за безопасности не отображает :visited
const computedStyle = getComputedStyle(testInline);
console.log("testInline:", computedStyle.borderRadius); // 16px
