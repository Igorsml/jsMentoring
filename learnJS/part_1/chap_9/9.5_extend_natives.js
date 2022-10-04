"use strict";

// можем наследоваться от встроенных классов
class checkArrayIsEmpty extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static get [Symbol.species]() {
    return Array;
  }
}

const arr = new checkArrayIsEmpty(1, 2, 3, 4, 5);
console.log(arr.isEmpty()); // false

let filteredArr = arr.filter((item) => item >= 10);
// filteredArr не является PowerArray, это Array
console.log(filteredArr.isEmpty()); // TypeError: filteredArr.isEmpty is not a function

class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name = name;
  }

  add(movie) {
    this.push(movie);
  }

  topRated(limit = 10) {
    return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
  }
}

const movies = new MovieCollection(
  "Wes's Fav Movies",
  { name: "Bee Movie", stars: 10 },
  { name: "Lord of the Rings 2022", stars: 1 },
  { name: "Virgin Suicides", stars: 7 },
  { name: "King of the Road", stars: 8 }
);

console.table(movies.topRated(2)); // https://prnt.sc/m_In55Pffdd7
