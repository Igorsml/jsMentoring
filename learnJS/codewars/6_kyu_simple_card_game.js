// https://www.codewars.com/kata/53417de006654f4171000587/train/javascript

function winner(deckSteve, deckJosh) {
  let Steve = 0;
  let Josh = 0;
  let indexJ = deckSteve.indexOf("J");
  let indexQ = deckSteve.indexOf("Q");
  let indexK = deckSteve.indexOf("K");
  let indexA = deckSteve.indexOf("A");

  if (indexJ !== -1) {
    deckSteve[index] = "10";
    deckJosh[index] = "10";
  }
  if (indexQ !== -1) {
    deckSteve[index] = "11";
    deckJosh[index] = "11";
  }
  if (indexK !== -1) {
    deckSteve[index] = "12";
    deckJosh[index] = "12";
  }
  if (indexA !== -1) {
    deckSteve[index] = "13";
    deckJosh[index] = "13";
  }

  let result = deckSteve.every(function (element, i) {
    if (element === deckJosh[i]) {
      ("Tie");
    } else if (element > deckJosh[i]) {
      Steve += 1;
    } else if (element < deckSteve[i]) {
      Josh += 1;
    }
  });
  return `Steve win ${Steve} to ${Josh}`;
}

winner([
  ["A", "7", "8"],
  ["K", "5", "9"],
]); // 'Steve wins 2 to 1'

// for (let i = 0; i <= deckSteve.length; i++) {
//   for (let j = 0; j <= deckJosh.length; j++) {
//     if (deckSteve[i] > deckJosh[j]) {
//       Steve += 1;
//     } else {
//       Josh += 1;
//     }
//   }
// }

// for (let i = 0; i <= deckSteve.length; i++) {
//   if (deckSteve[i] > deckJosh[i]) {
//     Steve += 1;
//   } else if (deckSteve[i] === deckJosh[i]) {
//     return "Tie";
//   } else {
//     Josh += 1;
//   }
//   result = `Steve wins ${Steve} to ${Josh}`;
// }
// return result;
