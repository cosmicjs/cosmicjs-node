const FormData = require('form-data')
const { URI } = require('../helpers/constants')
const HTTP_METHODS = require('../helpers/http_methods')
const { requestHandler } = require('../helpers/request_handler')

const extensionMethods = (bucket_config) => ({
  getExtensions: () => {
    const endpoint = `${URI}/${bucket_config.slug}/extensions`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addExtension: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/extensions`
    let data
    if (params.zip) {
      data = new FormData()
      if (params.zip.buffer) {
        data.append('zip', params.zip.buffer, params.zip.originalname)
      } else {
        data.append('zip', params.zip, params.zip.name)
      }
      if (bucket_config.write_key) {
        data.append('write_key', bucket_config.write_key)
      }
    } else {
      data = params
      if (bucket_config.write_key) {
        data.write_key = bucket_config.write_key
      }
    }
    const getHeaders = ((form) => new Promise((resolve, reject) => {
      if (params.zip) {
        if (params.zip.buffer) {
          form.getLength((err, length) => {
            if (err) reject(err)
            const headers = { 'Content-Length': length, ...form.getHeaders() }
            resolve(headers)
          })
        } else {
          resolve({ 'Content-Type': 'multipart/form-data' })
        }
      } else {
        resolve({ 'Content-Type': 'application/json' })
      }
    })
    )
    return getHeaders(data)
      .then((headers) => requestHandler(HTTP_METHODS.POST, endpoint, data, headers)
        .catch((error) => {
          throw error.response.data
        }))
  },
  editExtension: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/extensions/${params.id}`
    if (bucket_config.write_key) {
      params.write_key = bucket_config.write_key
    }
    return requestHandler(HTTP_METHODS.PUT, endpoint, params)
  },
  deleteExtension: (params) => {
    const endpoint = `${URI}/${bucket_config.slug}/extensions/${params.id}`
    return requestHandler(HTTP_METHODS.DELETE, endpoint, bucket_config)
  }
})

module.exports = extensionMethods
