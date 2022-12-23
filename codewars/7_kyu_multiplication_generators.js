// https://www.codewars.com/kata/5637ead70013386e30000027/train/javascript

function* generator(a) {
  let b = 1;
  let c;

  while (true) {
    c = a * b;
    yield `${a} x ${b} = ${c}`;
    ++b;
  }
}

let gen = generator(1);

console.log(gen.next().value); //  '1 x 1 = 1'
console.log(gen.next().value); //  '1 x 2 = 1'
console.log(gen.next().value); //  '1 x 3 = 1'
