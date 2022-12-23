function* generator() {
  let count = 1;

  while (true) {
    let introNum = yield count++;

    if (introNum) count = introNum;
  }
}

let gen = generator();

gen.next().value; // "Gen => 1"
gen.next().value; // "Gen => 2"
gen.next(10).value; // "Gen => 10"

// https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript
