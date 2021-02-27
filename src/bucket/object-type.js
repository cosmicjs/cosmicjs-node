const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')
let headers;
const objectTypeMethods = (bucket_config) => ({
  getObjectTypes: (params) => {
    let endpoint = `${URI}/buckets/${bucket_config.slug}/object-types?read_key=${bucket_config.read_key}`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getObjectType: (params) => {
    let endpoint = `${URI}/buckets/${bucket_config.slug}/object-types/${params.slug}?read_key=${bucket_config.read_key}`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addObjectType: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/object-types`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers)
  },
  editObjectType: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/object-types/${params.slug}`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    // Remove slug
    delete params.slug;
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers)
  },
  deleteObjectType: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/object-types/${params.slug}`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers)
  }
})

module.exports = objectTypeMethods
