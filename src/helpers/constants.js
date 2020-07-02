const API_URL = process.env.COSMIC_API_URL || 'https://api.cosmicjs.com'
const UPLOAD_API_URL = process.env.UPLOAD_API_URL || 'https://upload.cosmicjs.com'
const API_VERSION = process.env.COSMIC_API_VERSION || 'v1'
const URI = `${API_URL}/${API_VERSION}`

module.exports = {
  API_URL,
  UPLOAD_API_URL,
  API_VERSION,
  URI
}
