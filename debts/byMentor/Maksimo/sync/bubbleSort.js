// создать массив из 100 элементов и заполнить рандомными числами
// написать алгоратим сортировки

function generateArr() {
  const arr = [];

  for (let i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * 100 - 50);
  }

  function sortArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (Math.abs(arr[j]) < Math.abs(arr[j + 1])) {
          let temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  }

  sortArr(arr);

  return arr;
}

console.log(generateArr());
