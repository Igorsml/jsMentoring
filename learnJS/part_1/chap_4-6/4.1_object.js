  let user = new Object();
  let newObject = {};

  const myPets = {
    dog: 'Timmy',
  }

  myPets.cat = 'Mirya';
  myPets.psina = 'Nika';
  console.log(myPets)

  let user = {
    name: "John",
    age: 30
  };

  let key = prompt("Что вы хотите узнать о пользователе?", "name");

  // доступ к свойству через переменную
  alert(user[key]); // John (если ввели "name")
  alert(user.key); // undefined

  //task 1 - Напишите код, выполнив задание из каждого пункта отдельной строкой:
  let dogs = {};
  dogs.name = 'John',
    dogs.surname = 'Smith',
    dogs.surname = 'Pete'
  delete dogs.name;

  // Task 2 - Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
  let schedule = {};

  function isEmpty(obj) {
    for (props in obj) {
      return false;
    }
    return true;
  }

  alert(isEmpty(schedule)); // true
  schedule["8:30"] = "get up";
  alert(isEmpty(schedule)); // false

  //Task 3 - Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
  const user = {
    name: "John"
  };

  // это будет работать?
  user.name = "Pete";

  // Содержимое объекта можно менять, нельзя менять значения самой переменной - name = 10;

  /* Task 4 
  У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;
  for (cash in salaries) {
    sum = sum + salaries[key]
  }

  //Task 5 = Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
    for (let dimension in obj) {
      if (typeof obj[dimension] == 'number') {
        obj[key] *= 2;
      }
    }
  }