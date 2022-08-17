const HTTP_METHODS = require('./http_methods')
const { requestHandler } = require('./request_handler_promise')

const promiser = (endpoint) => new Promise((resolve, reject) => {
  requestHandler(HTTP_METHODS.GET, endpoint)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err.response ? err.response.data : err.response))
})
module.exports = promiser
