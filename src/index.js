const yearnEndPoint = 'https://api.yearn.tools/vaults';

const fetchJson = require('./lib/fetchJson.js');

(async () => {
  console.log(await fetchJson(yearnEndPoint));
})();
