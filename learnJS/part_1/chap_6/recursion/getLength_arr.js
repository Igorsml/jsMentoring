// https://edabit.com/challenge/yXSTvCNen2DQHyrh6

function getLength(arr) {
  return arr.reduce((acc, value) => {
    return acc + (Array.isArray(value) ? getLength(value) : 0);
  }, arr.length);
}

getLength([1, [2, 3]]);
getLength([1, [2, [3, 4]]]);
