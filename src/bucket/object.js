const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')
let headers;

const addParamsToObjectsEndpoint = (endpoint, params) => {
  if (params && params.limit) {
    endpoint += `&limit=${params.limit}`
  }
  if (params && params.skip) {
    endpoint += `&skip=${params.skip}`
  }
  if (params && params.status) {
    endpoint += `&status=${params.status}`
  }
  if (params && params.after) {
    endpoint += `&after=${params.after}`
  }
  if (params && params.sort) {
    endpoint += `&sort=${params.sort}`
  }
  if (params && params.show_metafields) {
    endpoint += `&show_metafields=${params.show_metafields}`
  }
  if (params && params.pretty) {
    endpoint += `&pretty=${params.pretty}`
  }
  if (params && params.props) {
    endpoint += `&props=${params.props}`
  }
  if (params && params.query) {
    endpoint += `&query=${encodeURI(JSON.stringify(params.query))}`
  }
  if (params && typeof params.use_cache !== 'undefined') {
    endpoint += `&use_cache=${params.use_cache}`
  }
  return endpoint
}

const objectsChainMethods = (bucket_config) => {
  return {
    // Get
    find: function (query) {
      this.endpoint = `${URI}/buckets/${bucket_config.slug}/objects?read_key=${bucket_config.read_key}&query=${encodeURI(JSON.stringify(query))}`
      return this
    },
    // Add
    insertOne: async function (params) {
      const endpoint = `${URI}/buckets/${bucket_config.slug}/objects`
      if (bucket_config.write_key) {
        headers = {
          "Authorization": `Bearer ${bucket_config.write_key}`
        }
      }
      return (await requestHandler(HTTP_METHODS.POST, endpoint, params, headers)).object
    },
    // Edit
    updateOne: async function (params, set) {
      const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}`
      const updates = set["$set"];
      if (bucket_config.write_key) {
        headers = {
          "Authorization": `Bearer ${bucket_config.write_key}`
        }
      }
      return (await requestHandler(HTTP_METHODS.PATCH, endpoint, updates, headers)).object
    },
    // Delete
    deleteOne: async function (params) {
      const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}`
      if (bucket_config.write_key) {
        headers = {
          "Authorization": `Bearer ${bucket_config.write_key}`
        }
      }
      return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers)
    },
    props: function (props) {
      this.endpoint += `&props=${props}`
      return this
    },
    sort: function (sort) {
      this.endpoint += `&sort=${sort}`
      return this
    },
    limit: function (limit) {
      this.endpoint += `&limit=${limit}`
      return this
    },
    skip: function (skip) {
      this.endpoint += `&skip=${skip}`
      return this
    },
    toArray: async function () {
      return (await requestHandler(HTTP_METHODS.GET, this.endpoint)).objects
    },
    done: async function () {
      return requestHandler(HTTP_METHODS.GET, this.endpoint)
    }
  }
}

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
        "Authorization": `Bearer ${bucket_config.write_key}`
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
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers)
  },
  editObject: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    // Remove id
    delete params.id;
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers)
  },
  getObjectMetafields: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}/metafields?read_key=${bucket_config.read_key}`
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /// DEPRECATED
  editObjectMetafields: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}/metafields`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    // Remove id
    delete params.id;
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers)
  },
  editObjectMetafield: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}/metafields/${params.key}`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    // Remove id
    delete params.id;
    delete params.key;
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers)
  },
  deleteObject: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}`
    if (bucket_config.write_key) {
      headers = {
        "Authorization": `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers)
  }
})

module.exports = objectMethods
