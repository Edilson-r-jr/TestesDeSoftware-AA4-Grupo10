function EhExpressaoValida(expressao) {
  if (typeof expressao !== "string") return false;
  if (!/^[0-9+\-*/()\s]+$/.test(expressao)) return false;
  return true;
  // // // Check balanced parentheses
  // // const stack = [];
  // // for (let i = 0; i < expr.length; i++) {
  // //   const c = expr[i];
  // //   if (c === "(") stack.push(c);
  // //   else if (c === ")") {
  // //     if (stack.length === 0) return false;
  // //     stack.pop();
  // //   }
  // // }
  // // if (stack.length !== 0) return false;
  // // // Remove whitespace for simpler token checks
  // // const tokens = expr.replace(/\s+/g, "");
  // // // Expression should not start or end with an operator
  // // if (/^[+\-*/]/.test(tokens)) return false;
  // // if (/[+\-*/]$/.test(tokens)) return false;
  // // // No two operators in a row (simple check)
  // // if (/[+\-*/]{2,}/.test(tokens)) return false;
  // // // It's a simple syntactic check, good enough for the first TDD cycle
  // return true;
}

module.exports = { EhExpressaoValida };
