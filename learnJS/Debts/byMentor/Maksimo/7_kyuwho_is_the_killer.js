// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript
// Перерешать через Set

function killer(suspectInfo, dead) {
  let killerSet;

  for (const killerName in suspectInfo) {
    killerSet = new Set();

    dead.forEach((elem) =>
      killerSet.add(suspectInfo[killerName].includes(elem))
    );

    console.log(killerSet);
    if (killerSet.size === 1 && killerSet.has(true)) {
      return killerName;
    }
  }
}

// потому что ты используешь includes не в том направлении
// ищешь в suspectinfo мертвых людей
// если хочешь чтобы там и false был надо среди мертвых искать людей из suspectinfo

console.log(
  killer(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
); // 'James'
