require('regenerator-runtime/runtime')

const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')
const promiser = require('../helpers/promiser')

let headers

const addParamsToObjectsEndpoint = (endpoint, params) => {
  let ep = endpoint
  if (params && params.limit) {
    ep += `&limit=${params.limit}`
  }
  if (params && params.skip) {
    ep += `&skip=${params.skip}`
  }
  if (params && params.status) {
    ep += `&status=${params.status}`
  }
  if (params && params.after) {
    ep += `&after=${params.after}`
  }
  if (params && params.sort) {
    ep += `&sort=${params.sort}`
  }
  if (params && params.show_metafields) {
    ep += `&show_metafields=${params.show_metafields}`
  }
  if (params && params.pretty) {
    ep += `&pretty=${params.pretty}`
  }
  if (params && params.props) {
    ep += `&props=${params.props}`
  }
  if (params && params.query) {
    ep += `&query=${encodeURI(JSON.stringify(params.query))}`
  }
  if (params && typeof params.use_cache !== 'undefined') {
    ep += `&use_cache=${params.use_cache}`
  }
  return ep
}

class FindChaining {
  constructor(endpoint) {
    this.endpoint = endpoint
  }

  props(props) {
    this.endpoint += `&props=${props}`
    return this
  }

  sort(sort) {
    this.endpoint += `&sort=${sort}`
    return this
  }

  limit(limit) {
    this.endpoint += `&limit=${limit}`
    return this
  }

  skip(skip) {
    this.endpoint += `&skip=${skip}`
    return this
  }

  status(status) {
    this.endpoint += `&status=${status}`
    return this
  }

  after(after) {
    this.endpoint += `&after=${after}`
    return this
  }

  showMetafields(show_metafields) {
    this.endpoint += `&show_metafields=${show_metafields}`
    return this
  }

  useCache(use_cache) {
    this.endpoint += `&use_cache=${use_cache}`
    return this
  }

  async then(resolve, reject) {
    promiser(this.endpoint).then((res) => resolve(res, null)).catch((err) => {
      if (typeof reject === 'function') {
        reject(err)
      } else {
        resolve(null, err)
      }
    })
  }
}

const objectsChainMethods = (bucket_config) => ({
  // Get
  find(query) {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects?read_key=${bucket_config.read_key}${query ? `&query=${encodeURI(JSON.stringify(query))}` : ''}`
    return new FindChaining(endpoint)
  },
  // findOne
  findOne(query) {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${query.id}?read_key=${bucket_config.read_key}`
    return new FindChaining(endpoint)
  },
  // Add
  async insertOne(params) {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects`
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers)
  },
  // Edit
  async updateOne(params, set) {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}`
    const updates = set.$set
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.PATCH, endpoint, updates, headers)
  },
  // Delete
  async deleteOne(params) {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}${params.trigger_webhook ? '?trigger_webhook=true' : ''}`
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers)
  }
})

const objectMethods = (bucket_config) => ({
  objects: objectsChainMethods(bucket_config),
  getObjects: (params) => {
    let endpoint = `${URI}/buckets/${bucket_config.slug}/objects?read_key=${bucket_config.read_key}`
    endpoint = addParamsToObjectsEndpoint(endpoint, params)
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getObject: (params) => {
    if (!params) {
      throw new Error('Must supply params object with object id')
    }
    let endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}?read_key=${bucket_config.read_key}`
    if (params && params.status) {
      endpoint += `&status=${params.status}`
    }
    if (params && params.props) {
      endpoint += `&props=${params.props}`
    }
    if (params && typeof params.use_cache !== 'undefined') {
      endpoint += `&use_cache=${params.use_cache}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getObjectRevisions: (params) => {
    let endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}/revisions?read_key=${bucket_config.read_key}`
    endpoint = addParamsToObjectsEndpoint(endpoint, params)
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getMergeRequestObjects: (params) => {
    let endpoint = `${URI}/buckets/${bucket_config.slug}/merge-requests/${params.id}/objects?read_key=${bucket_config.read_key}`
    endpoint = addParamsToObjectsEndpoint(endpoint, params)
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addObject: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects`
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers)
  },
  addObjectRevision: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}/revisions`
    delete params.id
    delete params.type
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers)
  },
  editObject: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}`
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    // Remove id
    delete params.id
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers)
  },
  getObjectMetafields: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}/metafields?read_key=${bucket_config.read_key}`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  /// DEPRECATED
  editObjectMetafields: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}/metafields`
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    // Remove id
    delete params.id
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers)
  },
  editObjectMetafield: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}/metafields/${params.key}`
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    // Remove id
    delete params.id
    delete params.key
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers)
  },
  deleteObject: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}`
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers)
  }
})

module.exports = objectMethods
