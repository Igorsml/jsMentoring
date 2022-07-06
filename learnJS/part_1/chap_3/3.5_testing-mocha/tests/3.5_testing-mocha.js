//https://learn.javascript.ru/testing-mocha#tasks

// Task 1 - Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

/* 
Нет describe. 
Не учитываются отрицательные, дробные числа. 
Нет рпзбтает т описания блоков it, слишком малый диапазон покрытия (всего до 3) 
*/