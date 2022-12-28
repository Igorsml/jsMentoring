function compress(arr) {
  let ranges = [];
  let restart;
  let render;

  arr.forEach((number, index) => {
    if (number === arr[index + 1] || number === arr[index - 1]) {
    restart = arr[i];
    render = restart;

    // [1, 2, 2, 2, 3]
    if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
      render = arr[i + 1];
      i++;
    }
  } 
}
  ranges.push(restart == render ? `${restart}` : `${restart}*${render}`);

  // for (let i = 0; i < arr.length; i++) {
  //   restart = arr[i];
  //   render = restart;

  //   // example 3 - 2 == 1
  //   while (arr[i + 1] - arr[i] == 1) {
  //     render = arr[i + 1];
  //     i++;
  //   }
  //   ranges.push(restart == render ? `${restart}` : `${restart} - ${render}`);
  // }

  return ranges;
}

// console.log(compress([2, 3, 4, 5, 10, 18, 19, 20])); //  "2-5", "10", "18-20"
console.log(compress([1, 2, 2, 2, 3, 5, 5, 5])); //  "1,2*3,3"
