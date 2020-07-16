const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')

const objectMethods = (bucket_config) => ({
  getObjects: (params) => {
    let endpoint = `${URI}/${bucket_config.slug}/objects?read_key=${bucket_config.read_key}`
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
    if (params && params.sort) {
      endpoint += `&sort=${params.sort}`
    }
    // Type param
    if (params && params.type) {
      endpoint += `&type=${params.type}`
    }
    // Search params
    if (params && params.q) {
      endpoint += `&q=${params.q}`
    }
    if (params && params.metafield_key) {
      endpoint += `&metafield_key=${params.metafield_key}`
    }
    if (params && params.metafield_value) {
      endpoint += `&metafield_value=${params.metafield_value}`
    }
    if (params && params.metafield_object_id) {
      endpoint += `&metafield_object_id=${params.metafield_object_id}`
    }
    if (params && params.hide_metafields) {
      endpoint += `&hide_metafields=${params.hide_metafields}`
    }
    if (params && params.pretty) {
      endpoint += `&pretty=${params.pretty}`
    }
    if (params && params.filters) {
      Object.keys(params.filters).forEach((key) => {
        endpoint += `&filters[${key}]=${params.filters[key]}`
      })
    }
    if (params && params.metadata) {
      Object.keys(params.metadata).forEach((key) => {
        endpoint += `&metadata[${key}]=${params.metadata[key]}`
      })
    }
    if (params && params.props) {
      endpoint += `&props=${params.props}`
    }
    if (params && typeof params.created_by !== 'undefined') {
      endpoint += `&created_by=${params.created_by}`
    }
    if (params && typeof params.depth !== 'undefined') {
      endpoint += `&depth=${params.depth}`
    }
    if (params && params.query) {
      endpoint += `&query=${encodeURI(JSON.stringify(params.query))}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getObject: (params) => {
    if (!params) {
      throw new Error('Must supply params object with object slug')
    }
    let endpoint = `${URI}/${bucket_config.slug}/object/${params.slug}?read_key=${bucket_config.read_key}`
    if (params && params.locale) {
      endpoint += `&locale=${params.locale}`
    }
    if (params && params.status) {
      endpoint += `&status=${params.status}`
    }
    if (params && params.revision) {
      endpoint += `&revision=${params.revision}`
    }
    if (params && params.props) {
      endpoint += `&props=${params.props}`
    }
    if (params && typeof params.depth !== 'undefined') {
      endpoint += `&depth=${params.depth}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getObjectRevisions: (params) => {
    let endpoint = `${URI}/${bucket_config.slug}/object/${params.slug}/revisions?read_key=${bucket_config.read_key}`
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
    if (params && params.sort) {
      endpoint += `&sort=${params.sort}`
    }
    if (params && params.hide_metafields) {
      endpoint += `&hide_metafields=${params.hide_metafields}`
    }
    if (params && params.pretty) {
      endpoint += `&pretty=${params.pretty}`
    }
    if (params && params.filters) {
      Object.keys(params.filters).forEach((key) => {
        endpoint += `&filters[${key}]=${params.filters[key]}`
      })
    }
    if (params && params.metadata) {
      Object.keys(params.metadata).forEach((key) => {
        endpoint += `&metadata[${key}]=${params.metadata[key]}`
      })
    }
    if (params && params.props) {
      endpoint += `&props=${params.props}`
    }
    if (params && typeof params.created_by !== 'undefined') {
      endpoint += `&created_by=${params.created_by}`
    }
    if (params && typeof params.depth !== 'undefined') {
      endpoint += `&depth=${params.depth}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addObject: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/add-object`
    if (bucket_config.write_key) {
      params.write_key = bucket_config.write_key
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  addObjectRevision: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/object/${params.slug}/revisions`
    if (bucket_config.write_key) {
      params.write_key = bucket_config.write_key
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  editObject: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/edit-object`
    if (bucket_config.write_key) {
      params.write_key = bucket_config.write_key
    }
    return requestHandler(HTTP_METHODS.PUT, endpoint, params)
  },
  editObjectMetafields: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/edit-object-metafields`
    if (bucket_config.write_key) {
      params.write_key = bucket_config.write_key
    }
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params)
  },
  deleteObject: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/objects/${params.slug}`
    const bucket_data = { ...bucket_config }
    const data = Object.assign(bucket_data, params)
    return requestHandler(HTTP_METHODS.DELETE, endpoint, data)
  }
})

module.exports = objectMethods
