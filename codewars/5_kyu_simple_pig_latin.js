// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  const end = "ay";
  const arrFromString = str.split(" ");

  const result = arrFromString.map((elem) => {
    const arrWithEnd = elem + elem[0] + end;

    return elem !== "!" && elem !== "?" ? arrWithEnd.slice(1) : elem;
  });

  return result.join(" ");
}

console.log(pigIt("Pig latin is cool")); //'igPay atinlay siay oolcay'
console.log(pigIt("O tempora o mores !")); // 'Oay emporatay oay oresmay !'
