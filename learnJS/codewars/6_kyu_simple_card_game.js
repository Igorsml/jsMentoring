// https://www.codewars.com/kata/53417de006654f4171000587/train/javascript

function winner(deckSteve, deckJosh) {
  let Steve = 0;
  let Josh = 0;

  const swappedValueDeckSteve = deckSteve.map((elem) => {
    if (elem === "T") {
      return 10;
    }
    if (elem === "J") {
      return 11;
    }
    if (elem === "Q") {
      return 12;
    }
    if (elem === "K") {
      return 13;
    }
    if (elem === "A") {
      return 14;
    } else {
      return elem;
    }
  });

  const swappedValueDeckJosh = deckJosh.map((elem) => {
    if (elem === "T") {
      return 10;
    }
    if (elem === "J") {
      return 11;
    }
    if (elem === "Q") {
      return 12;
    }
    if (elem === "K") {
      return 13;
    }
    if (elem === "A") {
      return 14;
    } else {
      return elem;
    }
  });

  console.log(swappedValueDeckSteve, swappedValueDeckJosh);

  swappedValueDeckSteve.forEach((value, i) => {
    const value2 = swappedValueDeckJosh[i];

    if (value > value2) {
      Steve += 1;
    }
    if (value < value2) {
      Josh += 1;
    }
  });

  if (Steve === Josh) return "Tie";

  return Steve > Josh
    ? `Steve wins ${Steve} to ${Josh}`
    : `Josh wins ${Josh} to ${Steve}`;
}
