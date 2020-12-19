const chalk = require('chalk');
const fetch = require('node-fetch');

require('dotenv').config();

const mutation = async (query, input) => {
  console.log(chalk`{grey ${JSON.stringify(input, null, 2)}}\n`);
  try {
    fetch(process.env.GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          input,
        },
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(chalk`{green Mutation output: ${JSON.stringify(data, null, 2)}}\n`));
  } catch (error) {
    console.log(chalk`{red ${error}}`);
  }
};

module.exports = mutation;
