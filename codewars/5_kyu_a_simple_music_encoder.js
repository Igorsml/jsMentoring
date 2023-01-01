// https://www.codewars.com/kata/58db9545facc51e3db00000a

function compress(arr) {
  let ranges = [];
  let prev;
  let next;
  let sequencesOfThreeUp;
  let sequencesOfThreeDown;
  let sequencesOfInterval;

  for (let i = 0; i < arr.length; i++) {
    prev = arr[i];
    next = prev;

    sequencesOfThreeUp =
      arr[i + 2] - arr[i + 1] == 1 && arr[i + 1] - arr[i] == 1;
    sequencesOfThreeDown =
      arr[i + 2] - arr[i + 1] == -1 && arr[i + 1] - arr[i] == -1;
    sequencesOfInterval =
      arr[i + 2] - arr[i + 1] == 2 && arr[i + 1] - arr[i] == 2;

    if (sequencesOfThreeUp || sequencesOfThreeDown) {
      while (arr[i + 1] - arr[i] == 1 || arr[i + 1] - arr[i] == -1) {
        next = arr[i + 1];
        i++;
      }
    } else if (sequencesOfInterval) {
      next = arr[i + 1];
      i++;
    }
    ranges.push(prev == next ? `${prev}` : `${prev} - ${next}`);
  }

  return ranges;
}

console.log(compress([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5])); //  "2-5", "10", "18-20"
// console.log(compress([3, 4, 2, 3, 4, 5, 10, 18, 19, 20])); //  "2-5", "10", "18-20"
// console.log(compress([3, 4, 7, 6, 5])); //  "2-5", "10", "18-20"
// console.log(compress([1, 2, 2, 2, 3, 5, 5, 5])); //  "1,2*3,3"
