// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

const duplicateEncode = (word) => {
  return word
    .toUpperCase()
    .split("")
    .reduce((acc, char, index, arr) => {
      const symbol =
        arr.filter((letter) => letter === char).length < 2 ? "(" : ")";
      return acc + symbol;
    }, "");
};

duplicateEncode("recede"); //

Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter(values_list);
};
