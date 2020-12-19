const fetch = require('node-fetch');

const fetchJson = async (endPoint) => {
  try {
    const response = await fetch(endPoint);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchJson;
