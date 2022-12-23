/* Напишите функцию генератор getReverseListValues, которая принимает 
list (связный список) и возвращает значения всех нод в обратном порядке.*/

const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function* getReverseListValues1(list) {
  if (list.next) {
    yield* getReverseListValues1(list.next);
  }

  yield list.value;
}

console.log(...getReverseListValues1(linkedList)); // 4 3 2 1
