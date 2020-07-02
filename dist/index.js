'use strict';

var _require = require('./src/helpers/request_handler'),
    init = _require.init;

var mainMethods = require('./src/main');
var bucketMethods = require('./src/bucket');

var Cosmic = function Cosmic(config) {
  init(config);
  // Combine methods
  var methods = {
    bucket: bucketMethods
  };
  return Object.assign(mainMethods, methods);
};

module.exports = Cosmic;