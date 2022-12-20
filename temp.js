function generateScreenshot() {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  const alphabet = caps.concat(caps.map((letter) => letter.toLowerCase()));

  const path = "https://prnt.sc/";
  const randomNum = Math.floor(Math.random() * 1e6);
  const shuffledAlphabet = [...alphabet].sort(() => 0.5 - Math.random());
  const char = shuffledAlphabet.slice(0, 2).join("");

  return window.open(`${path}${char}${randomNum}`).focus();
}

// generate 3 random screenshots
generateScreenshot();
generateScreenshot();
generateScreenshot();
