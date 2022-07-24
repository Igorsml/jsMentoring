// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  if (str.trim() === "") return false;

  let result = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  let addHashtag = ["#", ...result].join("");

  return addHashtag.length > 140 ? false : addHashtag;
}

/* #1
function generateHashtag(str) {
  if (str === "" || str.length > 140) {
    return false;
  }

  let splittedArr = str.split(" ");
  let addHashtag = ["#", ...splittedArr];
  console.log(addHashtag);

  addHashtag.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });

  return addHashtag.join("");
}
*/
