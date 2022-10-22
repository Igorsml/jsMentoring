/* 
    Найти вес всех вещей, цена которых 
    более 80 и количество менее 7
*/

const foods = [
  { name: "Паста болоньезе", weight: 350, price: 33, quanity: 3 },
  { name: "Спаггети", weight: 350, price: 56, quanity: 8 },
  { name: "Суп", weight: 400, price: 68, quanity: 16 },
  { name: "Пицца", weight: 675, price: 139, quanity: 30 },
  { name: "Молоко", weight: 1600, price: 339, quanity: 8 },
  { name: "Овощи", weight: 740, price: 159, quanity: 1 },
  { name: "Сыр", weight: 230, price: 99, quanity: 4 },
  { name: "Мука", weight: 230, price: 69, quanity: 5 },
];

function getFood(foods) {
  let weightOfAll = 0;

  for (let i = 0; i < foods.length; i += 1) {
    foods[i].price > 80 || foods[i].quanity < 7
      ? (weightOfAll += foods[i].weight)
      : console.log(`${foods[i].name}, sorry buddy, you are cheap`);
  }

  return weightOfAll;
}

console.log(getFood(foods)); // 3825
