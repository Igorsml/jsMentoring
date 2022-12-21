function* generator() {
  let num;
  let count = 1;

  console.log(num);

  while (count) {
    yield count++;
  }

  if (count !== num) {
    let num = yield;
  }
}

let gen = generator();

gen.next().value; // "Gen => 1"
gen.next().value; // "Gen => 2"
gen.next(10).value; // "Gen => 10"
