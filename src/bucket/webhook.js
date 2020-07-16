const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')

const webhookMethods = (bucket_config) => ({
  getWebhooks: () => {
    const endpoint = `${URI}/${bucket_config.slug}/webhooks`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addWebhook: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/webhooks`
    if (bucket_config.write_key) {
      params.write_key = bucket_config.write_key
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  deleteWebhook: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/webhooks/${params.id}`
    return requestHandler(HTTP_METHODS.DELETE, endpoint, bucket_config)
  }
})

module.exports = webhookMethods
