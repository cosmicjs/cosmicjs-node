const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')

const userMethods = (bucket_config) => ({
  getUsers: () => {
    const endpoint = `${URI}/${bucket_config.slug}/users`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getUser: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/users/${params.id}`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addUser: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/users`
    if (bucket_config.write_key) {
      params.write_key = bucket_config.write_key
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  }
})

module.exports = userMethods
