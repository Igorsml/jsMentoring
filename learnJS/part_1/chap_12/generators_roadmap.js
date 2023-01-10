// Кто такое генераторы?
// Это  объект, возвращаемый функцией-генератором, некий синтаксический сахар для создания итераторов

/* Зачем нужны генераторы?
1. Более чистый код, особенно в асинхронном поведении. */

const list = {
  arr: ["a", "b", "c"],
  [Symbol.iterator]() {
    let counter = 0;
    const arr = this.arr;
    return {
      next: function () {
        return {
          value: arr[counter],
          done: !arr.hasOwnProperty(counter++),
        };
      },
    };
  },
};

for (let item of list) {
  console.log(item); // a, b, c
}

// with generator
const arr = [1, 2, 3];

function* generate(arr) {
  for (const value of arr) {
    yield value;
  }
}

const gen = generate(arr);

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

/* 2. Lazy evaluation — не вычисляет значение, пока оно не понадобится. Она обеспечивает вычисление по требованию. Значение будет существовать, только когда оно нам понадобится.
3. Memory efficient — генераторы очень экономичны по памяти, так как не выделяют лишние области памяти для предварительно сгенерированных неиспользуемых значений. */
