require('dotenv').config();

const twitter = (
  decimals,
  tokenSymbolAlias,
  vaultAlias,
) => {
  const action = {
    type: 'Twitter',
    attributes: {
      status: `🏦⬅️  {{ formatNumber (fromWei .Contract.EventParameters.value ${decimals}) 2 }} ${tokenSymbolAlias} have been deposited from {{ .Contract.EventParameters.from }} into ${vaultAlias} Vault on tx {{ etherscanTxLink .Tx.Hash }}\n\nPowered by hal.xyz 🔥`,
      token: process.env.YEARN_TWITTER_TOKEN,
      secret: process.env.YEARN_TWITTER_SECRET,
    },
  };
  return action;
};

module.exports = twitter;
