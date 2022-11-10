// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript
// Перерешать через Set

function killer(suspectInfo, dead) {
  let killerSet = new Set();

  for (const [name, list] of Object.entries(suspectInfo)) {
    if (dead.every((e) => list.includes(e))) return name;
  }
}
