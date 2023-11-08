//Дана структура данных в виде дерева:

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 4 }, { value: 5 }],
    },
    {
      value: 3,
      children: [{ value: 6 }, { value: 7 }],
    },
  ],
};

// Необходимо написать функцию, возвращающую значения всех вершин дерева:
function getTreeValues(obj) {
  const result = [];

  for (const property in obj) {
    typeof obj[property] === "object"
      ? result.push(...getTreeValues(obj[property]))
      : result.push(obj[property]);
  }

  return result;
}

console.log(getTreeValues(tree)); // => [1, 2, 3, 4, 5, 6, 7]

// Написать функцию которая возвращает массив, содержащий все дубликаты, или пустой массив, если нет дубликатов.
const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];
const arr1 = [1, 2, 3, 4, 5, 6];

function returnMultipleDupesArray(arr) {
  let duplicates = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      if (duplicates.indexOf(arr[i]) === -1) {
        duplicates.push(arr[i]);
      }
    } else {
      seen[arr[i]] = [];
    }
  }

  return duplicates;
}

console.log(returnMultipleDupesArray(arr)); // [1, 6, 7, 10]
console.log(returnMultipleDupesArray(arr1)); // []
