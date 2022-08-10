const FormData = require('form-data')
const { URI, UPLOAD_API_URL, API_VERSION } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')

const mediaChainMethods = (bucket_config) => ({
  // Get
  find(query) {
    this.endpoint = `${URI}/buckets/${bucket_config.slug}/media?read_key=${bucket_config.read_key}${query ? `&query=${encodeURI(JSON.stringify(query))}` : ''}`
    return this
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
  },
  props(props) {
    this.endpoint += `&props=${props}`
    return this
  },
  sort(sort) {
    this.endpoint += `&sort=${sort}`
    return this
  },
  limit(limit) {
    this.endpoint += `&limit=${limit}`
    return this
  },
  skip(skip) {
    this.endpoint += `&skip=${skip}`
    return this
  },
  async then(resolve) {
    resolve(
      new Promise((res) => {
        res(requestHandler(HTTP_METHODS.GET, this.endpoint))
      })
    )
  }
})

const mediaMethods = (bucket_config) => ({
  media: mediaChainMethods(bucket_config),
  addMedia: (params) => {
    const endpoint = `${UPLOAD_API_URL}/${API_VERSION}/buckets/${bucket_config.slug}/media`
    const data = new FormData()
    if (params.media.buffer) {
      data.append('media', params.media.buffer, params.media.originalname)
    } else {
      data.append('media', params.media, params.media.name)
    }
    if (bucket_config.write_key) {
      data.append('write_key', bucket_config.write_key)
    }
    if (params.folder) {
      data.append('folder', params.folder)
    }
    if (params.metadata) {
      data.append('metadata', JSON.stringify(params.metadata))
    }
    if (params.trigger_webhook) {
      data.append('trigger_webhook', params.trigger_webhook.toString())
    }
    const getHeaders = ((form) => new Promise((resolve, reject) => {
      if (params.media.buffer) {
        form.getLength((err, length) => {
          if (err) reject(err)
          const headers = { 'Content-Length': length, ...form.getHeaders() }
          resolve(headers)
        })
      } else {
        resolve({ 'Content-Type': 'multipart/form-data' })
      }
    })
    )
    return getHeaders(data)
      .then((headers) => {
        headers.Authorization = `Bearer ${bucket_config.write_key}`
        return requestHandler(HTTP_METHODS.POST, endpoint, data, headers)
      }).catch((error) => {
        throw error.response.data
      })
  },
  getMedia: (params) => {
    let endpoint = `${URI}/buckets/${bucket_config.slug}/media?read_key=${bucket_config.read_key}`
    if (params && params.limit) {
      endpoint += `&limit=${params.limit}`
    }
    if (params && params.skip) {
      endpoint += `&skip=${params.skip}`
    }
    if (params && params.query) {
      endpoint += `&query=${encodeURI(JSON.stringify(params.query))}`
    }
    if (params && params.props) {
      endpoint += `&props=${params.props}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  getSingleMedia: (params) => {
    let endpoint = `${URI}/buckets/${bucket_config.slug}/media/${params.id}?read_key=${bucket_config.read_key}`
    if (params && params.props) {
      endpoint += `&props=${params.props}`
    }
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  deleteMedia: (params) => {
    const endpoint = `${URI}/buckets/${bucket_config.slug}/media/${params.id}${params.trigger_webhook ? '?trigger_webhook=true' : ''}`
    let headers
    if (bucket_config.write_key) {
      headers = {
        Authorization: `Bearer ${bucket_config.write_key}`
      }
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers)
  }
})

module.exports = mediaMethods
