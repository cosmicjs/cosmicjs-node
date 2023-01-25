const { init } = require('./helpers/requestHandler');
const mainMethods = require('./utils/main');
const bucketMethods = require('./utils/bucket');

/**
 * The main Cosmic class.
 * @param _config - The configuration object.
 * @returns None
 */
const Cosmic = (_config) => {
  const config = {
    apiUrl: 'https://api.cosmicjs.com',
    version: 'v3',
    ..._config,
  };
  // Initialization
  init(config);
  // Combine methods
  const methods = {
    bucket: bucketMethods(config),
  };

  // @returns An object containing all of the methods for the module.
  return Object.assign(mainMethods(config), methods);
};

module.exports = Cosmic;
