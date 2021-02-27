const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')
let headers;

const userMethods = (bucket_config) => ({
  getUsers: () => {
    const endpoint = `${URI}/${bucket_config.slug}/users`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.GET, endpoint, null, headers)
  },
  getUser: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/users/${params.id}`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.GET, endpoint, null, headers)
  },
  addUser: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/users`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers)
  }
})

module.exports = userMethods
