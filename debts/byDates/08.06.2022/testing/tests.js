const sum = require('./index')

// sum
if (sum(2, 3) === 5) {
  console.log('PASS')
} else console.log('FAIL')

if (sum(-2, -3) === -5) {
  console.log('PASS')
} else console.log('FAIL')