const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
};

console.log(sequenceSum(1, 5)); // 15
