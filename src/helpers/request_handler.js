const axios = require('axios')

const init = (config) => {
  // Accept Encoding in Node
  if (typeof window === 'undefined') {
    axios.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate'
  }
  if (config && config.token) {
    axios.defaults.headers.common.Authorization = config.token
  }
}

const requestHandler = (method, url, data, headers) => {
  const config = {
    method,
    url,
    data,
    headers
  }
  return axios(config).then((response) => response.data)
    .catch((error) => (error.response ? error.response.data : error.response))
}

module.exports = {
  init,
  requestHandler
}
