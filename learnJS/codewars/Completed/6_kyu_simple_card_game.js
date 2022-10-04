// https://www.codewars.com/kata/53417de006654f4171000587/train/javascript

// избавиться от дублирования кода 8-24 и 28-44
// переписать if’ы на switch, уведиться что работает,
function winner(deckSteve, deckJosh) {
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];
  let Steve = 0,
    Josh = 0;

  deckSteve.forEach((value, i) => {
    const value2 = deckJosh[i];

    switch (true) {
      case ranks.indexOf(value) > ranks.indexOf(value2):
        Steve += 1;
        break;

      case ranks.indexOf(value2) > ranks.indexOf(value):
        Josh += 1;
        break;
    }
  });

  return Steve > Josh
    ? `Steve wins ${Steve} to ${Josh}`
    : Josh > Steve
    ? `Josh wins ${Josh} to ${Steve}`
    : "Tie";
}

console.log(winner(["T", "7", "8"], ["K", "5", "9"]));

// потом переписать на объект ключ-значение, убедиться что работает
function winner(deckSteve, deckJosh) {
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];
  const deckSteveObj = { ...deckSteve };
  const deckJoshObj = { ...deckJosh };

  let Steve = 0,
    Josh = 0;

  for (const value in deckSteveObj) {
    if (
      ranks.indexOf(deckSteveObj[value]) > ranks.indexOf(deckJoshObj[value])
    ) {
      Steve += 1;
    }
    if (
      ranks.indexOf(deckSteveObj[value]) < ranks.indexOf(deckJoshObj[value])
    ) {
      Josh += 1;
    }
  }

  return Steve > Josh
    ? `Steve wins ${Steve} to ${Josh}`
    : Josh > Steve
    ? `Josh wins ${Josh} to ${Steve}`
    : "Tie";
}

console.log(winner(["T", "7", "8"], ["K", "5", "9"]));

// previous variant
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

// shit happens
function winner(deckSteve, deckJosh) {
  let Steve = 0;
  let Josh = 0;

  deckSteve.forEach((value, i) => {
    const value2 = deckJosh[i];

    switch (true) {
      case value === "T":
      case value2 === "T":
        10;
        break;
      case value === "J":
      case value2 === "J":
        11;
        break;

      case value === "Q":
      case value2 === "Q":
        12;
        break;

      case value === "K":
      case value2 === "K":
        13;
        break;

      case value === "A":
      case value2 === "A":
        14;
        break;

      default:
        value, value2;
        console.log("value, value2:", value, value2);
    }

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

console.log(winner(["T", "7", "8"], ["K", "5", "9"]));
