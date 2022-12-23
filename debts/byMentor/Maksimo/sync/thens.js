// как пойдет? Везде setTimeout 1 сек

const testThens = Promise.resolve((resolve) => {
  setTimeout(() => resolve(console.log), 1);
});

testThens.then(1).then(2).then(3);
testThens.then(4).then(5);
testThens.then(6);
