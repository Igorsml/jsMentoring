// https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

function sortByBit(arr) {
  arr.forEach((element) => {
    return Math.clz32(element).sort((a, b) => a - b);
  });
}
