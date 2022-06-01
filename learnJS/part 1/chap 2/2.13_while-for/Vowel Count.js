//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  let vowelsCount = 0;
  let vowelsArr = ['a', 'e', 'i', 'o', 'u']
  
  for(let i = 0; i <= str.length; i++) {
    for(let j = 0; j < vowelsArr.length; j++)
    if (str[i] == vowelsArr[j]) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}