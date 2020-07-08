const { init } = require('./helpers/request_handler')
const mainMethods = require('./main')
const bucketMethods = require('./bucket')

const Cosmic = (config) => {
  init(config)
  // Combine methods
  const methods = {
    bucket: bucketMethods
  }
  return Object.assign(mainMethods, methods)
}

module.exports = Cosmic
