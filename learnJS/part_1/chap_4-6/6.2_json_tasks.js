"use strict";

/* task # 1
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.*/

let user = {
  name: "Igor",
  age: 30,
};

let result = JSON.parse(JSON.stringify(user));
console.log(result); // { name: 'Igor', age: 30 }

/* task # 2 Исключить обратные ссылки
В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup: */

let room = {
  number: 42,
};

let meetup = {
  title: "Meeting",
  occupiedBy: [{ name: "Igor" }, { name: "Miley" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
); // {"title":"Meeting","occupiedBy":[{"name":"Igor"},{"name":"Miley"}],"place":{"number":42}}
