const ValidadorExpressao = require("../src/ValidadorExpressao");

// test('valid simple expression "(1+2)+3" should return true', () => {
//   expect(ValidadorExpressao.EhExpressaoValida("(1+2)+3")).toBe(true);
// });

test('invalid simple expression "1" should return false', () => {
  expect(ValidadorExpressao.EhExpressaoValida(1)).toBe(false);
});

// test('Expressão invalida "(1+2)*3/ deve retornar false', () => {
//   expect(main.isValidExpression("(1+2)*3/")).toBe(false);
// });
