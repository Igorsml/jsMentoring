'use strict'

// В отличии от глобальной функции isFinite(), этот метод принудительно не преобразует параметр в число.

console.log(Number.isFinite('42'));
console.log(Number.isFinite(42));
console.log(isFinite('42'));
console.log(isFinite(42));

Number.isFinite(3.14) // true
Number.isFinite(10e5) // true
Number.isFinite(0) // true

Number.isFinite(-Infinity) // false
Number.isFinite([]) // false
Number.isFinite("Двадцать пять") // false

// Использование глобальной функции isFinite
isFinite("Сорок") // false
isFinite(50) // true
isFinite("101") // true
isFinite("10e3") // true

// Number.isNaN vs isNaN. Метод Number.isNaN() определяет, является ли переданное значение NaN. Это более надёжная версия оригинальной глобальной функции isNaN().
/// При использовании глобальной функции isNaN() это всё будет true
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

/// А это всё в любом случае будет false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');
