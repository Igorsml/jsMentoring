"use strict";

/* Promise.all(iterable),принимает итерируемую коллекцию промисов (чаще всего — массив) 
и возвращает новый промис, который будет выполнен, когда будут выполнены все промисы, 
переданные в виде перечисляемого аргумента, или отклонён, если хотя бы один 
из переданных промисов завершится с ошибкой. */

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 5e3));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2e3));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1e3));

// передадим массив из созданных промисов
Promise.all([promise1, promise2, promise3]).then(
  ([response1, response2, response3]) => {
    console.log(response1, response2, response3);
  }
); // через 5 сек 1 2 3

// если хотя бы один из промисов завершится с ошибкой, то остальные будут проигнорированы
const promise4 = new Promise((resolve) => setTimeout(resolve(1), 5e3));
const promise5 = new Promise((resolve, reject) =>
  setTimeout(reject("error"), 2e3)
);
const promise6 = new Promise((resolve) => setTimeout(resolve(1), 1e3));

Promise.all([promise4, promise5, promise6])
  .then(([response4, response5, response6]) => {
    console.log(response4, response5, response6);
  })
  .catch((err) => {
    console.log(err);
  }); // немедленно error

/* Если в Promise.all передать не промис, он вернёт переданные не промисы 
в массив результатов как есть (под капотом при этом произойдёт его 
преобразование с помощью метода Promise.resolve()). */

// Передаю в Promise.all() промис promise1, число number и объект obj:
const promiseSoup = new Promise((resolve, reject) =>
  setTimeout(() => resolve(1), 1e3)
);
const number = 42;
const obj = { key: "anus" };

Promise.all([promiseSoup, number, obj]).then(
  ([response1, response2, response3]) => {
    console.log(response1, response2, response3);
  }
); // 1 42 { key: 'anus' }

/* Довольно частое использование — это преобразование массива с данными 
в массив с промисами с помощью map(). В map() для каждого элемента 
создаётся промис, а затем полученный массив передаётся в Promise.all(). 
Это позволит дождаться выполнения всех промисов, а затем обработать результат. */

// Получения данных нескольких персонажей из вселенной звёздных войн через запрос к API
const peopleIds = [1, 2, 13];
const arrayFetchUsers = peopleIds.map((user) =>
  fetch(`https://swapi.dev/api/people/${user}`).then((response) =>
    response.json()
  )
);

Promise.all(arrayFetchUsers)
  .then((responses) => {
    responses.forEach((resp) => {
      console.log(resp.name); // Luke Skywalker, C-3PO, Chewbacca
    });
  })
  .catch((err) => console(err.message));
//  сначала три запроса к API, с помощью Promise.all(), дождёмся их завершения
// и парсинга ответа в JSON, а затем выведется имя персонажа для каждого.

/* Promise.allSettled, В отличие от Promise.all(), Promise.allSettled()
 ждёт выполнения всех промисов, при этом неважно, завершились они успешно или с ошибкой. 
Метод применяется для запросов к API. Актуально для независимых запросов */
const promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), 1e3)),
  new Promise((resolve, reject) => setTimeout(() => reject("error"), 1e2)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1e1)),
];

Promise.allSettled(promises).then(([response1, response2, response3]) => {
  console.log(response1); // {status: 'fulfilled', value: 1}
  console.log(response2); // {status: 'rejected', reason: 'error'}
  console.log(response3); // {status: 'fulfilled', value: 3}
});

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.org/i_need_an_error",
];

const arrayFetchData = urls.map((url) => fetch(url).then((res) => res.json()));

Promise.allSettled(arrayFetchData).then((res) => {
  res.forEach((element) => {
    console.log(element);
  });
});

// { status: 'fulfilled', value: { userId: 1, id: 1, ... } }
// { status: 'rejected', reason: 'TypeError: Failed to fetch...' }

// Promise.race - первый выполненный
const slowest = new Promise((resolve) => setTimeout(() => resolve(1), 6000));
const fast = new Promise((resolve) => setTimeout(() => resolve(2), 3000));
const theFastest = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.race([slowest, fast, theFastest]).then((value) => {
  console.log(value); // 3
});

// Если передать в Promise.race() пустой список, то промис навсегда зависнет в состоянии pending:
Promise.race([])
  .then((value) => {
    console.log(value);
  }) // then никогда не сработает
  .catch((err) => {
    console.log(err.message);
  }); // catch никогда не сработает

/* Promise.any, первый успешно выполненный. После того как один из промисов будет исполнен,
метод не будет дожидаться исполнения остальных.
Если ни один не успешен, то Promise будет отклонён с объектом ошибки AggregateError.errors
Для примера, если нужно отобразить любую из картинок которая загрузится быстре: */

function fetchAndDecode(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    } else {
      return response.blob();
    }
  });
}

const dog = fetchAndDecode(
  "https://sun9-73.userapi.com/impg/YQp8yUIup5qfqoQXXTkzvjPmFn-3lf0luQKrOg/2N1exNB8zRU.jpg?size=998x522&quality=96&sign=83d301f29acb90cbf1f8b6489b9be41a&type=album"
);
const cat = fetchAndDecode(
  "https://sun9-11.userapi.com/impg/vUYX_GPBG-SzKZa8LJWgHF4CKOvCef8DUGTGEw/wz612yJ5dDo.jpg?size=464x460&quality=96&sign=64d619f2bcd4ead21684238663478a78&type=album"
);

Promise.any([dog, cat])
  .then((value) => {
    const objectUrl = URL.createObjectURL(value);
    const image = dicument.createElement("img");

    image.src = objectUrl;
    document.body.appendChild(image);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Если в Promise.any() передать не промисы, он вернёт первый переданный аргумент,
// независимо от его типа, в результат выполнения как есть (под капотом при этом
// произойдёт его преобразование с помощью метода Promise.resolve()).

const number = 42;
const obj = {
  key: "value",
};
const bool = false;
const nulled = null;

Promise.any([number, obj, bool, nulled]).then((result) => {
  console.log(result); // 42
});
