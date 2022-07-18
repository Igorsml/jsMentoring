'use strict'

let obj1 = {
  name: 'Igor',
  age: 29,
  city: 'Saint-Petersburg'
};

for (let values of obj1) {
  console.log(values); // TypeError: obj1 is not iterable
}

// fix with  [Symbol.iterator]()
const nums = {
  from: 0,
  to: 10,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        return {
          done: this.current > this.last,
          value: this.current++,
        }
      }
    }
  }
}

for(const num of nums) {
  console.log(num); // 1, 2, 3, 4, 5 ... 10
}

// object 
let obj = {
  name: 'Igor',
  age: 29,
  city: 'Saint-Petersburg'
};

//1. вызов for...of вызывает эту функцию
obj[Symbol.iterator] = function() {
  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
  return {
      start: 0,
      end: Object.values(this),
      // 3. next() вызывается на каждой итерации цикла for..of
      next() {
          // 4. он должен вернуть значение в виде объекта {done:.., value :...}
          if(this.start < this.end.length){
              return {done: false, value: this.end[this.start++]}
          }
          return {done: true}
      }
  };
};

for (let values of obj) {
  console.log(values); // Igor, 29, Saint-Petersburg
}

// строка - перебираемый объект
const str = 'Abobus 🅰️🅱️🅾️🅱️🅰️'
for (let char of str) {
  console.log(char); // a, b...🅱️🅰️
}

//manual iteration
const strGreeting = 'Hello'

let iterator = strGreeting[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if(result.done) break;
  console.log(result.value); // H, e, l, l, o
}

// Псевдомассив, но отсутствует Symbol.iterator
let arrayLike = {
  name: 'Igor',
  city: 'Saint-Petersburg',
  length: 2,
}

for (let item of arrayLike) {} // TypeError: arrayLike is not iterable

function makeIterator(array) {
  let nextIndex = 0

  return {
    next: function () {
      if (nextIndex < array.length) {
        const result = { value: array[nextIndex], done: false }
        nextIndex++
        return result
      } else {
        return { done: true }
      }
    }
  }
}
let iterator = makeIterator(['Hello', 'world'])
console.log(iterator.next().value)
// 'Hello'
console.log(iterator.next().value)
// 'world'
console.log(iterator.next().done)
// true

// Чтобы работать с объектом как с массивом - Array.from(arrayLike[, mapFn[, thisArg]])
let arrayLike2 = {
  0: 'Igor',
  1: 'Saint-Petersburg',
  length: 2,
}

let NowYouAreAnArray = Array.from(arrayLike2);
console.log(NowYouAreAnArray.pop()); // 'Saint-Petersburg'

// mapFn функция необязательный аргумент
let arrayLike3 = {
  0: 'Igor',
  1: 'Saint-Petersburg',
  length: 2,
}

let nowYouAreAnArray = Array.from(arrayLike3, str => str.toUpperCase());
console.log(nowYouAreAnArray); // [ 'IGOR', 'SAINT-PETERSBURG' ]

Array.from() // TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))