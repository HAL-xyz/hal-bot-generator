const BigNumber = require('bignumber.js');

BigNumber.config({ EXPONENTIAL_AT: 78 });

const multiplyByDecimals = (value, decimals) => {
  value = new BigNumber(value);
  value = value.times(new BigNumber(Number(`1e${decimals}`)));
  return value;
};

module.exports = multiplyByDecimals;
