//https://learn.javascript.ru/logical-operators#tasks

//task 1
alert(null || 2 || undefined); // 2
//null, undefined = false

//task 2
alert(alert(1) || 2 || alert(3)); // 1, 2
// alert return undefined, stopped on 2

//task 3
alert(1 && null && 2); // null
//null first falsy parameter

//task 4
alert(alert(1) && alert(2)); // 1, undefined
// end of 1st parameter

//task 5
alert(null || (2 && 3) || 4); // 3
// && > || , null || 3 || 4 => 3

//task 6
let age = 29;
if (age >= 14 && age <= 90) {
  alert("Too old © GOT");
}

//task 7
//Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно. 
//Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)

//task 8
if (-1 || 0) alert("first"); // -1 is true
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third"); // 1, && > ||

//task 9
let userName = prompt('Who\'\s there?', '')

if (userName === 'Admin') {

  let password = prompt('Password?', '') 

  if (password === 'admin') {
    alert('hello boss')
  } else if (password === 'disable') {
    alert('disabled')
  } else {
    alert('password error')
  } 
} else if (userName === '' || userName === null ) {
    alert('disabled')
  } else {
    alert('I don\'\t know you')
  }


