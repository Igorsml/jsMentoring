"use strict";

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

  const ranksObj = { ...ranks };
  const deckSteveObj = { ...deckSteve };
  const deckJoshObj = { ...deckJosh };

  let steve = 0,
    josh = 0;

  for (const value in deckSteveObj) {
    if (
      ranksObj.indexOf(deckSteveObj[value]) >
      ranksObj.indexOf(deckJoshObj[value])
    ) {
      steve += 1;
    }
    if (
      ranksObj.indexOf(deckSteveObj[value]) <
      ranksObj.indexOf(deckJoshObj[value])
    ) {
      josh += 1;
    }
  }

  return steve > josh
    ? `Steve wins ${steve} to ${josh}`
    : josh > steve
    ? `Josh wins ${josh} to ${steve}`
    : "Tie";
}

console.log(winner(["T", "7", "8"], ["K", "5", "9"]));
