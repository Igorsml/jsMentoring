/** 
1
напишите функцию которая разворачивает строку
 console.log(reverseString("Hello")); // Output: "olleH"
  console.log(reverseString("OpenAI")); // Output: "IAneuqO"
  console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
  */

function reverseStr(str) {
  if (str === "") return;
  let resultStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    resultStr += str[i];
  }

  return resultStr;
}

console.log(reverseStr("Hello"));


// рекурсивно
function reverseStr(str) {
  return str === "" ? "" : reverseStr(str.substr(1)) + str.charAt(0);
  
}

console.log(reverseStr("Hello"));

/** 
2

Напишите конструктор для узлов бинарного дерева.
new CreateNode(data,left,right);
Создайте бинарное дерево глубиной 10, и напишите функцию которая считает максимальную глубину дерева
*/

function CreateNode (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

let node = new CreateNode (10, null, null);
let node2;

for (let i = 1; i <= 10; i++) {
  let node2 = new CreateNode(i, node, null)
  node = node2;
}

node.left.left.right = new CreateNode(3, null, null);


//
  function getMaxDepth(node) {
    if (node == null)
      return 0;

    let lheight = getMaxDepth(node.left);
    let rheight = getMaxDepth(node.right);

    if (lheight > rheight) {
       return lheight + 1;
    } else {
      return rheight + 1;
    } 
  }


console.log(getMaxDepth(node));
console.log(node);

/** 
3 
сортировка слиянием.
Напишите рекурсивную функцию которая возвращает массив отсортированный с помощью сортировки слияния(merge sort), иллюстрация тут 
https://pythonist.ru/wp-content/uploads/2020/12/600px-merge_sort_algorithm_diagram.svg_.png
*/

mergeSort(arr) {
  if (!arr || !arr.length) {
    return null;
  }

  if (arr.length <= 1) return arr;

  const merge = (arrFirst, arrSecond) => {
    const sortedArr = [];
    
    while (arrFirst.length < arrSecond.length) {
      arr
  }

}

console.log(mergeSort([3, 5, 8, 5, 99, 1])); //[1, 3, 5, 5, 8, 99]
