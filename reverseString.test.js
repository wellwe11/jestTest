const reverseString = require("./reverseString.js");

test("Return reversed string", () => {
  expect(reverseString("potato")).toMatch(/otatop/);
});
