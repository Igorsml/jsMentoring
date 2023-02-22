let string = "weigjeFSDAJIJFEWIJOPesfopkwefEASFOPJKOPJEFWJFEWOP";

function getUpperCaseChars(str) {
  let resultStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      resultStr += str[i];
    }
  }

  return resultStr;
}

console.log(getUpperCaseChars(string));
