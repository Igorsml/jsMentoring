// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
return str
  .split('') // массив из букв
  .filter(el => vowels.indexOf(el.toLowerCase()) == -1) // убираем гласные
  .join(''); // соединяем обратно в строку
}

disemvowel("This website is for losers LOL!"); // "Ths wbst s fr lsrs LL!"