const HTTP_METHODS = require('../constants/httpMethods.constants');
const { requestHandler } = require('./requestHandlerPromise');

/**
 * A function that takes in an endpoint and returns a promise that resolves to the data of the response.
 * @param endpoint - The endpoint to make the request to.
 * @returns A promise that resolves to the data of the response.
 */
const promiser = (endpoint) =>
  new Promise((resolve, reject) => {
    requestHandler(HTTP_METHODS.GET, endpoint)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err.response ? err.response.data : err.response));
  });

module.exports = promiser;
