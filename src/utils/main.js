const HTTP_METHODS = require('../constants/httpMethods.constants');
const { requestHandler } = require('../helpers/requestHandler');

/**
 * The list of main methods
 */
const mainMethods = (apiConfig) => {
  const URI = apiConfig.apiUrl;

  return {
    /**
     * Authenticate the user with the given credentials.
     * @param params - The credentials to authenticate with.
     * @returns A promise that resolves to the user's token.
     */
    authenticate: (params) => {
      const endpoint = `${URI}/authenticate`;
      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    /**
     * Gets the user object from the server.
     * @returns A promise that resolves to the user object.
     */
    getUser: () => {
      const endpoint = `${URI}/user`;
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Gets all the projects from the server.
     * @returns A promise that resolves to an array of projects.
     */
    getProjects: () => {
      const endpoint = `${URI}/projects`;
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Adds a new project
     * @param params - The parameters to send to the server.
     * @returns A promise that resolves to the response from the server.
     */
    addProject: (params) => {
      const endpoint = `${URI}/projects`;
      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    /**
     * Gets the project with the given id.
     * @param params - The parameters for the request.
     * @returns A promise that resolves to the project.
     */
    getProject: (params) => {
      const endpoint = `${URI}/projects/${params.id}`;
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Edit a project.
     * @param params - The parameters to edit the project with.
     * @returns A promise that resolves to the edited project.
     */
    editProject: (params) => {
      const endpoint = `${URI}/projects/${params.id}`;
      delete params.id;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params);
    },
    /**
     * Deletes a project
     * @param params - The parameters to pass to the API.
     * @returns A promise that resolves to the response from the API.
     */
    deleteProject: (params) => {
      const endpoint = `${URI}/projects/${params.id}`;
      return requestHandler(HTTP_METHODS.DELETE, endpoint, params);
    },
    /**
     * Gets the list of buckets from the server.
     * @returns A promise that resolves to the list of buckets.
     */
    getBuckets: () => {
      const endpoint = `${URI}/buckets`;
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Gets the bucket with the given slug.
     * @param params - The parameters for the request.
     * @returns The bucket with the given slug.
     */
    getBucket: (params) => {
      const endpoint = `${URI}/buckets/${params.slug}`;
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Adds a bucket to the database.
     * @param params - The parameters to send to the server.
     * @returns A promise that resolves to the response from the server.
     */
    addBucket: (params) => {
      const endpoint = `${URI}/buckets`;
      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    /**
     * Edit a bucket.
     * @param params - The parameters to edit the bucket with.
     * @returns None
     */
    editBucket: (params) => {
      const endpoint = `${URI}/buckets/${params.slug}`;
      delete params.slug;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params);
    },
    /**
     * Deletes a bucket.
     * @param params - The parameters to pass to the API.
     * @returns None
     */
    deleteBucket: (params) => {
      const endpoint = `${URI}/buckets/${params.slug}`;
      return requestHandler(HTTP_METHODS.DELETE, endpoint, params);
    },
  };
};

module.exports = mainMethods;
