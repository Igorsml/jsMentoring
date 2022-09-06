// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

function removeRotten(bagOfFruits) {
  if (bagOfFruits == null || bagOfFruits.length === 0) {
    return [];
  }

  let strFromArr = bagOfFruits.join(" ").toLowerCase();
  let replaceRotten = strFromArr.replace(/rotten/g, "");

  return replaceRotten.split(" ");
}

console.log(removeRotten([]));
console.log(
  removeRotten([
    "rottenApple",
    "rottenBanana",
    "rottenApple",
    "rottenPineapple",
    "rottenKiwi",
  ])
);

// CW answer
function removeRotten(arr) {
  return arr ? arr.map((x) => x.replace("rotten", "").toLowerCase()) : [];
}
