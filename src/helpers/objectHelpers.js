const promiser = require('./promiser');

/**
 * Takes in an endpoint and adds the params to the end of the endpoint.
 * @param endpoint - the endpoint to add the params to.
 * @param params - the params to add to the endpoint.
 * @returns the endpoint with the params added.
 */
const addParamsToObjectsEndpoint = (endpoint, params) => {
  let ep = endpoint;
  /**
   * > Checks if the parameter is present
   * > Add the parameter to the end of the URL if it is present.
   * @param params - The parameters object.
   * @returns None
   */
  if (params) {
    if (params.limit) {
      ep += `&limit=${params.limit}`;
    }
    if (params.skip) {
      ep += `&skip=${params.skip}`;
    }
    if (params.status) {
      ep += `&status=${params.status}`;
    }
    if (params.after) {
      ep += `&after=${params.after}`;
    }
    if (params.sort) {
      ep += `&sort=${params.sort}`;
    }
    if (params.show_metafields) {
      ep += `&show_metafields=${params.show_metafields}`;
    }
    if (params.pretty) {
      ep += `&pretty=${params.pretty}`;
    }
    if (params.props) {
      let propStr = params.props;
      if (Array.isArray(propStr)) {
        propStr = propStr
          .filter((prop) => typeof prop === 'string')
          .map((prop) => prop.trim())
          .filter((prop) => !!prop)
          .toString();
      }
      ep += `&props=${propStr}`;
    }
    if (params.query) {
      ep += `&query=${encodeURI(JSON.stringify(params.query))}`;
    }
    if (typeof params.use_cache !== 'undefined') {
      ep += `&use_cache=${params.use_cache}`;
    }
    if (params.depth && typeof params.depth === 'number') {
      ep += `&depth=${params.depth}`;
    }
  }
  return ep;
};

/**
 * Finds the chain of properties that lead to the given property.
 * @param endpoint - the endpoint to query for the chain of properties.
 * @returns A promise that resolves to the chain of properties that lead to the given property.
 */
class FindChaining {
  /**
   * Constructor for the FindChaining class.
   * @param endpoint - The endpoint to send the request to.
   */
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  /** Properties for the FindChaining class */
  props(props) {
    let propStr = props;
    if (Array.isArray(propStr)) {
      propStr = propStr
        .filter((prop) => typeof prop === 'string')
        .map((prop) => prop.trim())
        .filter((prop) => !!prop)
        .toString();
    }
    this.endpoint += `&props=${propStr}`;
    return this;
  }

  depth(depth) {
    this.endpoint += `&depth=${depth}`;
    return this;
  }

  sort(sort) {
    this.endpoint += `&sort=${sort}`;
    return this;
  }

  limit(limit) {
    this.endpoint += `&limit=${limit}`;
    return this;
  }

  skip(skip) {
    this.endpoint += `&skip=${skip}`;
    return this;
  }

  status(status) {
    this.endpoint += `&status=${status}`;
    return this;
  }

  after(after) {
    this.endpoint += `&after=${after}`;
    return this;
  }

  showMetafields(showMetafields) {
    this.endpoint += `&show_metafields=${showMetafields}`;
    return this;
  }

  useCache(useCache) {
    this.endpoint += `&use_cache=${useCache}`;
    return this;
  }

  /**
   * A wrapper around the `promiser` function that returns a promise that resolves with the result of the request.
   * @param endpoint - The endpoint to request.
   * @returns A promise that resolves with the result of the request.
   */
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
  }
}

module.exports = { addParamsToObjectsEndpoint, FindChaining };
