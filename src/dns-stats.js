const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {}
  domains.forEach((item) => {
    let domain = item.split('.').reverse().map(e => "." + e);
    item.split('.').reverse().forEach((element, index) => {
      let domainElement = element + (domain.slice(0, index)).reverse().join('');
      domainElement = domainElement.split('.').reverse().map(e => "." + e).join('');
      if (domainElement in obj) {
        obj[domainElement]++;
      } else {
        obj[domainElement] = 1;
      }
    })
  });

  return (obj);
}

module.exports = {
  getDNSStats
};
