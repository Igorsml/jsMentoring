// data = {
//   user: {
//     name: {
//       firsname: "Verb",
//       lastname: "336",
//     },
//     favoritecolor: "Light Blue",
//     experiments: {
//       theme: "dark",
//     },
//   },
// };

const str =
  "user.name.firsname=Verb&user.name.lastname=336&user.favoritecolor=Light%20Blue&user.experiments.theme=dark";

function setData(str) {
  let arrFromStr = str.split("&");
  let objResult = {};
  console.log(arrFromStr);

  for (let i = 0; i < arrFromStr.length; i++) {
    console.log(arrFromStr[i].substring(arrFromStr[i].lastIndexOf(".") + 1));
  }

  return objResult;
}

console.log(setData(str));
