const ValidadorExpressao = require("../src/ValidadorExpressao");

test('Expressão inválida 1 (int) deve retornar false', () => {
  expect(ValidadorExpressao.EhExpressaoValida(1)).toBe(false);
});

// test('Expressão simples válida "(1+2)/(3*4)" deve retornar true', () => {
//   expect(ValidadorExpressao.EhExpressaoValida("(1+2)/(3*4)")).toBe(true);
// });

test('Expressão que termina com operador "(1+2)*3/" deve retornar false', () => {
  expect(ValidadorExpressao.EhExpressaoValida("(1+2)*3/")).toBe(false);
}); 

test('Expressão que começa com operador "*5-2" deve retornar false', () => {
  expect(ValidadorExpressao.EhExpressaoValida("*5-2")).toBe(false);
}); 

test('Expressão com operadores consecutivos "4++2" deve retornar false', () => {
  expect(ValidadorExpressao.EhExpressaoValida("4++2")).toBe(false);
}); 

test('Parênteses desbalanceados "((1+2)" deve retornar false', () => {
  expect(ValidadorExpressao.EhExpressaoValida("((1+2)")).toBe(false);
});
