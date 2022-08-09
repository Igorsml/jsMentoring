"use strict";

// создадим объект Date через конструктор new Date, получим текуюущую дату и время
const currentDate = new Date();
console.log(currentDate); // 2022-08-08T11:37:38.297Z
console.log(currentDate.getFullYear()); // 2022
console.log(currentDate.getMonth()); // 7 (07 месяц, июль)
console.log(currentDate.getDate()); // 8 (8 августа)
console.log(currentDate.getDay()); // 1 (пн , потому что вс это 0)
console.log(currentDate.getHours()); // 15
console.log(currentDate.getMinutes(), currentDate.getSeconds()); // 1
console.log(currentDate.getMilliseconds()); // 872
console.log(currentDate.getTime()); // 1659960557839 - количество миллисекунд, прошедших с 1 января 1970 года UTC+0.

// 1 января 1970 это начао таймстампа от которо ведется отсчёт, если делать отрицательным то только вручную
const Jan01_1970 = new Date(0);
console.log(Jan01_1970); // 1970-01-01T00:00:00.000Z

const today = new Date();
today.setFullYear(2013);
console.log(today.getFullYear()); // 2013

// удобно что у дат есть автоисправление
const dateMyBirthday = new Date(2013, 0, 99);
console.log(dateMyBirthday.getFullYear()); // 2013-04-08T20:00:00.000Z

// Date.parse(str) считывает дату из строки
const timestamp = new Date(2013, 0, 0, 0);
console.log(timestamp); // 2012-12-30T20:00:00.000Z
console.log(Date.parse(timestamp)); // 1356897600000
console.log(new Date(Date.parse(timestamp))); // 2012-12-30T20:00:00.000Z

// compare dates
const firstDate = new Date("2022-03-15");
const secondDate = new Date("2022-03-13");

console.log(firstDate < secondDate); // false
console.log(firstDate > secondDate); // true

const equalDate1 = new Date("2022-03-13");
const equalDate2 = new Date("2022-03-13");
console.log(equalDate1.getTime() == equalDate2.getTime()); // true
