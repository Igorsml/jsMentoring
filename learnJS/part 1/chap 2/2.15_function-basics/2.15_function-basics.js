//https://learn.javascript.ru/function-basics#tasks


/* Task 1 - Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
*/

The else block is optional. You can have if without else

/* Task 2 - if else to ? ternar operator

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/
const checkAge = (age) => (age > 18) ? true : confirm('Родители разрешили?');

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}