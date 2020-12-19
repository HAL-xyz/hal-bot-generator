const fetchJson = require('./fetchJson');
const scrapePrice = require('./scrapePrice');

const priceEndPoint = 'https://api.ethplorer.io/getTokenInfo/';

const getTokenPrice = async (address) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const tokenInfo = await fetchJson(`${priceEndPoint}${address}/?apiKey=freekey`);
  if (tokenInfo.price) {
    const price = tokenInfo.price.rate;
    return price;
  }
  const price = await scrapePrice(address);
  return price;
};

module.exports = getTokenPrice;
