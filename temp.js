await new Promise((resolve) => setTimeout(resolve, 1000));

setTimeout(() => {
  console.log("deferred:", d1.resolve("a"));
}, 1000);
