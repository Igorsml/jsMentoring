//https://jsisweird.com 

true + false // 1 + 0 = 1

[,,,].length 
// 3 , [,,,] outputs an array with three empty slots. The last comma is a trailing comma

[1, 2, 3] + [4, 5, 6] 
// "1,2,34,5,6" || https://github.com/denysdovhan/wtfjs#adding-arrays

0.2 + 0.1 === 0.3 // false || 0.2 + 0.1; // -> 0.30000000000000004;

10,2 // 2 || The comma operator simply returns the value of the last operand.

!!"" //false || !! = Boolean("")

+!![] // 1 || Boolean([]) = true, Number(Boolean([]));

!!!true // true → false → true → false

true == "true" // false || 1 vs NaN (false)

010 - 03 
// 5 || octal number, 010; // -> 8, 03; // -> 3, 8 - 3; // -> 5

"" - - "" // 0 || These two empty strings are both converted to 0.

null + 0 // 0 || Number(null); // -> 0

0/0 // NaN || isNaN(0/0); // -> true

1/0 > 10 ** 1000 
/* 
1/0; // -> Infinity
10 ** 1000; // -> Infinity
Infinity > Infinity; // -> false
*/

true++ // SyntaxError

"" - 1 // -1 || 0 - 1 = -1

(null - 0) + "0" // 0 - 0 + "0" = "00"

true + ("true" - 0) // NaN || 1 + (NaN - 0)

!5 + !5 // 0 + 0 

[] + [] // "" || [].toString(); // -> ""

1 + 2 + "3" // 3 + "3" = "33"

typeof NaN // number

undefined + false // NaN || NaN + 0

"" && -0 // "" || return 1st falsy operand

+!!NaN * "" - - [,] 
/* 
0 || +!!NaN; // -> 0
+""; // -> 0
-[,]; // -> -0
Add it all together: 0 * 0 - -0; // -> 0 
*/
