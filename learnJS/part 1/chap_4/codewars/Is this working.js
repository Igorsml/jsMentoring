//https://www.codewars.com/kata/559f8d487fa8511c43000118/train/javascript

function Counter() {
  this.count = 0;

  this.updateCount = () => {
    this.count++
  };
}

// Best practices
function Counter() {
  this.count = 0;

  this.updateCount = () => this.count++;
}