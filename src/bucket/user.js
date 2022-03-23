const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')
let headers;

const userMethods = (bucket_config) => ({
  getUsers: () => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/users`
    return requestHandler(HTTP_METHODS.GET, endpoint, null, headers)
  },
  getUser: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/users/${params.id}`
    return requestHandler(HTTP_METHODS.GET, endpoint, null, headers)
  },
  addUser: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/users`
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers)
  }
})

module.exports = userMethods
