"use strict";

function whatCentury(year) {
  let getCentury = Math.floor((year - 1) / 100) + 1;
  let result = String(getCentury);

  if (result > 3 && result < 21) return (result += "th");

  switch (result.charAt(1)) {
    case "1":
      result += "st";
      break;
    case "2":
      result += "nd";
      break;
    case "3":
      result += "rd";
      break;
    default:
      result += "th";
  }

  return result;
}

console.log(whatCentury("1999")); // 20th

// CW solution
function whatCentury(year) {
  var century = Math.ceil(year / 100);
  return (
    century +
    (century < 20 ? "th" : ["th", "st", "nd", "rd"][century % 10] || "th")
  );
}
