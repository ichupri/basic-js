const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!(arr instanceof Array)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev') {
      if (resultArr[resultArr.length - 1] === arr[i - 1] && i > 0) {
        resultArr.pop();
      }
    } else if (arr[i] === '--double-prev') {
      if (resultArr[resultArr.length - 1] === arr[i - 1] && i > 0) {
        resultArr.push(arr[i - 1]);
      }
    } else if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        resultArr.push(arr[i + 1]);
      }
    } else if (typeof arr[i] !== 'undefined') {
      resultArr.push(arr[i]);
    }
  }
  return (resultArr);
}

module.exports = {
  transform
};
