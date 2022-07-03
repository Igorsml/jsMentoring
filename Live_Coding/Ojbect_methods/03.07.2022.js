'use strict'
// Product's name length > 5 multiply 2

// variant 1
let prices1 = {
  banana: 1,
  orange: 2,
  meat: 4
};

let prices2 = {
  milk: 3,
  cheese: 5,
  cucumber: 15,
  potato: 9,
  pepper: 4,
  tomato: 7,
  onion: 4
};

// Product's name length > 5
function doublePrices(o) {
  let objEntrs = Object.entries(prices2);

  for (let pair of objEntrs) {
    if (pair[0].length > 5) pair[1] *= 2;
  }

  return Object.fromEntries(objEntrs)
}

// variant 2
let prices1 = {
  banana: 1,
  orange: 2,
  meat: 4
};

let prices2 = {
  milk: 3,
  cheese: 5,
  cucumber: 15,
  potato: 9,
  pepper: 4,
  tomato: 7,
  onion: 4
};

// Product's name length > 5
function doublePrices(o) {
  return Object.fromEntries(
    Object.entries(o).map(([key, value]) =>
      key.length > 5 ? [key, value * 2] : [key, value]
    )
  );
}