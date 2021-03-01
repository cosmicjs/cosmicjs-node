const objectMethods = require('./bucket/object')
const objectTypeMethods = require('./bucket/object-type')
const mediaMethods = require('./bucket/media')
const userMethods = require('./bucket/user')
// const webhookMethods = require('./bucket/webhook') // TODO
// const extensionMethods = require('./bucket/extension') // TODO

const bucket_methods = (bucket_config) => ({
  ...objectMethods(bucket_config),
  ...objectTypeMethods((bucket_config)),
  ...mediaMethods((bucket_config)),
  ...userMethods(bucket_config),
  // ...webhookMethods(bucket_config), // TODO
  // ...extensionMethods(bucket_config) // TODO
})

module.exports = bucket_methods
