// https://www.codewars.com/kata/53a20af2e0afd3e2cd000333

const say = function (string1) {
  return function (string2) {
    return string1 + " " + string2;
  };
};
