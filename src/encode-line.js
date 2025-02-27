const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  if (str.length === 0) {
    return ('');
  }
  let result = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      counter === 1 ? result.push(str[i]) : result.push(counter, str[i]);
      counter = 1;
    }
  }
  return (result.join(''));
}

module.exports = {
  encodeLine
};
