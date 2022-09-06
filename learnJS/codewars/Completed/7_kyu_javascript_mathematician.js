// https://www.codewars.com/kata/55c211cce1ef691d9b000061

function calculate(...a) {
  return function (...b) {
    let arrOfNumbers = [...a, ...b];
    return arrOfNumbers.reduce((acc, currentValue) => acc + currentValue);
  };
}
