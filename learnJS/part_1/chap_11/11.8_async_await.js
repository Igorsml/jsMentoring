"use strict";

/* Добавленное перед определением функции ключевое слово async делает функцию асинхронной. 
Возвращаемое значение такой функции автоматически оборачивается в Promise: */

// вместо цепочек then
function getMainActorProfileFromMovie(id) {
  return fetch(`https://swapi.dev/api/films/${id}/`)
    .then((movieResponse) => {
      return movieResponse.json();
    })
    .then((movie) => {
      const characterUrl = movie.characters[0].split("//")[1];
      return fetch(`https://${characterUrl}`);
    })
    .then((characterResponse) => {
      return characterResponse.json();
    })
    .catch((err) => {
      console.error("Произошла ошибка!", err);
    });
}

getMainActorProfileFromMovie(1).then((profile) => {
  console.log(profile);
});

// более плоский и понятный код
async function getMainActorProfileFromMovie(id) {
  try {
    const movieResponse = await fetch(`https://api.dev/api/films/${id}`);
    const movie = await movieResponse.json();

    const characterUrl = movie.characters[0].split("//")[1];
    const characterResponse = await fetch(`https://${characterUrl}`);
    return characterResponse.json();
  } catch (err) {
    console.log("Here your error:", err);
  }
}

getMainActorProfileFromMovie(1).then((profile) => console.log(profile));

// запуск новостей после получения пользователя
async function getUser() {
  // return user info
}

async function getNews() {
  // return news list
}

const user = await getUser();
const news = await getNews();

// Но, запустив getNews параллельно c getUser, мы в большинстве случаев получим результат быстрее.
// Promise.all() позволяет запустить запросы параллельно, при этом дожидаться результата мы можем как и раньше при помощи await:
const [user, news] = await Promise.all([getNews(), getUser()]);
