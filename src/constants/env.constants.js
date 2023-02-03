const apiConfigs = {
  production: {
    v1: {
      apiUrl: 'https://api.cosmicjs.com/v1',
      uploadUrl: 'https://upload.cosmicjs.com/v2',
    },
    v2: {
      apiUrl: 'https://api.cosmicjs.com/v2',
      uploadUrl: 'https://upload.cosmicjs.com/v2',
    },
    v3: {
      apiUrl: 'https://api.cosmicjs.com/v3',
      uploadUrl: 'https://workers.cosmicjs.com/v3',
    },
  },
  staging: {
    v1: {
      apiUrl: 'https://api.cosmic-staging.com/v1',
      uploadUrl: 'https://upload.cosmicjs.com/v2',
    },
    v2: {
      apiUrl: 'https://api.cosmic-staging.com/v2',
      uploadUrl: 'https://upload.cosmicjs.com/v2',
    },
    v3: {
      apiUrl: 'https://api.cosmic-staging.com/v3',
      uploadUrl: 'https://workers.cosmic-staging.com/v3',
    },
  },
};

module.exports = {
  apiConfigs,
};
