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
  const deckLength = deckSteve.length;
  const ranks = {
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    T: 9,
    J: 10,
    Q: 11,
    K: 12,
    A: 13,
  };

  let steve = 0,
    josh = 0;

  for (let i = 0; i < deckLength; i++) {
    let steveMap = ranks[deckSteve[i]];
    let joshMap = ranks[deckJosh[i]];

    if (steveMap > joshMap) {
      steve += 1;
    } else if (steveMap < joshMap) {
      josh += 1;
    }
  }

  return steve > josh
    ? `Steve wins ${steve} to ${josh}`
    : josh > steve
    ? `Josh wins ${josh} to ${steve}`
    : "Tie";
}
console.log(winner(["T", "9"], ["T", "8"])); // Steve wins 1 to 0
console.log(winner(["T", "7", "8"], ["K", "5", "9"])); // Josh

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
