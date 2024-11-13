const firstLetCap = require("./someFile");

test("Returns string but with capitalisation", () => {
  expect(firstLetCap("hello my name is bibidibabido")).toMatch(/H/);
});

test("Returns string but with capitalisation", () => {
  expect(firstLetCap("banana")).toMatch(/B/);
});
