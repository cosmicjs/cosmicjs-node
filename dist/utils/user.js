"use strict";

var HTTP_METHODS = require('../constants/httpMethods.constants');
var _require = require('../helpers/requestHandler'),
  requestHandler = _require.requestHandler;

/**
 * A set of methods for interacting with the users endpoint.
 * @param bucketConfig - The bucket configuration object.
 * @returns A set of methods for interacting with the users endpoint.
 */
var userMethods = function userMethods(bucketConfig) {
  return {
    /**
     * Gets all users in the bucket.
     * @returns A promise that resolves to an array of user objects.
     */
    getUsers: function getUsers() {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/users");
      return requestHandler(HTTP_METHODS.GET, endpoint, null);
    },
    /**
     * Gets the user with the given id.
     * @param params - The parameters to pass to the endpoint.
     * @returns The user with the given id.
     */
    getUser: function getUser(params) {
      // Get user by id, if not found, return undefined.
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/users/").concat(params.id);
      return requestHandler(HTTP_METHODS.GET, endpoint, null);
    },
    /**
     * Adds a user to the bucket.
     * @param params - The user to add.
     * @returns None
     */
    addUser: function addUser(params) {
      // Add a user to the bucket, with the given params.
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/users");
      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    }
  };
};
module.exports = userMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIVFRQX01FVEhPRFMiLCJyZXF1aXJlIiwicmVxdWVzdEhhbmRsZXIiLCJ1c2VyTWV0aG9kcyIsImJ1Y2tldENvbmZpZyIsImdldFVzZXJzIiwiZW5kcG9pbnQiLCJ1cmkiLCJzbHVnIiwiR0VUIiwiZ2V0VXNlciIsInBhcmFtcyIsImlkIiwiYWRkVXNlciIsIlBPU1QiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3VzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL2h0dHBNZXRob2RzLmNvbnN0YW50cycpO1xuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0SGFuZGxlcicpO1xuXG4vKipcbiAqIEEgc2V0IG9mIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHVzZXJzIGVuZHBvaW50LlxuICogQHBhcmFtIGJ1Y2tldENvbmZpZyAtIFRoZSBidWNrZXQgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBAcmV0dXJucyBBIHNldCBvZiBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSB1c2VycyBlbmRwb2ludC5cbiAqL1xuY29uc3QgdXNlck1ldGhvZHMgPSAoYnVja2V0Q29uZmlnKSA9PiAoe1xuICAvKipcbiAgICogR2V0cyBhbGwgdXNlcnMgaW4gdGhlIGJ1Y2tldC5cbiAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgdXNlciBvYmplY3RzLlxuICAgKi9cbiAgZ2V0VXNlcnM6ICgpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vdXNlcnNgO1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCwgbnVsbCk7XG4gIH0sXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgZW5kcG9pbnQuXG4gICAqIEByZXR1cm5zIFRoZSB1c2VyIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgKi9cbiAgZ2V0VXNlcjogKHBhcmFtcykgPT4ge1xuICAgIC8vIEdldCB1c2VyIGJ5IGlkLCBpZiBub3QgZm91bmQsIHJldHVybiB1bmRlZmluZWQuXG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L3VzZXJzLyR7cGFyYW1zLmlkfWA7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50LCBudWxsKTtcbiAgfSxcbiAgLyoqXG4gICAqIEFkZHMgYSB1c2VyIHRvIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgdXNlciB0byBhZGQuXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIGFkZFVzZXI6IChwYXJhbXMpID0+IHtcbiAgICAvLyBBZGQgYSB1c2VyIHRvIHRoZSBidWNrZXQsIHdpdGggdGhlIGdpdmVuIHBhcmFtcy5cbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vdXNlcnNgO1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIHBhcmFtcyk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyTWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztBQUNsRSxlQUEyQkEsT0FBTyxDQUFDLDJCQUEyQixDQUFDO0VBQXZEQyxjQUFjLFlBQWRBLGNBQWM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxZQUFZO0VBQUEsT0FBTTtJQUNyQztBQUNGO0FBQ0E7QUFDQTtJQUNFQyxRQUFRLEVBQUUsb0JBQU07TUFDZCxJQUFNQyxRQUFRLGFBQU1GLFlBQVksQ0FBQ0csR0FBRyxzQkFBWUgsWUFBWSxDQUFDSSxJQUFJLFdBQVE7TUFDekUsT0FBT04sY0FBYyxDQUFDRixZQUFZLENBQUNTLEdBQUcsRUFBRUgsUUFBUSxFQUFFLElBQUksQ0FBQztJQUN6RCxDQUFDO0lBQ0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFSSxPQUFPLEVBQUUsaUJBQUNDLE1BQU0sRUFBSztNQUNuQjtNQUNBLElBQU1MLFFBQVEsYUFBTUYsWUFBWSxDQUFDRyxHQUFHLHNCQUFZSCxZQUFZLENBQUNJLElBQUksb0JBQVVHLE1BQU0sQ0FBQ0MsRUFBRSxDQUFFO01BQ3RGLE9BQU9WLGNBQWMsQ0FBQ0YsWUFBWSxDQUFDUyxHQUFHLEVBQUVILFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDekQsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRU8sT0FBTyxFQUFFLGlCQUFDRixNQUFNLEVBQUs7TUFDbkI7TUFDQSxJQUFNTCxRQUFRLGFBQU1GLFlBQVksQ0FBQ0csR0FBRyxzQkFBWUgsWUFBWSxDQUFDSSxJQUFJLFdBQVE7TUFDekUsT0FBT04sY0FBYyxDQUFDRixZQUFZLENBQUNjLElBQUksRUFBRVIsUUFBUSxFQUFFSyxNQUFNLENBQUM7SUFDNUQ7RUFDRixDQUFDO0FBQUEsQ0FBQztBQUVGSSxNQUFNLENBQUNDLE9BQU8sR0FBR2IsV0FBVyJ9