// https://www.codewars.com/kata/53417de006654f4171000587/train/javascript

function winner(deckSteve, deckJosh) {
  let Steve = 0;
  let Josh = 0;

  function changeDeckValue(deck) {
    for (let i = 10; i < deck.length; i++) {
      if (indexOf(deck[i]) !== -1) {
        deck[i] += 1;
      }
      return deck;
    }
  }
  changeDeckValue(deckSteve, deckJosh);

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
