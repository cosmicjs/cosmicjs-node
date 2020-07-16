const bucketMethods = require('./bucket/bucket')
const objectMethods = require('./bucket/object')
const objectTypeMethods = require('./bucket/object-type')
const mediaMethods = require('./bucket/media')
const userMethods = require('./bucket/user')
const webhookMethods = require('./bucket/webhook')
const extensionMethods = require('./bucket/extension')

const bucket_methods = (bucket_config) => ({
  ...bucketMethods(bucket_config),
  ...objectMethods(bucket_config),
  ...objectTypeMethods((bucket_config)),
  ...mediaMethods((bucket_config)),
  ...userMethods(bucket_config),
  ...webhookMethods(bucket_config),
  ...extensionMethods(bucket_config)
})

module.exports = bucket_methods
