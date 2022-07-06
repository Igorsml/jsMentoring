describe("pow", function () {

  it("для отрицательных n возвращает NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("Для дробных n возвращает NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} в степени 3 будет ${expected}`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 8; x++) {
    makeTest(x);
  }
});