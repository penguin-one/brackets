module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '[', '{', '|', '1', '3', '5', '7', '8'];
  let config = bracketsConfig.flat();
  let pairBrackets = {};
  let arr = [];

  if (str.length % 2) {
    return false;
  }

  for (let j = 0; j < config.length; j += 2) {
    pairBrackets[config[j + 1]] = config[j];
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {
      arr.push(currentSymbol);
    } else {
      if (arr.length == 0) {
        return false;
      }

      let upperSymbol = arr[arr.length - 1];

      if (pairBrackets[currentSymbol] == upperSymbol) {
        arr.pop();
      }
    }
  }

  if (arr.length != 0) {
  	return true;
  }

  return arr.length == 0;
}
