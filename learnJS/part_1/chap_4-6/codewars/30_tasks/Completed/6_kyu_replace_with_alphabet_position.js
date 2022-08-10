// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    // integer between 0 and 65535 representing the UTF-16 code unit at the given index
    let position = text.toUpperCase().charCodeAt(i);
    //charCode of A is 65, so if you want it to be 1, you need to subtract 64 from it
    if (position > 64 && position < 91) {
      result += position - 64 + " ";
    }
  }

  return result.slice(0, result.length - 1);
}
