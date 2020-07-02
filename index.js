const { init } = require('./src/helpers/request_handler')
const mainMethods = require('./src/main')
const bucketMethods = require('./src/bucket')

const Cosmic = (config) => {
  init(config)
  // Combine methods
  const methods = {
    bucket: bucketMethods
  }
  return Object.assign(mainMethods, methods)
}

module.exports = Cosmic
