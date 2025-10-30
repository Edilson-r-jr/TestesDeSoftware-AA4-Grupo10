const main = require("../src/main");

test("adds 1 + 2 to equal 3", () => {
  expect(main.sum(1, 2)).toBe(3);
});

// TDD: first failing test for expression validation
test('valid simple expression "(1+2)+3" should return true', () => {
  expect(main.isValidExpression("(1+2)+3")).toBe(true);
});
