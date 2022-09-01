// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  let arr = s.split(" ");

  const result = arr.reduce((a, b) => (a.length <= b.length ? a : b));
  return result.length;
}

// CW solution

function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}
