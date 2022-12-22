function* generator() {
  let count = 1;
  let num;

  for (let i = 1; i < 999999; i++) {
    count = yield i;

    if ((num = count)) {
      yield num;
    }
  }
}

let gen = generator();

gen.next().value; // "Gen => 1"
gen.next().value; // "Gen => 2"
gen.next(10).value; // "Gen => 10"

// https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript
