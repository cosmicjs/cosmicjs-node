const HTTP_METHODS = require('./http_methods')
const { requestHandler } = require('./request_handler')

const promiser = (endpoint) => new Promise((res) => {
  res(requestHandler(HTTP_METHODS.GET, endpoint))
})
module.exports = promiser
