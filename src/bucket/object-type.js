const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')

const objectTypeMethods = (bucket_config) => ({
  getObjectTypes: (params) => {
    let endpoint = `${URI}/${bucket_config.slug}/object-types?read_key=${bucket_config.read_key}`
    if (params && params.limit) {
      endpoint += `&limit=${params.limit}`
    }
    if (params && params.skip) {
      endpoint += `&skip=${params.skip}`
    }
    if (params && params.locale) {
      endpoint += `&locale=${params.locale}`
    }
    if (params && params.status) {
      endpoint += `&status=${params.status}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  // DEPRECATED
  getObjectsByType: (params) => {
    let endpoint = `${URI}/${bucket_config.slug}/object-type/${params.type_slug}?read_key=${bucket_config.read_key}`
    if (params && params.limit) {
      endpoint += `&limit=${params.limit}`
    }
    if (params && params.skip) {
      endpoint += `&skip=${params.skip}`
    }
    if (params && params.locale) {
      endpoint += `&locale=${params.locale}`
    }
    if (params && params.status) {
      endpoint += `&status=${params.status}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  // DEPRECATED
  searchObjectType: (params) => {
    let searchParams = `/search?metafield_key=${params.metafield_key}`
    if (params.metafield_value) {
      searchParams += `&metafield_value=${params.metafield_value}`
    } else if (params.metafield_object_slug) {
      searchParams += `&metafield_object_slug=${params.metafield_object_slug}`
    } else {
      searchParams += `&metafield_value_has=${params.metafield_value_has}`
    }
    let endpoint = `${URI}/${bucket_config.slug}/object-type/${params.type_slug}${searchParams}&read_key=${bucket_config.read_key}`
    if (params && params.limit) {
      endpoint += `&limit=${params.limit}`
    }
    if (params && params.skip) {
      endpoint += `&skip=${params.skip}`
    }
    if (params && params.sort) {
      endpoint += `&sort=${params.sort}`
    }
    if (params && params.locale) {
      endpoint += `&locale=${params.locale}`
    }
    if (params && params.status) {
      endpoint += `&status=${params.status}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addObjectType: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/add-object-type`
    if (bucket_config.write_key) {
      params.write_key = bucket_config.write_key
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  editObjectType: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/edit-object-type`
    if (bucket_config.write_key) {
      params.write_key = bucket_config.write_key
    }
    return requestHandler(HTTP_METHODS.PUT, endpoint, params)
  },
  deleteObjectType: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/object-types/${params.slug}`
    return requestHandler(HTTP_METHODS.DELETE, endpoint, bucket_config)
  }
})

module.exports = objectTypeMethods
