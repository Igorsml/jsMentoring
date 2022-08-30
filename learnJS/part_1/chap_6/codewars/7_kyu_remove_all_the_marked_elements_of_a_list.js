// https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

function removeItem(integer_list, values_list) {
  return integer_list.filter((num) => !values_list.includes(num));
}

// CW solution
Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter(function (element) {
    return values_list.indexOf(element) === -1;
  });
};
