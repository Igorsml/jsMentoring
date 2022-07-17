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