const baseUrl = "https://prnt.sc/";

function generateScreenshot() {
  const alphabetLastChar = 65;

  const caps = [...new Array(26)].map((val, i) =>
    String.fromCharCode(i + alphabetLastChar)
  );
  const alphabet = caps.concat(caps.map((letter) => letter.toLowerCase()));
  const randomNumbers = Math.floor(Math.random() * 1e4);
  const shuffledAlphabet = alphabet.sort(() => 0.5 - Math.random());
  const randomChars = shuffledAlphabet.slice(0, 2).join("");

  return `${baseUrl}${randomChars}${randomNumbers}`;
}
// generate 3 random screenshots
console.log(generateScreenshot());
console.log(generateScreenshot());
console.log(generateScreenshot());
