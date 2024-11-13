const calculate = require("./calculate.js");

test("Returns numbers equivalent to their operational outcome", () => {
  expect(calculate.add(2, 2)).toEqual(4);
  expect(calculate.subtract(5, 3)).toEqual(2);
  expect(calculate.divide(10, 2)).toEqual(5);
  expect(calculate.multiply(20, 5)).toEqual(100);
});
