const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return (0);
    }
    let result = 1;
    if (arr.length === 0) {
      return (result);
    } else {
      result = result + Math.max(...arr.map(item => this.calculateDepth(item)));
      return (result);
    }
    return (0);
  }
}

module.exports = {
  DepthCalculator
};
