const { API_URL, API_VERSION } = require('../constants/env.constants');
const objectMethods = require('./object');
const objectTypeMethods = require('./objectType');
const mediaMethods = require('./media');
const userMethods = require('./user');

/**
 * Returns an object containing all the methods for the given bucket.
 * @param _bucketConfig - The bucket configuration object.
 * @returns An object containing all the methods for the given bucket.
 */
const bucketMethods = (apiVersion) => (_bucketConfig) => {
  const ver = apiVersion || API_VERSION;
  const uploadURI =
    process?.env?.UPLOAD_API_URL ||
    (ver === 'v3'
      ? 'https://workers.cosmicjs.com'
      : 'https://upload.cosmicjs.com');
  const bucketConfig = {
    ..._bucketConfig,
    uri: `${API_URL}/${ver}`,
    uploadUri: `${uploadURI}/${ver}`,
  };

  return {
    ...objectMethods(bucketConfig),
    ...objectTypeMethods(bucketConfig),
    ...mediaMethods(bucketConfig),
    ...userMethods(bucketConfig),
  };
};

module.exports = bucketMethods;
