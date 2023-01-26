"use strict";

var HTTP_METHODS = require('../constants/httpMethods.constants');
var _require = require('../helpers/requestHandler'),
  requestHandler = _require.requestHandler;
var headers;

/**
 * Object Type Methods
 * @param bucketConfig - The bucket configuration object.
 * @returns An object containing methods for interacting with object types.
 */
var objectTypeMethods = function objectTypeMethods(bucketConfig) {
  return {
    /**
     * Gets the object types for the bucket.
     * @returns A promise that resolves to an array of object types.
     */
    getObjectTypes: function getObjectTypes() {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/object-types?read_key=").concat(bucketConfig.read_key);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Gets the object type with the given slug.
     * @param params - The params object including slug.
     * @returns The object type.
     */
    getObjectType: function getObjectType(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/object-types/").concat(params.slug, "?read_key=").concat(bucketConfig.read_key);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Adds an object type to the bucket.
     * @param params - The object type to add.
     * @returns None
     */
    addObjectType: function addObjectType(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/object-types");
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
        };
      }
      return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
    },
    /**
     * Edit an object type in the bucket.
     * @param params - The object type to edit by slug
     * @returns None
     */
    editObjectType: function editObjectType(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/object-types/").concat(params.slug);
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
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
    deleteObjectType: function deleteObjectType(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/object-types/").concat(params.slug);
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
        };
      }
      return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
    }
  };
};
module.exports = objectTypeMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIVFRQX01FVEhPRFMiLCJyZXF1aXJlIiwicmVxdWVzdEhhbmRsZXIiLCJoZWFkZXJzIiwib2JqZWN0VHlwZU1ldGhvZHMiLCJidWNrZXRDb25maWciLCJnZXRPYmplY3RUeXBlcyIsImVuZHBvaW50IiwidXJpIiwic2x1ZyIsInJlYWRfa2V5IiwiR0VUIiwiZ2V0T2JqZWN0VHlwZSIsInBhcmFtcyIsImFkZE9iamVjdFR5cGUiLCJ3cml0ZV9rZXkiLCJBdXRob3JpemF0aW9uIiwiUE9TVCIsImVkaXRPYmplY3RUeXBlIiwiUEFUQ0giLCJkZWxldGVPYmplY3RUeXBlIiwiREVMRVRFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9vYmplY3RUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9odHRwTWV0aG9kcy5jb25zdGFudHMnKTtcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdEhhbmRsZXInKTtcblxubGV0IGhlYWRlcnM7XG5cbi8qKlxuICogT2JqZWN0IFR5cGUgTWV0aG9kc1xuICogQHBhcmFtIGJ1Y2tldENvbmZpZyAtIFRoZSBidWNrZXQgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIG9iamVjdCB0eXBlcy5cbiAqL1xuY29uc3Qgb2JqZWN0VHlwZU1ldGhvZHMgPSAoYnVja2V0Q29uZmlnKSA9PiAoe1xuICAvKipcbiAgICogR2V0cyB0aGUgb2JqZWN0IHR5cGVzIGZvciB0aGUgYnVja2V0LlxuICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBhcnJheSBvZiBvYmplY3QgdHlwZXMuXG4gICAqL1xuICBnZXRPYmplY3RUeXBlczogKCkgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9vYmplY3QtdHlwZXM/cmVhZF9rZXk9JHtidWNrZXRDb25maWcucmVhZF9rZXl9YDtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpO1xuICB9LFxuICAvKipcbiAgICogR2V0cyB0aGUgb2JqZWN0IHR5cGUgd2l0aCB0aGUgZ2l2ZW4gc2x1Zy5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbXMgb2JqZWN0IGluY2x1ZGluZyBzbHVnLlxuICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IHR5cGUuXG4gICAqL1xuICBnZXRPYmplY3RUeXBlOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L29iamVjdC10eXBlcy8ke3BhcmFtcy5zbHVnfT9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX1gO1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gIH0sXG4gIC8qKlxuICAgKiBBZGRzIGFuIG9iamVjdCB0eXBlIHRvIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgb2JqZWN0IHR5cGUgdG8gYWRkLlxuICAgKiBAcmV0dXJucyBOb25lXG4gICAqL1xuICBhZGRPYmplY3RUeXBlOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L29iamVjdC10eXBlc2A7XG4gICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRDb25maWcud3JpdGVfa2V5fWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpO1xuICB9LFxuICAvKipcbiAgICogRWRpdCBhbiBvYmplY3QgdHlwZSBpbiB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIG9iamVjdCB0eXBlIHRvIGVkaXQgYnkgc2x1Z1xuICAgKiBAcmV0dXJucyBOb25lXG4gICAqL1xuICBlZGl0T2JqZWN0VHlwZTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9vYmplY3QtdHlwZXMvJHtwYXJhbXMuc2x1Z31gO1xuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0Q29uZmlnLndyaXRlX2tleX1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHNsdWdcbiAgICBkZWxldGUgcGFyYW1zLnNsdWc7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycyk7XG4gIH0sXG4gIC8qKlxuICAgKiBEZWxldGUgYW4gb2JqZWN0IHR5cGUgZnJvbSB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIG9iamVjdCB0eXBlIHNsdWcuXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIGRlbGV0ZU9iamVjdFR5cGU6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vb2JqZWN0LXR5cGVzLyR7cGFyYW1zLnNsdWd9YDtcbiAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldENvbmZpZy53cml0ZV9rZXl9YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycyk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUeXBlTWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztBQUNsRSxlQUEyQkEsT0FBTyxDQUFDLDJCQUEyQixDQUFDO0VBQXZEQyxjQUFjLFlBQWRBLGNBQWM7QUFFdEIsSUFBSUMsT0FBTzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQixDQUFJQyxZQUFZO0VBQUEsT0FBTTtJQUMzQztBQUNGO0FBQ0E7QUFDQTtJQUNFQyxjQUFjLEVBQUUsMEJBQU07TUFDcEIsSUFBTUMsUUFBUSxhQUFNRixZQUFZLENBQUNHLEdBQUcsc0JBQVlILFlBQVksQ0FBQ0ksSUFBSSxvQ0FBMEJKLFlBQVksQ0FBQ0ssUUFBUSxDQUFFO01BQ2xILE9BQU9SLGNBQWMsQ0FBQ0YsWUFBWSxDQUFDVyxHQUFHLEVBQUVKLFFBQVEsQ0FBQztJQUNuRCxDQUFDO0lBQ0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFSyxhQUFhLEVBQUUsdUJBQUNDLE1BQU0sRUFBSztNQUN6QixJQUFNTixRQUFRLGFBQU1GLFlBQVksQ0FBQ0csR0FBRyxzQkFBWUgsWUFBWSxDQUFDSSxJQUFJLDJCQUFpQkksTUFBTSxDQUFDSixJQUFJLHVCQUFhSixZQUFZLENBQUNLLFFBQVEsQ0FBRTtNQUNqSSxPQUFPUixjQUFjLENBQUNGLFlBQVksQ0FBQ1csR0FBRyxFQUFFSixRQUFRLENBQUM7SUFDbkQsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRU8sYUFBYSxFQUFFLHVCQUFDRCxNQUFNLEVBQUs7TUFDekIsSUFBTU4sUUFBUSxhQUFNRixZQUFZLENBQUNHLEdBQUcsc0JBQVlILFlBQVksQ0FBQ0ksSUFBSSxrQkFBZTtNQUNoRixJQUFJSixZQUFZLENBQUNVLFNBQVMsRUFBRTtRQUMxQlosT0FBTyxHQUFHO1VBQ1JhLGFBQWEsbUJBQVlYLFlBQVksQ0FBQ1UsU0FBUztRQUNqRCxDQUFDO01BQ0g7TUFDQSxPQUFPYixjQUFjLENBQUNGLFlBQVksQ0FBQ2lCLElBQUksRUFBRVYsUUFBUSxFQUFFTSxNQUFNLEVBQUVWLE9BQU8sQ0FBQztJQUNyRSxDQUFDO0lBQ0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFZSxjQUFjLEVBQUUsd0JBQUNMLE1BQU0sRUFBSztNQUMxQixJQUFNTixRQUFRLGFBQU1GLFlBQVksQ0FBQ0csR0FBRyxzQkFBWUgsWUFBWSxDQUFDSSxJQUFJLDJCQUFpQkksTUFBTSxDQUFDSixJQUFJLENBQUU7TUFDL0YsSUFBSUosWUFBWSxDQUFDVSxTQUFTLEVBQUU7UUFDMUJaLE9BQU8sR0FBRztVQUNSYSxhQUFhLG1CQUFZWCxZQUFZLENBQUNVLFNBQVM7UUFDakQsQ0FBQztNQUNIO01BQ0E7TUFDQSxPQUFPRixNQUFNLENBQUNKLElBQUk7TUFDbEIsT0FBT1AsY0FBYyxDQUFDRixZQUFZLENBQUNtQixLQUFLLEVBQUVaLFFBQVEsRUFBRU0sTUFBTSxFQUFFVixPQUFPLENBQUM7SUFDdEUsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRWlCLGdCQUFnQixFQUFFLDBCQUFDUCxNQUFNLEVBQUs7TUFDNUIsSUFBTU4sUUFBUSxhQUFNRixZQUFZLENBQUNHLEdBQUcsc0JBQVlILFlBQVksQ0FBQ0ksSUFBSSwyQkFBaUJJLE1BQU0sQ0FBQ0osSUFBSSxDQUFFO01BQy9GLElBQUlKLFlBQVksQ0FBQ1UsU0FBUyxFQUFFO1FBQzFCWixPQUFPLEdBQUc7VUFDUmEsYUFBYSxtQkFBWVgsWUFBWSxDQUFDVSxTQUFTO1FBQ2pELENBQUM7TUFDSDtNQUNBLE9BQU9iLGNBQWMsQ0FBQ0YsWUFBWSxDQUFDcUIsTUFBTSxFQUFFZCxRQUFRLEVBQUUsSUFBSSxFQUFFSixPQUFPLENBQUM7SUFDckU7RUFDRixDQUFDO0FBQUEsQ0FBQztBQUVGbUIsTUFBTSxDQUFDQyxPQUFPLEdBQUduQixpQkFBaUIifQ==