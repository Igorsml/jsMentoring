// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  let sum = 0;
  if (n === 1) {
    return customers.map(function (customer) {
      sum += customer;
    });
  }
  let result = 0;
  if (n >= 2) {
    for (let i = 0; i < customers.length; i += 2) {
      if (customers[i] >= customers[i + 1]) {
        result += customers[i];
      }
    }
  }
  return result;
}

// #2
function queueTime(customers, n) {
  console.log(customers, n);
  if (customers.length === 0) {
    return 0;
  }
  if (n === 1) {
    return customers.reduce((sum, customer) => sum + customer);
  }
  if (n >= 2 && n < 99) {
    let result = 0;
    for (let i = 0; i < customers.length; i += 2) {
      if (customers[i] >= customers[i + 1]) {
        result += customers[i];
      }
    }
    return result;
  } else if (n >= 99) {
    return Math.max(...customers);
  }
}
