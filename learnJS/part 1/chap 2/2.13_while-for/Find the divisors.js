//https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(integer) {
  let result = []
  
  for (let i = 2; i < integer; i++)
    if (integer % i == 0) {
      result.push(i) 
    } if (result.length == 0) {
    return `${integer} is prime`
  } else {
  return result;
  }
};