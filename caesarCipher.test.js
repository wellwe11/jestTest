const caesarCipher = require("./caesarCipher.js");

test("Expect string 'HeLLo', 3 to return 'khOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toMatch(/KhOOr/);
  expect(caesarCipher("Expect string 'Hello, World!'", 3)).toMatch(
    /Khoor, Zruog!/
  );
});
