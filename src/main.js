const HTTP_METHODS = require('./helpers/http_methods')
const { requestHandler } = require('./helpers/request_handler')
const { URI } = require('./helpers/constants')

const mainMethods = {
  authenticate: (params) => {
    const endpoint = `${URI}/authenticate`
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  getBuckets: () => {
    const endpoint = `${URI}/buckets`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addBucket: (params) => {
    const endpoint = `${URI}/buckets`
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  deleteBucket: (params) => {
    const endpoint = `${URI}/buckets/${params.id}`
    return requestHandler(HTTP_METHODS.DELETE, endpoint, params)
  },
  importBucket: (params) => {
    const endpoint = `${URI}/buckets/${params.id}/import`
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  deployApp: (params) => {
    const endpoint = `${URI}/buckets/${params.id}/deploy`
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  }
}

module.exports = mainMethods
