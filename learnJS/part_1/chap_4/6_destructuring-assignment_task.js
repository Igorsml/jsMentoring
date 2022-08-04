"use strict";

/* Task #1
У нас есть объект:
Напишите деструктурирующее присваивание, которое:
свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания: */
let user = ({
  name,
  years: age,
  isAdmin = false,
} = { name: "Igor", years: 29 });

console.log(name); // Igor
console.log(age); // 29
console.log(isAdmin); // false

/* Task # 2
У нас есть объект salaries с зарплатами:
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */

let salaries = {
  Igor: 100,
  Max: 6000,
  Abobus: 12000,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let topManager = "";

  for (const [key, value] of Object.entries(salaries)) {
    salaries.size === 0 ? null : [value];

    if (maxSalary < value) {
      maxSalary = value;
      topManager = key;
    }
  }

  return topManager;
}

topSalary(salaries); // Abobus
