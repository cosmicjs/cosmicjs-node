const { init } = require('./helpers/requestHandler');
const mainMethods = require('./utils/main');
const bucketMethods = require('./utils/bucket');
const { apiConfigs } = require('./constants/env.constants');

/**
 * The main Cosmic class.
 * @param _config - The configuration object.
 * @returns None
 */
const Cosmic = (_config) => {
  const config = {
    apiVersion: 'v3',
    apiEnvironment: 'production',
    ..._config,
  };

  let apiConfig = {};

  // Config validation
  if (config.custom) {
    if (!config.custom.apiUrl || !config.custom.uploadUrl) {
      throw new Error(`apiUrl or uploadUrl is missing from 'custom' option`);
    }
    apiConfig = {
      apiUrl: config.custom.apiUrl,
      uploadUrl: config.custom.uploadUrl,
    };
  } else {
    if (!['v1', 'v2', 'v3'].includes(config.apiVersion)) {
      throw new Error(`apiVersion value can only be from 'v1', 'v2' & 'v3'`);
    }
    if (!['production', 'staging'].includes(config.apiEnvironment)) {
      throw new Error(
        `apiEnvironment value can only be from 'production' & 'staging'`
      );
    }
    apiConfig = apiConfigs[config.apiEnvironment][config.apiVersion];
  }
  // Initialization
  init(config);
  // Combine methods
  const methods = {
    bucket: bucketMethods(apiConfig),
  };

  // @returns An object containing all of the methods for the module.
  return Object.assign(mainMethods(apiConfig), methods);
};

module.exports = Cosmic;
