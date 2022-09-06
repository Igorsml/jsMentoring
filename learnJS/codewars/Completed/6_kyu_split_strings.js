// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str) {
  let result = "";

  if (str.length) {
    if (str.length % 2 === 1) {
      result = str + "_";
      return result.match(/.{2}/g);
    } else {
      return str.match(/.{2}/g);
    }
  } else {
    return [];
  }
}
