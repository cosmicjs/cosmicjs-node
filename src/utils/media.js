const FormData = require('form-data');
const HTTP_METHODS = require('../constants/httpMethods.constants');
const { requestHandler } = require('../helpers/requestHandler');
const promiser = require('../helpers/promiser');

/**
 * Finds media in the bucket.
 * @param query - The query to find media with.
 * @returns A promise that resolves to the media found.
 */
const mediaChainMethods = (bucketConfig) => ({
  /**
   * Find media in the bucket.
   * @param query - The query to search for.
   * @returns A new Media object.
   */
  find(query) {
    this.endpoint = `${bucketConfig.uri}/buckets/${
      bucketConfig.slug
    }/media?read_key=${bucketConfig.read_key}${
      query ? `&query=${encodeURI(JSON.stringify(query))}` : ''
    }`;
    return this;
  },
  /**
   * Finds a single media object by its ID.
   * @param query - The query object.
   * @returns The Media object.
   */
  findOne(query) {
    this.endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media/${query.id}?read_key=${bucketConfig.read_key}`;
    return this;
  },
  /**
   * Adds the given props to the endpoint.
   * @param props - the props to add to the endpoint.
   * @returns None
   */
  props(props) {
    this.endpoint += `&props=${props}`;
    return this;
  },
  /**
   * Sort the results by the given field.
   * @param sort - The field to sort by.
   * @returns None
   */
  sort(sort) {
    this.endpoint += `&sort=${sort}`;
    return this;
  },
  /**
   * Limit the number of results returned.
   * @param limit - The number of results to return.
   * @returns None
   */
  limit(limit) {
    this.endpoint += `&limit=${limit}`;
    return this;
  },
  /**
   * Skip the given number of results.
   * @param skip - The number of results to skip.
   * @returns None
   */
  skip(skip) {
    this.endpoint += `&skip=${skip}`;
    return this;
  },
  /**
   * Uploads a file to the bucket.
   * @param params - The parameters to upload the file with.
   * @returns A promise that resolves to the uploaded file.
   */
  async insertOne(params) {
    const endpoint = `${bucketConfig.uploadUri}/buckets/${bucketConfig.slug}/media`;
    const data = new FormData();
    if (params.media.buffer) {
      data.append('media', params.media.buffer, params.media.originalname);
    } else {
      data.append('media', params.media, params.media.name);
    }
    if (bucketConfig.write_key) {
      data.append('write_key', bucketConfig.write_key);
    }
    if (params.folder) {
      data.append('folder', params.folder);
    }
    if (params.metadata) {
      data.append('metadata', JSON.stringify(params.metadata));
    }
    if (params.trigger_webhook) {
      data.append('trigger_webhook', params.trigger_webhook.toString());
    }
    const getHeaders = (form) =>
      new Promise((resolve, reject) => {
        if (params.media.buffer) {
          form.getLength((err, length) => {
            if (err) reject(err);
            const headers = { 'Content-Length': length, ...form.getHeaders() };
            resolve(headers);
          });
        } else {
          resolve({ 'Content-Type': 'multipart/form-data' });
        }
      });
    return getHeaders(data)
      .then((headers) => {
        headers.Authorization = `Bearer ${bucketConfig.write_key}`;
        return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
      })
      .catch((error) => {
        throw error.response.data;
      });
  },
  /**
   * Deletes a single media from the bucket.
   * @param params - The parameters for the request, including id
   * @returns None
   */
  async deleteOne(params) {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media/${
      params.id
    }${params.trigger_webhook ? '?trigger_webhook=true' : ''}`;
    let headers;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
  },
  async then(resolve, reject) {
    promiser(this.endpoint)
      .then((res) => resolve(res, null))
      .catch((err) => {
        if (typeof reject === 'function') {
          reject(err);
        } else {
          resolve(null, err);
        }
      });
  },
});

// Legacy Methods

/**
 * A set of methods for interacting with media in a bucket.
 * @param bucketConfig - The bucket configuration object.
 * @returns A set of methods for interacting with media in a bucket.
 */
const mediaMethods = (bucketConfig) => ({
  media: mediaChainMethods(bucketConfig),
  addMedia: (params) => {
    const endpoint = `${bucketConfig.uploadUri}/buckets/${bucketConfig.slug}/media`;
    const data = new FormData();
    if (params.media.buffer) {
      data.append('media', params.media.buffer, params.media.originalname);
    } else {
      data.append('media', params.media, params.media.name);
    }
    if (bucketConfig.write_key) {
      data.append('write_key', bucketConfig.write_key);
    }
    if (params.folder) {
      data.append('folder', params.folder);
    }
    if (params.metadata) {
      data.append('metadata', JSON.stringify(params.metadata));
    }
    if (params.trigger_webhook) {
      data.append('trigger_webhook', params.trigger_webhook.toString());
    }
    const getHeaders = (form) =>
      new Promise((resolve, reject) => {
        if (params.media.buffer) {
          form.getLength((err, length) => {
            if (err) reject(err);
            const headers = { 'Content-Length': length, ...form.getHeaders() };
            resolve(headers);
          });
        } else {
          resolve({ 'Content-Type': 'multipart/form-data' });
        }
      });
    return getHeaders(data)
      .then((headers) => {
        headers.Authorization = `Bearer ${bucketConfig.write_key}`;
        return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
      })
      .catch((error) => {
        throw error.response.data;
      });
  },
  getMedia: (params) => {
    let endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media?read_key=${bucketConfig.read_key}`;
    if (params && params.limit) {
      endpoint += `&limit=${params.limit}`;
    }
    if (params && params.skip) {
      endpoint += `&skip=${params.skip}`;
    }
    if (params && params.query) {
      endpoint += `&query=${encodeURI(JSON.stringify(params.query))}`;
    }
    if (params && params.props) {
      endpoint += `&props=${params.props}`;
    }
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  getSingleMedia: (params) => {
    let endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media/${params.id}?read_key=${bucketConfig.read_key}`;
    if (params && params.props) {
      endpoint += `&props=${params.props}`;
    }
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  deleteMedia: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media/${
      params.id
    }${params.trigger_webhook ? '?trigger_webhook=true' : ''}`;
    let headers;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
  },
});

module.exports = mediaMethods;
