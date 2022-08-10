"use strict";

// task #1 Создайте дату. Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
const date = new Date(2013, 1, 20, 3, 12);
console.log("date:", date);

// task #2 Покажите день недели. Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
const date = new Date(2022, 0, 3);

const getWeekDay = (day) => {
  switch (day.getDay()) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("404 day");
  }
};

getWeekDay(date); // Monday

// answer
function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
console.log(getWeekDay(date)); // ПТ

/* task #3 День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date. */

const getLocalDay = (date) => {
  let day = date.getDay();
  return day === 0 ? (day = 7) : day;
};

let date = new Date(2022, 7, 7); // 7 августа 2022 года
console.log(getLocalDay(date)); // вс, нужно показать 7

/* task #4 Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое. Функция должна надёжно работать при значении days=365 и больших значениях: 
P.S. Функция не должна изменять переданный ей объект date.*/

const getDateAgo = (date, days) => {
  const daysAgo = date.setDate(date.getDate() - days);
  let result = new Date(daysAgo);
  return `${days} days ago was ${result}`;
};

const today = new Date();
console.log(getDateAgo(today, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(today, 30)); // 31, (31 Dec 2014)
console.log(getDateAgo(today, 365)); // 2, (2 Jan 2014)

/* task #5  Последнее число месяца?
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль). */

const getLastDayOfMonth = (month, year) => {
  // using 0 as the day it will give us the last day of the prior
  return new Date(year, month + 1, 0).getDate();
};

console.log(getLastDayOfMonth(1, 2012)); // 29, высокосный
console.log(getLastDayOfMonth(7, 2022)); // 31

/* task #6  Сколько сегодня прошло секунд?
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

const getSecondsToday = () => {
  let now = new Date();

  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
};

console.log(getSecondsToday()); // 55682

/* task #7 Сколько секунд осталось до завтра?
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:
getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

const getSecondsToTomorrow = () => {
  const today = new Date();

  return (
    24 * 3600 -
    (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds())
  );
};

console.log(getSecondsToTomorrow()); //

/* task #8 Форматирование относительной даты.
Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:*/

function formatDate(date) {
  let now = new Date();
  let difference = now.getTime() - date.getTime();
  if (difference < 1000) {
    return "right now";
  } else if (difference < 60 * 1000) {
    return `${Math.round(difference / 1000)} seconds ago`;
  } else if (difference < 60 * 60 * 1000) {
    return `${Math.round(difference / 60000)} mins ago`;
  } else {
    let day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
    let month = date.getMonth() > 10 ? date.getMonth() : "0" + date.getMonth();
    let year =
      date.getFullYear() > 2010
        ? date.getFullYear() - 2000
        : "0" + (date.getFullYear() - 2000);
    let hours = date.getHours() > 10 ? date.getHours() : "0" + date.getHours();
    let mins =
      date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes();

    return `${day}.${month}.${year} ${hours}:${mins}`;
  }
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
