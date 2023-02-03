const objectMethods = require('./object');
const objectTypeMethods = require('./objectType');
const mediaMethods = require('./media');
const userMethods = require('./user');

/**
 * Returns an object containing all the methods for the given bucket.
 * @param _bucketConfig - The bucket configuration object.
 * @returns An object containing all the methods for the given bucket.
 */
const bucketMethods = (apiConfig) => (_bucketConfig) => {
  const bucketConfig = {
    ..._bucketConfig,
    uri: apiConfig.apiUrl,
    uploadUri: apiConfig.uploadUrl,
  };

  return {
    ...objectMethods(bucketConfig),
    ...objectTypeMethods(bucketConfig),
    ...mediaMethods(bucketConfig),
    ...userMethods(bucketConfig),
  };
};

module.exports = bucketMethods;
