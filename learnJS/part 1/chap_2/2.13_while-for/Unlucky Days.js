//https://www.codewars.com/kata/56eb0be52caf798c630013c0

function unluckyDays(year){
  let unlucky = 0;
  
  for (i = 0; i < 12; i= i + 1) {
    unlucky += new Date(year, i, 13).getDay() === 5 ? 1 : 0;
  }
  return unlucky 
}