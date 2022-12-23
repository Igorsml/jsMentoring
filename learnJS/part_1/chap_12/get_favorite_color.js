// find favorite color
function* getFavColor() {
  const reply = yield "What is your favorite color?";
  console.log("Reply:", reply);
  if (reply !== "yellow") return "Wrong!";
  return "You may pass.";
}

{
  const iter = getFavColor();
  const question = iter.next().value; // Iterator yields question
  iter.next().value;
  iter.next().value;
  console.log("Q:", question);
  const answer = iter.next("black").value; // Pass reply back into generator
  console.log("A:", answer);
}

const iter = crossBridge();
const q = iter.next().value;
console.log(q);
const a = iter.next("yellow").value;
console.log(a);
