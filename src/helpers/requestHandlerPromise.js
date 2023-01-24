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
 * A wrapper for axios that makes it easier to make requests.
 * @param method - The HTTP method to use.
 * @param url - The URL to make the request to.
 * @param data - The data to send with the request.
 * @param headers - The headers to send with the request.
 * @returns A promise that resolves to the response.
 */
const requestHandler = (method, url, data, headers) => {
  const config = {
    method,
    url,
    data,
    headers,
  };
  return axios(config);
};

module.exports = {
  init,
  requestHandler,
};
