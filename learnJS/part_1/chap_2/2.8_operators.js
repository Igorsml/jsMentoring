// https://learn.javascript.ru/operators#tasks

//task 1
let a = 1,
  b = 1;

let c = ++a; // 2
let d = b++; // 1

//task 2
let a = 2;

let x = 1 + (a *= 2); // a = 4; x = 5

//task 3
"" + 1 + 0; // 10
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // 9px
"$" + 4 + 5; //$45
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "  -9  5"
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // NaN

//null становится 0 после численного преобразования.
//undefined становится NaN после численного преобразования.
//Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.

//task 4
let a = Number(prompt("Первое число?", 1));
let b = +prompt("Второе число?", 2);

alert(a + b); // 3