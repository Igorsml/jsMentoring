// https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

function multiply(number){
  let numberLength = String(number).length;
  let stringToNumber = +numberLength;
  if (number < 0) {
    return number * Math.pow(5, stringToNumber - 1);
  }
  return number * Math.pow(5, stringToNumber);
}

// genius 
return number * Math.pow(5, Math.abs(number).toString().length);