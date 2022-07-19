// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ") ");
  numbers.splice(8, 0, "-");
  return numbers.join("");
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // (123) 456-7890"

//best practice
function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
