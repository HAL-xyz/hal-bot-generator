const chalk = require('chalk');

const fetchJson = require('../../../lib/fetchJson');
const getTokenPrice = require('../../../lib/getTokenPrice');
const mutation = require('../../../lib/graphQL/mutation');
const { query, input } = require('./createTrackWithdraw');

const yearnEndPoint = 'https://api.yearn.tools/vaults';

(async () => {
  const vaults = await fetchJson(yearnEndPoint);
  for (const vault of vaults) {
    const tokenPrice = await getTokenPrice(vault.tokenAddress);
    const threshold = (process.env.YEARN_THRESHOLD / tokenPrice);
    console.log(chalk`
      {blue.bold Trigger's parameter}\n\n
      {yellow title: {white yVault Withdraw on ${vault.tokenSymbolAlias}}}\n
      {yellow vault: {white ${vault.address}}}\n
      {yellow vaultAlias: {white ${vault.vaultAlias}}}\n
      {yellow tokenSymbolAlias: {white ${vault.tokenSymbolAlias}}}\n
      {yellow tokenAddress: {white ${vault.tokenAddress}}}\n
      {yellow decimals: {white ${vault.decimals}}}\n
      {yellow tokenPrice: {white ${tokenPrice}}}\n
      {yellow threshold: {white ${threshold}}}\n
    `);
    if (process.env.ENV === 'test') {
      const output = input({
        title: `yVault Withdraw on ${vault.tokenSymbolAlias}`,
        vaultAddress: vault.address,
        vaultAlias: vault.vaultAlias,
        tokenSymbolAlias: vault.tokenSymbolAlias,
        tokenAddress: vault.tokenAddress,
        decimals: vault.decimals,
        threshold,
      });
      console.log(JSON.stringify(output, null, 2));
    } else {
      mutation(query, input({
        title: `yVault Withdraw on ${vault.tokenSymbolAlias}`,
        vaultAddress: vault.address,
        vaultAlias: vault.vaultAlias,
        tokenSymbolAlias: vault.tokenSymbolAlias,
        tokenAddress: vault.tokenAddress,
        decimals: vault.decimals,
        threshold,
      }));
    }
  }
})();
