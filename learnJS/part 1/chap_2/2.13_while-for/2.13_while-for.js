//https://learn.javascript.ru/while-for#tasks

//task 1
let i = 3;
while (i) {
  alert( i-- );
} // 3, 2, 1 (0 false) || --i will be 2, 1, 0 


//task 2
let i = 0;
while (++i < 5) alert( i ); // 1, 2, 3, 4
// i = 1, сперва произодйте увеличение, после увеличения ++i 5 < 5, остановится на 4

let i = 0;
while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5
// i++ увеличивает, возвращая старое значение. Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 1.


//task 3
for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4
//особенность for, выоплнится в любом случае в начале цикла i = 0, постфиксный или префиксный инкремент не важно 

//task 4: При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i <= 10; i = i + 2) {
  alert (i)
}
//alternative (i % 2 == 0) 


//task 5: for => while
//for
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

//while
let = 0
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//task 6
let num;

do {
  num = prompt("Enter number > 100 please!", '')
} while (num <= 100 && num)


//task 7
let n = 10
let result = 0

for(let i = 2; i <= 10; i++) {
  if (i % 2 == 1) {
    alert(i)
  }
}



