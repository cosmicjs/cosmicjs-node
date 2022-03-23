const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')

const userMethods = (bucket_config) => ({
  getUsers: () => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/users`
    return requestHandler(HTTP_METHODS.GET, endpoint, null)
  },
  getUser: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/users/${params.id}`
    return requestHandler(HTTP_METHODS.GET, endpoint, null)
  },
  addUser: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/users`
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  }
})

module.exports = userMethods
