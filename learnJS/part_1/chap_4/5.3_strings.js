'use strict'

const number = 42;

const str = 'single-quoted'
const str1 = "double-quoted"
const str2 = `backticks catch ${number}` 
console.log(str2); // backticks catch 42

const dogList = `
  Timmy
  Miley
`
console.log(dogList); // Timmy *новая строка* Miley

// empty string, string with spaces
const empty = '' 
const oneSpace = ' ' 
const spaces = '   '

const catList = 'Cat: Miriam \n Archi';
console.log(catList); // Cat: Miriam *новая строка* Archi

// Символ экранирования
console.log('I\'m Igor') // I'm Igor
console.log(`I'm Igor`) // I'm Igor
console.log(`I'\\m Igor`) // I'\m Igor

// string length
const empty = '' 
const oneSpace = ' ' 
const spaces = '   '
console.log(empty.length); // 0
console.log(`My\n`.length); // 3 спец символ не учитывается
console.log(oneSpace.length); // 1
console.log(spaces.length); // 3
console.log(spaces.length - oneSpace.length); // 2

// Получить символ строки ___________________________________________

let str = `Hello`;

// получаем первый символ
console.log( str[0] ); // H
console.log( str.charAt(0) ); // H

// получаем последний символ
console.log( str[str.length - 1] ); // o

let str = `Hello`;
console.log(str[1000]); // undefined
console.log(str.charAt[1000]); // '' пустая строка

// еще способ посвильно вывести
for (let char of "Hello") {
  console.log(char); // H,e,l,l,o 
}

// Поскольку строка иммутабельна, заменить нельзя символ
let str = 'Hi';

str[0] = 'T'; // остаётся H 
console.log(str[0]); // не работает

let str = 'Hi';
str = 'T' + str[1]; // заменяем строку
console.log(str); // Ti

// change register str
console.log('want grow'.toUpperCase()); // WANT GROW
console.log('want small'.toLowerCase()); // want small
console.log('igor'[0].toUpperCase()); // Igor

// str.indexOf (ищет подстроку в строке )
let str = 'Widget with id';
console.log(str.indexOf('Widget')); // 0, потому что подстрока 'Widget' найдена в начале
console.log(str.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру
console.log(str.indexOf('widget', 99)); // -1, совпадений нет, поиск чувствителен к регистру
console.log( str.indexOf('id')); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
console.log( str.indexOf('id', 2)); // 12 (с символа № 0 → 12)
console.log( str.indexOf('id', 99)); // -1

// побитовое НЕ
console.log(~1); // -2 | -(2+1)
console.log(~3.42); // -4 | -(3+1)
console.log(~-1); //

// более современный метод .includes(substr, pos)
console.log('Abobus has abob'.includes('abob')); // true
console.log('Abobus has abob'.includes('abob', 6)); // true, после Abobus

// str.startsWith и str.endsWith - начинается ли и заканчивается ли строка определённой строкой:
console.log('Abobus has abob'.startsWith('Abob')); // true
console.log('Abobus has abob'.endsWith('has')); // false
console.log('Abobus has abob'.endsWith('abob')); // true
console.log('Abobus has abob'.endsWith('Abob')); // false


// substring, substr и slice - получение подстроки
// slice
let str = 'abobus' // 5
console.log(str.slice(1)); // 'bobus'
console.log(str.slice(1, 5)); // bobu
console.log(str.slice(-5, -2)); // 'bob

// str.substring(start [, end])
