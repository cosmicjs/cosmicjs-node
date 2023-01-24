const HTTP_METHODS = require('../constants/httpMethods.constants');
const { requestHandler } = require('../helpers/requestHandler');

/**
 * A set of methods for interacting with the users endpoint.
 * @param bucketConfig - The bucket configuration object.
 * @returns A set of methods for interacting with the users endpoint.
 */
const userMethods = (bucketConfig) => ({
  /**
   * Gets all users in the bucket.
   * @returns A promise that resolves to an array of user objects.
   */
  getUsers: () => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/users`;
    return requestHandler(HTTP_METHODS.GET, endpoint, null);
  },
  /**
   * Gets the user with the given id.
   * @param params - The parameters to pass to the endpoint.
   * @returns The user with the given id.
   */
  getUser: (params) => {
    // Get user by id, if not found, return undefined.
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/users/${params.id}`;
    return requestHandler(HTTP_METHODS.GET, endpoint, null);
  },
  /**
   * Adds a user to the bucket.
   * @param params - The user to add.
   * @returns None
   */
  addUser: (params) => {
    // Add a user to the bucket, with the given params.
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/users`;
    return requestHandler(HTTP_METHODS.POST, endpoint, params);
  },
});

module.exports = userMethods;
