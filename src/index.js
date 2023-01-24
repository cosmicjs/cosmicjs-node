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
    version: 'v3',
    ..._config,
  };
  // Initialization
  init(config);
  // Combine methods
  const methods = {
    bucket: bucketMethods(config.version),
  };

  // @returns An object containing all of the methods for the module.
  return Object.assign(mainMethods(config.version), methods);
};

module.exports = Cosmic;
