const HTTP_METHODS = require('../constants/httpMethods.constants');
const { requestHandler } = require('../helpers/requestHandler');
const {
  addParamsToObjectsEndpoint,
  FindChaining,
} = require('../helpers/objectHelpers');

let headers;

/**
 * A group of chained functions that you can use on Objects
 * @param endpoint - The endpoint to send the request to.
 * @returns None
 */
const objectsChainMethods = (bucketConfig) => ({
  /**
   * Find objects in the bucket.
   * @param query - The query to use for the find.  This can be a string, an object, or an array of objects.
   * @returns A FindChaining object that can be used to chain find calls.
   */
  find(query) {
    const endpoint = `${bucketConfig.uri}/buckets/${
      bucketConfig.slug
    }/objects?read_key=${bucketConfig.read_key}${
      query ? `&query=${encodeURI(JSON.stringify(query))}` : ''
    }`;
    return new FindChaining(endpoint);
  },
  /**
   * Finds a single object in the bucket.
   * @param query - The query to find the object.
   * @returns A FindChaining object that can be chained with other functions.
   */
  findOne(query) {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${query.id}?read_key=${bucketConfig.read_key}`;
    return new FindChaining(endpoint);
  },
  /**
   * Inserts one object into the bucket.
   * @param params - The object to insert.
   * @returns None
   */
  async insertOne(params) {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
  },
  /**
   * Update a single object in the bucket.
   * @param params - The parameters to update the object with.
   * @param set - The set of updates to apply to the object.
   * @returns None
   */
  async updateOne(params, set) {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${params.id}`;
    const updates = set.$set;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.PATCH, endpoint, updates, headers);
  },
  /**
   * Delete an object from the bucket.
   * @param params - The parameters to pass to the API.
   * @returns A promise that resolves to the response from the API.
   */
  async deleteOne(params) {
    const endpoint = `${bucketConfig.uri}/buckets/${
      bucketConfig.slug
    }/objects/${params.id}${
      params.trigger_webhook ? '?trigger_webhook=true' : ''
    }`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
  },
});

/**
 * Object methods for the bucket.
 * @param bucketConfig - The bucket configuration object.
 * @returns An object with methods for the bucket.
 */
const objectMethods = (bucketConfig) => ({
  objects: objectsChainMethods(bucketConfig),
  /**
   * Get objects from the bucket.
   * @param params - The parameters to add to the endpoint.
   * @returns The response from the API.
   */
  getObjects: (params) => {
    let endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects?read_key=${bucketConfig.read_key}`;
    endpoint = addParamsToObjectsEndpoint(endpoint, params);
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /**
   * Gets an object from the bucket.
   * @param params - The parameters to pass to the API.
   * @returns The object from the bucket.
   */
  getObject: (params) => {
    if (!params) {
      throw new Error('Must supply params object with object id');
    }
    let endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${params.id}?read_key=${bucketConfig.read_key}`;
    if (params && params.status) {
      endpoint += `&status=${params.status}`;
    }
    if (params && params.props) {
      endpoint += `&props=${params.props}`;
    }
    if (params && typeof params.use_cache !== 'undefined') {
      endpoint += `&use_cache=${params.use_cache}`;
    }
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /**
   * Get the revisions of an object.
   * @param params - The parameters to pass to the endpoint.
   * @returns The response from the endpoint.
   */
  getObjectRevisions: (params) => {
    let endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${params.id}/revisions?read_key=${bucketConfig.read_key}`;
    endpoint = addParamsToObjectsEndpoint(endpoint, params);
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /**
   * Gets the objects for a merge request.
   * @param params - The parameters to pass to the endpoint.
   * @returns The objects for the merge request.
   */
  getMergeRequestObjects: (params) => {
    let endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/merge-requests/${params.id}/objects?read_key=${bucketConfig.read_key}`;
    endpoint = addParamsToObjectsEndpoint(endpoint, params);
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /**
   * Add an object to the bucket.
   * @param params - The object to add.
   * @returns None
   */
  addObject: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
  },
  /**
   * Adds an object revision to the bucket.
   * @param params - The object revision parameters.
   * @returns The response from the API.
   */
  addObjectRevision: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${params.id}/revisions`;
    delete params.id;
    delete params.type;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
  },
  /**
   * Edit an object in the bucket.
   * @param params - The parameters to edit the object with.
   * @returns The response from the API.
   */
  editObject: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${params.id}`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    // Remove id
    delete params.id;
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
  },
  /**
   * Gets the metafields for the given object.
   * @param params - The object containing the id of the object to get the metafields for.
   * @returns A promise that resolves to the metafields for the given object.
   */
  getObjectMetafields: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${params.id}/metafields?read_key=${bucketConfig.read_key}`;
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /// DEPRECATED
  editObjectMetafields: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${params.id}/metafields`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    // Remove id
    delete params.id;
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
  },
  /**
   * Edit an object's metafield.
   * @param params - The parameters to edit the object's metafield.
   * @returns The response from the API.
   */
  editObjectMetafield: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${params.id}/metafields/${params.key}`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    // Remove id
    delete params.id;
    delete params.key;
    return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
  },
  /**
   * Delete an object from the bucket.
   * @param params - The object to delete.
   * @returns None
   */
  deleteObject: (params) => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/objects/${params.id}`;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`,
      };
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
  },
});

module.exports = objectMethods;
