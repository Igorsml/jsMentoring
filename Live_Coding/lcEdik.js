// Задача 1. Палиндром - слово или текст, одинаково читающееся в обоих направлениях
function palindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr ? true : false;
}

console.log(palindrome("12321")); // true;
console.log(palindrome("aboba")); // true
console.log(palindrome("anna")); // true;
console.log(palindrome("ya ebal ,a, labe ay")); // true;
console.log(palindrome(".!!.")); // true;
console.log(palindrome("123456")); // false;
console.log(palindrome("walter")); // false;

// Задача 2. Анаграмма - перестановка букв слова, что бы в результате получить другое слово
function anagram(s1, s2) {
  if (s1.length === "" && s2.length === "") return true;
  if (s1.length !== s2.length) return false;

  const sortedStr = s1.split("").sort().join("");
  const sortedStr2 = s2.split("").sort().join("");

  return sortedStr === sortedStr2 ? true : false;
}

console.log(anagram("", "")); // true
console.log(anagram("123", "123")); // true
console.log(anagram("aboba", "baoab")); // true
console.log(anagram("bumdle", "dumble")); // true
console.log(anagram("a", "")); // false
console.log(anagram("ab", "a")); // false
console.log(anagram("ab", "cd")); // false
console.log(anagram("codewars", "hackerrank")); //false

// Задача 3. Панаграмма - текст, использующий все буквы алфавита (усложненная версия https://www.codewars.com/kata/545cedaa9943f7fe7b000048)
function isPangram(string) {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const clearStr = string.toLowerCase().replace(/\s/g, "");

  for (let i = 0; i < lowerCaseLetters.length; i++) {
    if (clearStr.indexOf(lowerCaseLetters[i]) === -1) {
      return false;
    }
  }

  return true;
}

console.log(isPangram("This isnt a pangram!")); // false
console.log(isPangram("abcdefghijklmopqrstuvwxyz")); // false
console.log(isPangram("Detect Pangram")); // false
console.log(isPangram("abcdefghijk lmnopqrstuvwxyz")); // true
console.log(isPangram("Cwm fjord bank glyphs vext quiz")); // true
console.log(isPangram("Pack my box with five dozen liquor jugs.")); // true
console.log(isPangram("How quickly daft jumping zebras vex.")); // true
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ")); // true
console.log(isPangram("AbCdEfGhIjKlM zYxWvUtSrQpOn")); // true

// Задание 4. Палиндром (с доп условиями)
// - Не учитывать пробелы и знаки
// Do geese see God? (true)
// - Ограничение по памяти О(1)

// Задача 5. Поверните данную строку в правильном направлении, периодически удаляя одну букву с конца строки и прикрепляя ее к передней части.
let str = "cat";

function rotateString(str) {
  const strArr = str.split("");
  let popped = "";

  for (let i = 0; i < strArr.length; i++) {
    popped = strArr.pop(strArr.at(-1));
    strArr.unshift(popped);
    console.log(strArr.join(""));
  }

  return "end";
}
rotateString(str);
/**
 * Output:
 * tca
 * atc
 * cat
 */

// 6) Хард (не обязательно). Напишите конструктор для узлов бинарного дерева.
// new CreateNode(data,left,right);
// Создайте бинарное дерево глубиной 10, и напишите функцию которая считает максимальную глубину дерева
// let a1 = new CreateNode(10,null,null);
// let a2 = new CreateNode(9,a1,null);
// let a3 = new CreateNode(8,a2,null);
// let a4 = new CreateNode(7,a3,null);
function CreateNode(data, left, right) {}

function maxDepth(node) {}

console.log(maxDepth());
