"use strict";

var HTTP_METHODS = require('../constants/httpMethods.constants');
var _require = require('../helpers/requestHandler'),
  requestHandler = _require.requestHandler;
var _require2 = require('../constants/env.constants'),
  API_URL = _require2.API_URL,
  API_VERSION = _require2.API_VERSION;

/**
 * The list of main methods
 */
var mainMethods = function mainMethods(config) {
  var URI = "".concat(config.apiUrl || API_URL, "/").concat(config.apiVersion || API_VERSION);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIVFRQX01FVEhPRFMiLCJyZXF1aXJlIiwicmVxdWVzdEhhbmRsZXIiLCJBUElfVVJMIiwiQVBJX1ZFUlNJT04iLCJtYWluTWV0aG9kcyIsImNvbmZpZyIsIlVSSSIsImFwaVVybCIsImFwaVZlcnNpb24iLCJhdXRoZW50aWNhdGUiLCJwYXJhbXMiLCJlbmRwb2ludCIsIlBPU1QiLCJnZXRVc2VyIiwiR0VUIiwiZ2V0UHJvamVjdHMiLCJhZGRQcm9qZWN0IiwiZ2V0UHJvamVjdCIsImlkIiwiZWRpdFByb2plY3QiLCJQQVRDSCIsImRlbGV0ZVByb2plY3QiLCJERUxFVEUiLCJnZXRCdWNrZXRzIiwiZ2V0QnVja2V0Iiwic2x1ZyIsImFkZEJ1Y2tldCIsImVkaXRCdWNrZXQiLCJkZWxldGVCdWNrZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL2h0dHBNZXRob2RzLmNvbnN0YW50cycpO1xuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0SGFuZGxlcicpO1xuY29uc3QgeyBBUElfVVJMLCBBUElfVkVSU0lPTiB9ID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL2Vudi5jb25zdGFudHMnKTtcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiBtYWluIG1ldGhvZHNcbiAqL1xuY29uc3QgbWFpbk1ldGhvZHMgPSAoY29uZmlnKSA9PiB7XG4gIGNvbnN0IFVSSSA9IGAke2NvbmZpZy5hcGlVcmwgfHwgQVBJX1VSTH0vJHtjb25maWcuYXBpVmVyc2lvbiB8fCBBUElfVkVSU0lPTn1gO1xuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogQXV0aGVudGljYXRlIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIGNyZWRlbnRpYWxzLlxuICAgICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgY3JlZGVudGlhbHMgdG8gYXV0aGVudGljYXRlIHdpdGguXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHVzZXIncyB0b2tlbi5cbiAgICAgKi9cbiAgICBhdXRoZW50aWNhdGU6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9hdXRoZW50aWNhdGVgO1xuICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHVzZXIgb2JqZWN0IGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgdXNlciBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0VXNlcjogKCkgPT4ge1xuICAgICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L3VzZXJgO1xuICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldHMgYWxsIHRoZSBwcm9qZWN0cyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgcHJvamVjdHMuXG4gICAgICovXG4gICAgZ2V0UHJvamVjdHM6ICgpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9wcm9qZWN0c2A7XG4gICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5ldyBwcm9qZWN0XG4gICAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIHNlcnZlci5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIGFkZFByb2plY3Q6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9wcm9qZWN0c2A7XG4gICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvamVjdCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBwcm9qZWN0LlxuICAgICAqL1xuICAgIGdldFByb2plY3Q6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9wcm9qZWN0cy8ke3BhcmFtcy5pZH1gO1xuICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEVkaXQgYSBwcm9qZWN0LlxuICAgICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBlZGl0IHRoZSBwcm9qZWN0IHdpdGguXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGVkaXRlZCBwcm9qZWN0LlxuICAgICAqL1xuICAgIGVkaXRQcm9qZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vcHJvamVjdHMvJHtwYXJhbXMuaWR9YDtcbiAgICAgIGRlbGV0ZSBwYXJhbXMuaWQ7XG4gICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSBwcm9qZWN0XG4gICAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIEFQSS5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgQVBJLlxuICAgICAqL1xuICAgIGRlbGV0ZVByb2plY3Q6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9wcm9qZWN0cy8ke3BhcmFtcy5pZH1gO1xuICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBwYXJhbXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbGlzdCBvZiBidWNrZXRzIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbGlzdCBvZiBidWNrZXRzLlxuICAgICAqL1xuICAgIGdldEJ1Y2tldHM6ICgpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzYDtcbiAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBidWNrZXQgd2l0aCB0aGUgZ2l2ZW4gc2x1Zy5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIFRoZSBidWNrZXQgd2l0aCB0aGUgZ2l2ZW4gc2x1Zy5cbiAgICAgKi9cbiAgICBnZXRCdWNrZXQ6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7cGFyYW1zLnNsdWd9YDtcbiAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYnVja2V0IHRvIHRoZSBkYXRhYmFzZS5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgc2VydmVyLlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgYWRkQnVja2V0OiAocGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0c2A7XG4gICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRWRpdCBhIGJ1Y2tldC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gZWRpdCB0aGUgYnVja2V0IHdpdGguXG4gICAgICogQHJldHVybnMgTm9uZVxuICAgICAqL1xuICAgIGVkaXRCdWNrZXQ6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7cGFyYW1zLnNsdWd9YDtcbiAgICAgIGRlbGV0ZSBwYXJhbXMuc2x1ZztcbiAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIGJ1Y2tldC5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgQVBJLlxuICAgICAqIEByZXR1cm5zIE5vbmVcbiAgICAgKi9cbiAgICBkZWxldGVCdWNrZXQ6IChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7cGFyYW1zLnNsdWd9YDtcbiAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgcGFyYW1zKTtcbiAgICB9LFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluTWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztBQUNsRSxlQUEyQkEsT0FBTyxDQUFDLDJCQUEyQixDQUFDO0VBQXZEQyxjQUFjLFlBQWRBLGNBQWM7QUFDdEIsZ0JBQWlDRCxPQUFPLENBQUMsNEJBQTRCLENBQUM7RUFBOURFLE9BQU8sYUFBUEEsT0FBTztFQUFFQyxXQUFXLGFBQVhBLFdBQVc7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQUlDLE1BQU0sRUFBSztFQUM5QixJQUFNQyxHQUFHLGFBQU1ELE1BQU0sQ0FBQ0UsTUFBTSxJQUFJTCxPQUFPLGNBQUlHLE1BQU0sQ0FBQ0csVUFBVSxJQUFJTCxXQUFXLENBQUU7RUFFN0UsT0FBTztJQUNMO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFDSU0sWUFBWSxFQUFFLHNCQUFDQyxNQUFNLEVBQUs7TUFDeEIsSUFBTUMsUUFBUSxhQUFNTCxHQUFHLGtCQUFlO01BQ3RDLE9BQU9MLGNBQWMsQ0FBQ0YsWUFBWSxDQUFDYSxJQUFJLEVBQUVELFFBQVEsRUFBRUQsTUFBTSxDQUFDO0lBQzVELENBQUM7SUFDRDtBQUNKO0FBQ0E7QUFDQTtJQUNJRyxPQUFPLEVBQUUsbUJBQU07TUFDYixJQUFNRixRQUFRLGFBQU1MLEdBQUcsVUFBTztNQUM5QixPQUFPTCxjQUFjLENBQUNGLFlBQVksQ0FBQ2UsR0FBRyxFQUFFSCxRQUFRLENBQUM7SUFDbkQsQ0FBQztJQUNEO0FBQ0o7QUFDQTtBQUNBO0lBQ0lJLFdBQVcsRUFBRSx1QkFBTTtNQUNqQixJQUFNSixRQUFRLGFBQU1MLEdBQUcsY0FBVztNQUNsQyxPQUFPTCxjQUFjLENBQUNGLFlBQVksQ0FBQ2UsR0FBRyxFQUFFSCxRQUFRLENBQUM7SUFDbkQsQ0FBQztJQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFDSUssVUFBVSxFQUFFLG9CQUFDTixNQUFNLEVBQUs7TUFDdEIsSUFBTUMsUUFBUSxhQUFNTCxHQUFHLGNBQVc7TUFDbEMsT0FBT0wsY0FBYyxDQUFDRixZQUFZLENBQUNhLElBQUksRUFBRUQsUUFBUSxFQUFFRCxNQUFNLENBQUM7SUFDNUQsQ0FBQztJQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFDSU8sVUFBVSxFQUFFLG9CQUFDUCxNQUFNLEVBQUs7TUFDdEIsSUFBTUMsUUFBUSxhQUFNTCxHQUFHLHVCQUFhSSxNQUFNLENBQUNRLEVBQUUsQ0FBRTtNQUMvQyxPQUFPakIsY0FBYyxDQUFDRixZQUFZLENBQUNlLEdBQUcsRUFBRUgsUUFBUSxDQUFDO0lBQ25ELENBQUM7SUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBQ0lRLFdBQVcsRUFBRSxxQkFBQ1QsTUFBTSxFQUFLO01BQ3ZCLElBQU1DLFFBQVEsYUFBTUwsR0FBRyx1QkFBYUksTUFBTSxDQUFDUSxFQUFFLENBQUU7TUFDL0MsT0FBT1IsTUFBTSxDQUFDUSxFQUFFO01BQ2hCLE9BQU9qQixjQUFjLENBQUNGLFlBQVksQ0FBQ3FCLEtBQUssRUFBRVQsUUFBUSxFQUFFRCxNQUFNLENBQUM7SUFDN0QsQ0FBQztJQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFDSVcsYUFBYSxFQUFFLHVCQUFDWCxNQUFNLEVBQUs7TUFDekIsSUFBTUMsUUFBUSxhQUFNTCxHQUFHLHVCQUFhSSxNQUFNLENBQUNRLEVBQUUsQ0FBRTtNQUMvQyxPQUFPakIsY0FBYyxDQUFDRixZQUFZLENBQUN1QixNQUFNLEVBQUVYLFFBQVEsRUFBRUQsTUFBTSxDQUFDO0lBQzlELENBQUM7SUFDRDtBQUNKO0FBQ0E7QUFDQTtJQUNJYSxVQUFVLEVBQUUsc0JBQU07TUFDaEIsSUFBTVosUUFBUSxhQUFNTCxHQUFHLGFBQVU7TUFDakMsT0FBT0wsY0FBYyxDQUFDRixZQUFZLENBQUNlLEdBQUcsRUFBRUgsUUFBUSxDQUFDO0lBQ25ELENBQUM7SUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBQ0lhLFNBQVMsRUFBRSxtQkFBQ2QsTUFBTSxFQUFLO01BQ3JCLElBQU1DLFFBQVEsYUFBTUwsR0FBRyxzQkFBWUksTUFBTSxDQUFDZSxJQUFJLENBQUU7TUFDaEQsT0FBT3hCLGNBQWMsQ0FBQ0YsWUFBWSxDQUFDZSxHQUFHLEVBQUVILFFBQVEsQ0FBQztJQUNuRCxDQUFDO0lBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtJQUNJZSxTQUFTLEVBQUUsbUJBQUNoQixNQUFNLEVBQUs7TUFDckIsSUFBTUMsUUFBUSxhQUFNTCxHQUFHLGFBQVU7TUFDakMsT0FBT0wsY0FBYyxDQUFDRixZQUFZLENBQUNhLElBQUksRUFBRUQsUUFBUSxFQUFFRCxNQUFNLENBQUM7SUFDNUQsQ0FBQztJQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFDSWlCLFVBQVUsRUFBRSxvQkFBQ2pCLE1BQU0sRUFBSztNQUN0QixJQUFNQyxRQUFRLGFBQU1MLEdBQUcsc0JBQVlJLE1BQU0sQ0FBQ2UsSUFBSSxDQUFFO01BQ2hELE9BQU9mLE1BQU0sQ0FBQ2UsSUFBSTtNQUNsQixPQUFPeEIsY0FBYyxDQUFDRixZQUFZLENBQUNxQixLQUFLLEVBQUVULFFBQVEsRUFBRUQsTUFBTSxDQUFDO0lBQzdELENBQUM7SUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBQ0lrQixZQUFZLEVBQUUsc0JBQUNsQixNQUFNLEVBQUs7TUFDeEIsSUFBTUMsUUFBUSxhQUFNTCxHQUFHLHNCQUFZSSxNQUFNLENBQUNlLElBQUksQ0FBRTtNQUNoRCxPQUFPeEIsY0FBYyxDQUFDRixZQUFZLENBQUN1QixNQUFNLEVBQUVYLFFBQVEsRUFBRUQsTUFBTSxDQUFDO0lBQzlEO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFRG1CLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHMUIsV0FBVyJ9