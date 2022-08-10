// https://www.codewars.com/kata/565b9d6f8139573819000056/train/javascript

function decode(message) {
  let result = "";
  let arrMessage = message.split("");
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ].reverse();

  for (let i = 0; i < arrMessage.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (arrMessage[i] !== alphabet[j]) {
        result += alphabet[j];
      }
    }
  }
  return result.toLowerCase();
}

decode("svool"); // "hello"
