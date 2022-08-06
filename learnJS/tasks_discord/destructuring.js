"use strict";

/* [Symbol.iterator, Деструкторизация]
Деструктурировать объект как массив. Какая ошибка появляется? - TypeError: obj is not iterable
Применить Symbol.iterator чтобы деструкторизировать без ошибок. */

const obj = {
  dogGirl: "Miley",
  dogBoy: "Timmy",
  catGirl: "Miriam",
};

obj[Symbol.iterator] = function () {
  const properties = Object.keys(this);
  let count = 0;

  return {
    next() {
      if (count < properties.length) {
        const key = properties[count];
        let result = { done: false, value: obj[key] };
        count++;
        return result;
      } else {
        return { done: true };
      }
    },
  };
};

const [firstPetName, secondPetName, ...rest] = obj;
console.log(firstPetName, secondPetName, ...rest); // Miley Timmy Miriam

/* Деструктрурировать массив как объект и получить не undefined значения. 
..rest | TypeError: Found non-callable @@iterator */

const arr = ["Miley", "Timmy"];
const fuckOffIamObj = Object.assign({}, arr);

function catchMyValues(fuckOffIamObj) {
  for (const value of Object.entries(fuckOffIamObj)) {
    let result = ({ 0: firstPetName, 1: secondPetName } = fuckOffIamObj);
  }
  return console.log(firstPetName, secondPetName);
}

catchMyValues(fuckOffIamObj); // Miley Timmy

// задать default
const arr = ["Miley", "Timmy"];
const obj = ({ firstPetName = "Abobus", secondPetName = "Abobusina" } = arr);
console.log(firstPetName, secondPetName); // Abobus Abobusina
