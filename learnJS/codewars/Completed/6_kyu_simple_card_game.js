// https://www.codewars.com/kata/53417de006654f4171000587/train/javascript

// избавиться от дублирования кода 8-24 и 28-44
// переписать if’ы на switch, уведиться что работает,
// потом переписать на объект ключ-значение, убедиться что работает

function winner(deckSteve, deckJosh) {
  const arrCards = [
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
  let Steve = 0;
  let Josh = 0;

  switch (true) {
    case deckSteve.indexOf("T"):
    case deckJosh.indexOf("T"):
      deckSteve.indexOf(10);
      deckJosh.indexOf(10);
      break;

    case deckSteve.includes("J"):
    case deckJosh.includes("J"):
      deckSteve.indexOf(11);
      deckJosh.indexOf(11);
      break;

    case deckSteve.includes("Q"):
    case deckJosh.includes("Q"):
      deckSteve.indexOf(12);
      deckJosh.indexOf(12);
      break;

    case deckSteve.includes("K"):
    case deckJosh.includes("K"):
      deckSteve.indexOf(13);
      deckJosh.indexOf(13);
      break;

    case deckSteve.includes("A"):
    case deckJosh.includes("A"):
      deckSteve.indexOf(14);
      deckJosh.indexOf(14);
      break;
    default:
      deckSteve, deckJosh;
  }

  console.log(deckSteve, deckJosh);

  deckSteve.forEach((value, i) => {
    const value2 = deckJosh[i];

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
