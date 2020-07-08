const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')

const bucketMethods = (bucket_config) => ({
  getBucket: (params) => {
    let endpoint = `${URI}/${bucket_config.slug}/?read_key=${bucket_config.read_key}`
    if (params && params.show_options) {
      endpoint += `&show_options=${params.show_options}`
    }
    if (params && params.props) {
      endpoint += `&props=${params.props}`
    }
    if (params && typeof params.depth !== 'undefined') {
      endpoint += `&depth=${params.depth}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  }
})

module.exports = bucketMethods
