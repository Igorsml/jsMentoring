// https://www.codewars.com/kata/585a1a227cb58d8d740001c3/train/javascript

function repeater(string, n){
  return string.repeat(n)
}

assert.strictEqual(repeater('a', 5), 'aaaaa')
assert.strictEqual(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa')
assert.strictEqual(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ')


// with arr (not mine)
const repeater = (string, num) => {
  let end = []
  while(end.length < num) {
    end.push(string)
    }
  return(end.join(''))
}