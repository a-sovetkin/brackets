module.exports = function check(str, bracketsConfig) {

  let open_br = [];
  let close_br = [];

  for (let item of bracketsConfig) {
    open_br.push(item[0]);
    close_br.push(item[1]);
  }

  let stack = [];

  for (let ch of str) {
    const i_open = open_br.findIndex(item => item == ch);

    if (stack.length == 0) {
      if (i_open == -1) return false;
      stack.push(i_open);
    } else {
      const lastEl = stack.at(-1);
      if (ch == close_br[lastEl]) {
        stack.pop();
      }
      else if (i_open != -1) {
        stack.push(i_open);
      }
    }
  }
  return (stack.length == 0) ? true: false;
}
