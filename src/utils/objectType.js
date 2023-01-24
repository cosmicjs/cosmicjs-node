const HTTP_METHODS = require('../constants/httpMethods.constants');
const { requestHandler } = require('../helpers/requestHandler');

let headers;

/**
 * Object Type Methods
 * @param bucketConfig - The bucket configuration object.
 * @returns An object containing methods for interacting with object types.
 */
const objectTypeMethods = (bucketConfig) => ({
  /**
   * Gets the object types for the bucket.
   * @returns A promise that resolves to an array of object types.
   */
  getObjectTypes: () => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/object-types?read_key=${bucketConfig.read_key}`;
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /**
   * Gets the object type with the given slug.
   * @param params - The params object including slug.
   * @returns The object type.
   */
  getObjectType: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/object-types/${params.slug}?read_key=${bucketConfig.read_key}`;
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /**
   * Adds an object type to the bucket.
   * @param params - The object type to add.
   * @returns None
   */
  addObjectType: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/object-types`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
  },
  /**
   * Edit an object type in the bucket.
   * @param params - The object type to edit by slug
   * @returns None
   */
  editObjectType: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/object-types/${params.slug}`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    // Remove slug
    delete params.slug;
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
  },
  /**
   * Delete an object type from the bucket.
   * @param params - The object type slug.
   * @returns None
   */
  deleteObjectType: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/object-types/${params.slug}`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
  },
});

module.exports = objectTypeMethods;
