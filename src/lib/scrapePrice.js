const axios = require('axios');
const cheerio = require('cheerio');

const siteUrl = 'https://defimarketcap.io/token/';

const scrapePrice = async (address) => {
  try {
    const result = await axios.get(`${siteUrl}${address}`);
    const $ = cheerio.load(result.data);
    const priceWrapper = $('.mt-3');
    const getPrice = priceWrapper.text();
    const priceText = getPrice.split(/\s+/).slice(1, 2);
    const price = parseFloat(priceText[0].replace('$', '').replace(',', ''));
    return price;
  } catch (error) {
    console.log(error);
  }
};

module.exports = scrapePrice;
