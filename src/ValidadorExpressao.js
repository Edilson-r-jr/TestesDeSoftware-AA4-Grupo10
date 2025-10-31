function EhExpressaoValida(expressao) {
  if (typeof expressao !== 'string') return false;
  // caracteres permitidos (dígitos, operadores, parênteses e espaços)
  if (!/^[0-9+\-*/()\s]+$/.test(expressao)) return false;

  const str = expressao.trim();
  if (str === '') return false;

  // não pode começar/terminar com operador nem ter operadores consecutivos
  if (/^[+\-*/]|[+\-*/]$|[+\-*/]{2,}/.test(str)) return false;

  // valida parênteses (balanceamento)
  let balance = 0;
  for (const ch of str) {
    if (ch === '(') balance++;
    else if (ch === ')') {
      if (--balance < 0) return false;
    }
  }
  return balance === 0;
}

module.exports = { EhExpressaoValida };
