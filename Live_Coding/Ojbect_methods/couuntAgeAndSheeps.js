/*
  У нас есть список клиентов, которые покупают автомобили марки Daewoo Matiz 
  происзводства Узбекситан
  Нужно вернуть: 
  во-первых: средний возраст нашей целевой аудитории
  во-вторых: клиента, у которого большо всего овец
*/

const clientsOfBMW = [
  {
    name: "Кирилл Гайдарный",
    age: 35,
    car: "bmw",
    sheep: 99,
  },
  {
    name: "Максим Шестьсиньорский",
    age: 55,
    car: "bmw",
    sheep: 22,
  },
  {
    name: "Артём Катанович",
    age: 17,
    car: "bmw",
    sheep: 33,
  },
  {
    name: "Игорь",
    age: 23,
    car: "bmw",
    sheep: 14,
  },
  {
    name: "Виктор Викториумич",
    age: 22,
    car: "bmw",
    sheep: 77,
  },
  {
    name: "Александр Твиксович",
    age: 44,
    car: "bmw",
    sheep: 22,
  },
  {
    name: "Дмитрий Питонович",
    age: 33,
    car: "bmw",
    sheep: 12,
  },
];

function calcAverageAgeAndSumSheeps(data) {
  let result = {};
  let sumOfAges = 0;
  let maxSheeps = 0;

  data.map((elem, index) => {
    if (elem.age) {
      sumOfAges += elem.age;
    }
    if (elem.sheep > maxSheeps) {
      maxSheeps = elem.sheep;
    }
    if (maxSheeps === elem.sheep) {
      result["GodOfSheeps"] = elem.name;
    }

    result["avgAge"] = Math.floor(sumOfAges / data.length);
    result["maxSheeps"] = maxSheeps;
  });

  return result;
}

console.log(calcAverageAgeAndSumSheeps(clientsOfBMW)); // { GodOfSheeps: 'Кирилл Гайдарный', avgAge: 32, maxSheeps: 99 }
