//https://learn.javascript.ru/ifelse#tasks

//task 1
if ("0") {
  console("Hi!");
}
//да, т.к. строка не пустая = true

//task2
let companyName = prompt("What the official name of JavaScript?", "");
if (companyName == "Netscape") {
  alert("Correct!");
} else {
  alert("Lol! ECMAScript!");
}

//task 3
let value = prompt("Enter your number", "");
if (value > 0) {
  alert("1");
} else if (value < 0) {
  alert("-1");
} else {
  alert("0");
}

//task 4
let result;

if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}

result = a + b < 4 ? "Little" : "Too mach";

//task 5
let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

//rewrite
message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
