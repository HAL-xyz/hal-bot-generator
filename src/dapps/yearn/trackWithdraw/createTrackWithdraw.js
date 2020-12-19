const multiplyByDecimals = require('../../../helpers/units');
const telegram = require('./actions/telegram');
const twitter = require('./actions/twitter');

// Abi
const abi = require('../../../abis/erc20');

const query = `
  mutation insertWae($input: EventsTriggerInput!) {
    createEventsTrigger(input: $input) {
      UUID
    }
  }
`;

const input = ({
  title,
  vaultAddress,
  vaultAlias,
  tokenSymbolAlias,
  tokenAddress,
  decimals,
  threshold,
}) => {
  return {
    name: title,
    type: 'EventsTrigger',
    statement: {
      contract: {
        address: tokenAddress,
        abi,
      },
      filters: [
        {
          method: {
            name: 'Transfer',
          },
          parameter: {
            name: 'value',
            type: 'uint256',
            index: null,
          },
          type: 'CheckEventParameter',
          condition: {
            attribute: multiplyByDecimals(threshold, decimals),
            predicate: 'BiggerThan',
          },
        },
        {
          method: {
            name: 'Transfer',
          },
          parameter: {
            name: 'from',
            type: 'address',
            index: null,
          },
          type: 'CheckEventParameter',
          condition: {
            attribute: vaultAddress,
            predicate: 'Eq',
          },
        },
      ],
    },
    actions: [
      telegram(decimals, tokenSymbolAlias, vaultAlias),
      twitter(decimals, tokenSymbolAlias, vaultAlias),
    ],
  };
};

module.exports = { query, input };