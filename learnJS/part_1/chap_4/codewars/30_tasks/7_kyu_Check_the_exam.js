// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

const checkExam = (correctAnswers, studentAnswers) => {
  let score = 0;
  
  studentAnswers.forEach((el, i) => {
  if (el == "") {
    score += 0;
  } else (score += (el == correctAnswers[i] ? 4 : -1));
  })

  return score > 0 ? score : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])); // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])); // 0

/*
function checkExam(array1, array2) {
  let score = 0;
  console.log(array1, array2);
  for(let i = 0; i <= array1.length; i += 1) {
   for(let j = 0; j <= array2.length; j += 1) {
     if(array1[i] == array2[j]) {
       score += 4;
     } 
     if(array1[i] !== array2[j]) {
       score -= 1;
     } 
     if (array2[j] == '') {
       score += 0;
     }
   }
  }
  if(score < 0) {
    return 0;
  }
  return score;
}
}

return array2.reduce(function (results, index, array1) {
  if(array1[index] == array2[index]) {
    results += 4;
  }
  if(array1[index] != array2[index]) {
    results -= 1;
  }
  if(array2[index] == '') {
    results += 0;
    }
  return results;
}); 

const checkExam = (correctAnswers, studentAnswers) => {
  let score = 0;

  for(let i = 0; i <= correctAnswers.length; i += 1) {
    if (correctAnswers[i] == studentAnswers[i]) {
       score += 4;
    } else if (studentAnswers[i] === '') {
       score += 0;
    } else {
      score -= 1;
    }
  
   if (score < 0) {
    score = 0;
    }
  }
  return score;
}

*/