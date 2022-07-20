// https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr) {
  const minValue = arr.sort((a, b) => b - a);
  const maxValue = arr.sort((a, b) => a - a);
  const getMinValue = minValue[arr.length - 1];
  const getMaxValue = maxValue[0];

  return Array.of(getMinValue, getMaxValue);
}

minMax([1, 2, 3, 4, 5]); // [1,5]
minMax([2334454, 5]); // [5,2334454]
minMax([1]); // [1,1]
