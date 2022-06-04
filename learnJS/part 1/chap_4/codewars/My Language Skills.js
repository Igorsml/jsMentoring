//https://www.codewars.com/kata/5b16490986b6d336c900007d


/* examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

const myLanguages = (results) => {
  return Object.keys(results)
    .filter(result => results[result] >= 60)
    .sort((a, b) => results[b] - results[a])
}