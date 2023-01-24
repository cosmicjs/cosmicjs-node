const API_URL = process?.env?.COSMIC_API_URL || 'https://api.cosmicjs.com';
const API_VERSION = process?.env?.COSMIC_API_VERSION || 'v2';

module.exports = {
  API_URL,
  API_VERSION,
};
