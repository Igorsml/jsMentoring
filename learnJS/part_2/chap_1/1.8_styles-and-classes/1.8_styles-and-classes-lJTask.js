/* Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
Пример объекта options: */

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome", // дополнительный класс для div (необязательно)
});

function showNotification({ top = 0, right = 0, className, html }) {
  const parent = document.querySelector(".base");
  const notification = document.createElement("div");

  notification.style.cssText = `background-color: #ccc; 
  width: 80px; 
  height: 30px; 
  text-align: center;
  background: #b80000;
  padding: 5px;
  color: yellow;
  border-radius: 5px;
  position: absolute;
  top: ${top}px; 
  right: ${right}px;`;
  notification.innerHTML = html;
  notification.classList.add(className);

  parent.before(notification);

  setInterval(() => notification.remove(), 1500);
}

// test it
let i = 1;

setInterval(() => {
  console.log("work");
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);
