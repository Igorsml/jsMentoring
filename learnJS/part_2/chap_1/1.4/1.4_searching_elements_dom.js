const fristDiv = document.getElementById("fristDiv");
console.log(fristDiv.innerHTML); // 'test'

/* .querySelectorAll(), возвращает похожую на массив статическую коллекцию NodeList
Для получения коллекции из вообще всех элементов на странице в качестве аргумента нужно передать строку '*', её называют wildcard.

🛠 Метод возвращает статическую коллекцию. В отличие от методов getElementsByTagName() и getElementsByClassName(), которые возвращают живые коллекции. Статическая коллекция не обновляется автоматически при появлении на странице новых элементов. Если нужны свежие данные, то придётся запустить поиск заново.

🛠 Результаты поиска можно безопасно обходить с помощью цикла. */
const paragraphs = document.querySelectorAll("div>p");
console.log("paragraphs length:", paragraphs.length); // 2

// ищем несуществующий элемент
const spanFromBody = document.querySelectorAll("span");
console.log("spanFromBody:", spanFromBody.length); // 0

// querySelector - первый CSS селектор, быстрее поскольку не бежит по всему документу
const testQuerySelector = document.querySelector(".test-querySelector");
console.log(testQuerySelector.innerHTML); // <p>test p</p>, <p>test p 2</p>

// matches - проверяет удовлетворяет ли elem CSS-селектору
const games = document.querySelectorAll("li");

for (const game of games) {
  if (game.matches(".max-played"))
    console.log(`The max-played game is ${game.innerHTML}`); // 'The max-played game is Sims'
}

// closest - ближайший родитель и цепочка иерархии от элемента до родителя
const game = document.querySelector(".max-played");
console.log("closest:", game.closest(".list-game")); // ul#games.list-game

// contains проверяет содержит ли селектор ребенка
const bestGame = document.querySelector(".best-game");
const parent = document.querySelector(".list-game");
console.log("contains:", parent.contains(bestGame)); // true
