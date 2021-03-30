const HTTP_METHODS = require('./helpers/http_methods')
const { requestHandler } = require('./helpers/request_handler')
const { URI } = require('./helpers/constants')

const mainMethods = {
  authenticate: (params) => {
    const endpoint = `${URI}/authenticate`
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  getUser: () => {
    const endpoint = `${URI}/user`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getBuckets: () => {
    const endpoint = `${URI}/buckets`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getBucket: (params) => {
    const endpoint = `${URI}/buckets/${params.slug}`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addBucket: (params) => {
    const endpoint = `${URI}/buckets`
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  deleteBucket: (params) => {
    const endpoint = `${URI}/buckets/${params.slug}`
    return requestHandler(HTTP_METHODS.DELETE, endpoint, params)
  },
}

module.exports = mainMethods
