const axios = require('axios');

/**
 * Initialize the API with the given config.
 * @param config - The config object.
 * @returns None
 */
const init = (config) => {
  // Accept Encoding in Node
  if (typeof window === 'undefined') {
    axios.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate';
  }
  if (config && config.token) {
    axios.defaults.headers.common.Authorization = config.token;
  }
};

/**
 * A wrapper around axios that handles the request and response.
 * @param method - The HTTP method to use.
 * @param url - The URL to send the request to.
 * @param data - The data to send with the request.
 * @param headers - The headers to send with the request.
 * @returns The response from the server.
 */
const requestHandler = (method, url, data, headers) => {
  const config = {
    method,
    url,
    data,
    headers,
  };
  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response ? error.response.data : error.response;
    });
};

module.exports = {
  init,
  requestHandler,
};
