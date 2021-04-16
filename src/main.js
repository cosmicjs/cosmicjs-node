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
  getProjects: () => {
    const endpoint = `${URI}/projects`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  addProject: (params) => {
    const endpoint = `${URI}/projects`
    return requestHandler(HTTP_METHODS.POST, endpoint, params)
  },
  getProject: (params) => {
    const endpoint = `${URI}/projects/${params.id}`
    return requestHandler(HTTP_METHODS.GET, endpoint)
  },
  editProject: (params) => {
    const endpoint = `${URI}/projects/${params.id}`
    delete params.id
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params)
  },
  deleteProject: (params) => {
    const endpoint = `${URI}/projects/${params.id}`
    return requestHandler(HTTP_METHODS.DELETE, endpoint, params)
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
  editBucket: (params) => {
    const endpoint = `${URI}/buckets/${params.slug}`
    delete params.slug
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params)
  },
  deleteBucket: (params) => {
    const endpoint = `${URI}/buckets/${params.slug}`
    return requestHandler(HTTP_METHODS.DELETE, endpoint, params)
  },
}

module.exports = mainMethods
