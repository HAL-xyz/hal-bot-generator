require('dotenv').config();

const twitter = (
  decimals,
  tokenSymbolAlias,
  vaultAlias,
) => {
  const action = {
    type: 'Twitter',
    attributes: {
      status: `🏦➡️  {{ formatNumber (fromWei .Contract.EventParameters.value ${decimals}) 2 }} ${tokenSymbolAlias} have been withdrawn from ${vaultAlias} Vault to {{ .Contract.EventParameters.to }} on tx {{ etherscanTxLink .Tx.Hash }}\nPowered by hal.xyz 🔥`,
      token: process.env.YEARN_TWITTER_TOKEN,
      secret: process.env.YEARN_TWITTER_SECRET,
    },
  };
  return action;
};

module.exports = twitter;
