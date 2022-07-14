// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
return str
  .split('')
  .filter(el => vowels.indexOf(el.toLowerCase()) == -1)
  .join('');
}

disemvowel("This website is for losers LOL!"); // "Ths wbst s fr lsrs LL!"