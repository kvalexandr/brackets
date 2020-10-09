module.exports = function check(str, bracketsConfig) {
  let strLenBeforeChange = str.length;

  for (let [bracketStart, bracketEnd] of bracketsConfig) {
    str = str.split(`${bracketStart}${bracketEnd}`).join('');
  }

  if (str.length === 0) {
    return true;
  } else if (str.length === strLenBeforeChange) {
    return false;
  }

  return check(str, bracketsConfig);
}
