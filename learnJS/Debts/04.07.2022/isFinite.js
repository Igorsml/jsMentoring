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
