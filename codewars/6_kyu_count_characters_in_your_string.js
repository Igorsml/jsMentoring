// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  const result = {};
  let set = new Set(string);

  console.log(set);

  let setToObject = {};
  [...set].forEach((el) => (setToObject[el] = el));
  console.log(obj);

  return Object.values(string);
}
