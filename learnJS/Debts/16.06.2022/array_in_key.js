'use strict'

// from youtube _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

const obj = {}
obj.null test = 10; //  SyntaxError: Unexpected identifier
obj['null test 2'] = 20; // 20
obj[[]] = 30; // 30

console.log(obj); // {null: 20, "": 30}

let arr = [];
obj.arr = 20; // arr: 20,
obj[arr] = 30; // '': 30; → string(arr) → '': 30
null.toString() // error
String(null) // 'null'  