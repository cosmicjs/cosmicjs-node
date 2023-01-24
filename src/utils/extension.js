const FormData = require('form-data');
const { URI } = require('../constants/env.constants');
const HTTP_METHODS = require('../constants/httpMethods.constants');
const { requestHandler } = require('../helpers/requestHandler');

/**
 * A set of methods for interacting with extensions.
 * @param bucketConfig - The bucket configuration object.
 * @returns A set of methods for interacting with extensions.
 */
const extensionMethods = (bucketConfig) => ({
  /**
   * Gets the extensions for the current bucket.
   * @returns A promise that resolves to an array of extensions.
   */
  getExtensions: () => {
    const endpoint = `${URI}/${bucketConfig.slug}/extensions`;
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /**
   * Add an extension to the bucket.
   * @param params - The parameters to add the extension.
   * @returns A promise that resolves to the extension object.
   */
  addExtension: (params) => {
    const endpoint = `${URI}/${bucketConfig.slug}/extensions`;
    let data;
    if (params.zip) {
      data = new FormData();
      if (params.zip.buffer) {
        data.append('zip', params.zip.buffer, params.zip.originalname);
      } else {
        data.append('zip', params.zip, params.zip.name);
      }
      if (bucketConfig.write_key) {
        data.append('write_key', bucketConfig.write_key);
      }
    } else {
      data = params;
      if (bucketConfig.write_key) {
        data.write_key = bucketConfig.write_key;
      }
    }
    /**
     * Gets the headers for the request.
     * @param form - The form to get the headers for.
     * @returns A promise that resolves to the headers.
     */
    const getHeaders = (form) =>
      new Promise((resolve, reject) => {
        if (params.zip) {
          if (params.zip.buffer) {
            form.getLength((err, length) => {
              if (err) reject(err);
              const headers = {
                'Content-Length': length,
                ...form.getHeaders(),
              };
              resolve(headers);
            });
          } else {
            resolve({ 'Content-Type': 'multipart/form-data' });
          }
        } else {
          resolve({ 'Content-Type': 'application/json' });
        }
      });
    return getHeaders(data).then((headers) =>
      requestHandler(HTTP_METHODS.POST, endpoint, data, headers).catch(
        (error) => {
          throw error.response.data;
        }
      )
    );
  },
  /**
   * Edit an extension in the bucket.
   * @param params - The parameters to edit the extension with.
   * @returns A promise that resolves to the edited extension.
   */
  editExtension: (params) => {
    const endpoint = `${URI}/${bucketConfig.slug}/extensions/${params.id}`;
    if (bucketConfig.write_key) {
      params.write_key = bucketConfig.write_key;
    }
    return requestHandler(HTTP_METHODS.PUT, endpoint, params);
  },
  /**
   * Deletes an extension from the bucket.
   * @param params - The parameters to pass to the request.
   * @returns None
   */
  deleteExtension: (params) => {
    const endpoint = `${URI}/${bucketConfig.slug}/extensions/${params.id}`;
    return requestHandler(HTTP_METHODS.DELETE, endpoint, bucketConfig);
  },
});

module.exports = extensionMethods;
