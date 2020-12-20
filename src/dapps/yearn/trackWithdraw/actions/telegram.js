require('dotenv').config();

const telegram = (
  decimals,
  tokenSymbolAlias,
  vaultAlias,
) => {
  const action = {
    type: 'Telegram',
    attributes: {
      token: process.env.YEARN_TELEGRAM_TOKEN,
      format: 'HTML',
      chatid: process.env.YEARN_TELEGRAM_CHATID,
      body: `🏦➡️  {{ formatNumber (fromWei .Contract.EventParameters.value ${decimals}) 2 }} ${tokenSymbolAlias} have been withdrawn from ${vaultAlias} Vault to {{ .Contract.EventParameters.to }} on tx {{ etherscanTxLink .Tx.Hash }}\n\nPowered by <a href="https://hal.xyz">hal.xyz 🔥</a>`,
    },
  };
  return action;
};

module.exports = telegram;
