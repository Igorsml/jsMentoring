//https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d

function killer(suspectInfo, dead) {
  for (const [name, list] of Object.entries(suspectInfo)) {
    if (dead.every((e) => list.includes(e)))
      return name
  }
}

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every