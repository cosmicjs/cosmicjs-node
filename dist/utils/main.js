"use strict";

var HTTP_METHODS = require('../constants/httpMethods.constants');
var _require = require('../helpers/requestHandler'),
  requestHandler = _require.requestHandler;

/**
 * The list of main methods
 */
var mainMethods = function mainMethods(apiConfig) {
  var URI = apiConfig.apiUrl;
  return {
    /**
     * Authenticate the user with the given credentials.
     * @param params - The credentials to authenticate with.
     * @returns A promise that resolves to the user's token.
     */
    authenticate: function authenticate(params) {
      var endpoint = "".concat(URI, "/authenticate");
      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    /**
     * Gets the user object from the server.
     * @returns A promise that resolves to the user object.
     */
    getUser: function getUser() {
      var endpoint = "".concat(URI, "/user");
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Gets all the projects from the server.
     * @returns A promise that resolves to an array of projects.
     */
    getProjects: function getProjects() {
      var endpoint = "".concat(URI, "/projects");
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Adds a new project
     * @param params - The parameters to send to the server.
     * @returns A promise that resolves to the response from the server.
     */
    addProject: function addProject(params) {
      var endpoint = "".concat(URI, "/projects");
      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    /**
     * Gets the project with the given id.
     * @param params - The parameters for the request.
     * @returns A promise that resolves to the project.
     */
    getProject: function getProject(params) {
      var endpoint = "".concat(URI, "/projects/").concat(params.id);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Edit a project.
     * @param params - The parameters to edit the project with.
     * @returns A promise that resolves to the edited project.
     */
    editProject: function editProject(params) {
      var endpoint = "".concat(URI, "/projects/").concat(params.id);
      delete params.id;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params);
    },
    /**
     * Deletes a project
     * @param params - The parameters to pass to the API.
     * @returns A promise that resolves to the response from the API.
     */
    deleteProject: function deleteProject(params) {
      var endpoint = "".concat(URI, "/projects/").concat(params.id);
      return requestHandler(HTTP_METHODS.DELETE, endpoint, params);
    },
    /**
     * Gets the list of buckets from the server.
     * @returns A promise that resolves to the list of buckets.
     */
    getBuckets: function getBuckets() {
      var endpoint = "".concat(URI, "/buckets");
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Gets the bucket with the given slug.
     * @param params - The parameters for the request.
     * @returns The bucket with the given slug.
     */
    getBucket: function getBucket(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(params.slug);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Adds a bucket to the database.
     * @param params - The parameters to send to the server.
     * @returns A promise that resolves to the response from the server.
     */
    addBucket: function addBucket(params) {
      var endpoint = "".concat(URI, "/buckets");
      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    /**
     * Edit a bucket.
     * @param params - The parameters to edit the bucket with.
     * @returns None
     */
    editBucket: function editBucket(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(params.slug);
      delete params.slug;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params);
    },
    /**
     * Deletes a bucket.
     * @param params - The parameters to pass to the API.
     * @returns None
     */
    deleteBucket: function deleteBucket(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(params.slug);
      return requestHandler(HTTP_METHODS.DELETE, endpoint, params);
    }
  };
};
module.exports = mainMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIVFRQX01FVEhPRFMiLCJyZXF1aXJlIiwicmVxdWVzdEhhbmRsZXIiLCJtYWluTWV0aG9kcyIsImFwaUNvbmZpZyIsIlVSSSIsImFwaVVybCIsImF1dGhlbnRpY2F0ZSIsInBhcmFtcyIsImVuZHBvaW50IiwiUE9TVCIsImdldFVzZXIiLCJHRVQiLCJnZXRQcm9qZWN0cyIsImFkZFByb2plY3QiLCJnZXRQcm9qZWN0IiwiaWQiLCJlZGl0UHJvamVjdCIsIlBBVENIIiwiZGVsZXRlUHJvamVjdCIsIkRFTEVURSIsImdldEJ1Y2tldHMiLCJnZXRCdWNrZXQiLCJzbHVnIiwiYWRkQnVja2V0IiwiZWRpdEJ1Y2tldCIsImRlbGV0ZUJ1Y2tldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvaHR0cE1ldGhvZHMuY29uc3RhbnRzJyk7XG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RIYW5kbGVyJyk7XG5cbi8qKlxuICogVGhlIGxpc3Qgb2YgbWFpbiBtZXRob2RzXG4gKi9cbmNvbnN0IG1haW5NZXRob2RzID0gKGFwaUNvbmZpZykgPT4ge1xuICBjb25zdCBVUkkgPSBhcGlDb25maWcuYXBpVXJsO1xuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogQXV0aGVudGljYXRlIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIGNyZWRlbnRpYWxzLlxuICAgICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgY3JlZGVudGlhbHMgdG8gYXV0aGVudGljYXRlIHdpdGguXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHVzZXIncyB0b2tlbi5cbiAgICAgKi9cbiAgICBhdXRoZW50aWNhdGU6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9hdXRoZW50aWNhdGVgO1xuICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHVzZXIgb2JqZWN0IGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgdXNlciBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0VXNlcjogKCkgPT4ge1xuICAgICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L3VzZXJgO1xuICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldHMgYWxsIHRoZSBwcm9qZWN0cyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgcHJvamVjdHMuXG4gICAgICovXG4gICAgZ2V0UHJvamVjdHM6ICgpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9wcm9qZWN0c2A7XG4gICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5ldyBwcm9qZWN0XG4gICAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIHNlcnZlci5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIGFkZFByb2plY3Q6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9wcm9qZWN0c2A7XG4gICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvamVjdCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBwcm9qZWN0LlxuICAgICAqL1xuICAgIGdldFByb2plY3Q6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9wcm9qZWN0cy8ke3BhcmFtcy5pZH1gO1xuICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEVkaXQgYSBwcm9qZWN0LlxuICAgICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBlZGl0IHRoZSBwcm9qZWN0IHdpdGguXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGVkaXRlZCBwcm9qZWN0LlxuICAgICAqL1xuICAgIGVkaXRQcm9qZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vcHJvamVjdHMvJHtwYXJhbXMuaWR9YDtcbiAgICAgIGRlbGV0ZSBwYXJhbXMuaWQ7XG4gICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSBwcm9qZWN0XG4gICAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIEFQSS5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgQVBJLlxuICAgICAqL1xuICAgIGRlbGV0ZVByb2plY3Q6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9wcm9qZWN0cy8ke3BhcmFtcy5pZH1gO1xuICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBwYXJhbXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbGlzdCBvZiBidWNrZXRzIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbGlzdCBvZiBidWNrZXRzLlxuICAgICAqL1xuICAgIGdldEJ1Y2tldHM6ICgpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzYDtcbiAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBidWNrZXQgd2l0aCB0aGUgZ2l2ZW4gc2x1Zy5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIFRoZSBidWNrZXQgd2l0aCB0aGUgZ2l2ZW4gc2x1Zy5cbiAgICAgKi9cbiAgICBnZXRCdWNrZXQ6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7cGFyYW1zLnNsdWd9YDtcbiAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYnVja2V0IHRvIHRoZSBkYXRhYmFzZS5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgc2VydmVyLlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgYWRkQnVja2V0OiAocGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0c2A7XG4gICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRWRpdCBhIGJ1Y2tldC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gZWRpdCB0aGUgYnVja2V0IHdpdGguXG4gICAgICogQHJldHVybnMgTm9uZVxuICAgICAqL1xuICAgIGVkaXRCdWNrZXQ6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7cGFyYW1zLnNsdWd9YDtcbiAgICAgIGRlbGV0ZSBwYXJhbXMuc2x1ZztcbiAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIGJ1Y2tldC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgQVBJLlxuICAgICAqIEByZXR1cm5zIE5vbmVcbiAgICAgKi9cbiAgICBkZWxldGVCdWNrZXQ6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7cGFyYW1zLnNsdWd9YDtcbiAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgcGFyYW1zKTtcbiAgICB9LFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluTWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJ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