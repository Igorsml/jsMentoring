'use strict'

// Task 1 — Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. 

const makeFirstCharBigger = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

makeFirstCharBigger('igor'); // Igor
makeFirstCharBigger(''); // '' , чтобы не получить ошибку undefiend

// Task 2 — Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

const checkSpam = (str) => {
  let strToLowerCase = str.toLowerCase();

  if(strToLowerCase.includes('viagra') || strToLowerCase.includes('xxx')) {
    return true;
  }
  return false;
}

checkSpam('buy ViAgRA now'); // true
checkSpam('free xxxxx'); // true
checkSpam('innocent rabbit'); // false

// Task 3 — Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

const truncate = (str, maxlength) => {
  let result = '';

  if(str.length > maxlength) {
    result += str.slice(0, maxlength - 1) + '...'
  }
  return result;
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20); // 'Вот, что мне хотело…'

// Task 4 — Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

const extractCurrencyValue = (str) => {
  return +str.slice(1)
}

extractCurrencyValue('$42'); // 42
