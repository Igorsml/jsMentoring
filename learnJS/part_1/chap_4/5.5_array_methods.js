'use strict'

// arr.splice(index[, deleteCount, elem1, ..., elemN])
let arr = ['I', 'want', 'to be a', 'Frontend developer']
arr.splice(1, 2, 'am a');
console.log(arr.join(' ')); // 'I am a Frontend developer'

let deleteElements = ['Please', 'don\'t delete me'];
let removed = deleteElements.splice(0, 1)