"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormData = require('form-data');
var _require = require('../constants/env.constants'),
  URI = _require.URI;
var HTTP_METHODS = require('../constants/httpMethods.constants');
var _require2 = require('../helpers/requestHandler'),
  requestHandler = _require2.requestHandler;

/**
 * A set of methods for interacting with extensions.
 * @param bucketConfig - The bucket configuration object.
 * @returns A set of methods for interacting with extensions.
 */
var extensionMethods = function extensionMethods(bucketConfig) {
  return {
    /**
     * Gets the extensions for the current bucket.
     * @returns A promise that resolves to an array of extensions.
     */
    getExtensions: function getExtensions() {
      var endpoint = "".concat(URI, "/").concat(bucketConfig.slug, "/extensions");
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Add an extension to the bucket.
     * @param params - The parameters to add the extension.
     * @returns A promise that resolves to the extension object.
     */
    addExtension: function addExtension(params) {
      var endpoint = "".concat(URI, "/").concat(bucketConfig.slug, "/extensions");
      var data;
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
      var getHeaders = function getHeaders(form) {
        return new Promise(function (resolve, reject) {
          if (params.zip) {
            if (params.zip.buffer) {
              form.getLength(function (err, length) {
                if (err) reject(err);
                var headers = _objectSpread({
                  'Content-Length': length
                }, form.getHeaders());
                resolve(headers);
              });
            } else {
              resolve({
                'Content-Type': 'multipart/form-data'
              });
            }
          } else {
            resolve({
              'Content-Type': 'application/json'
            });
          }
        });
      };
      return getHeaders(data).then(function (headers) {
        return requestHandler(HTTP_METHODS.POST, endpoint, data, headers)["catch"](function (error) {
          throw error.response.data;
        });
      });
    },
    /**
     * Edit an extension in the bucket.
     * @param params - The parameters to edit the extension with.
     * @returns A promise that resolves to the edited extension.
     */
    editExtension: function editExtension(params) {
      var endpoint = "".concat(URI, "/").concat(bucketConfig.slug, "/extensions/").concat(params.id);
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
    deleteExtension: function deleteExtension(params) {
      var endpoint = "".concat(URI, "/").concat(bucketConfig.slug, "/extensions/").concat(params.id);
      return requestHandler(HTTP_METHODS.DELETE, endpoint, bucketConfig);
    }
  };
};
module.exports = extensionMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtRGF0YSIsInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsImV4dGVuc2lvbk1ldGhvZHMiLCJidWNrZXRDb25maWciLCJnZXRFeHRlbnNpb25zIiwiZW5kcG9pbnQiLCJzbHVnIiwiR0VUIiwiYWRkRXh0ZW5zaW9uIiwicGFyYW1zIiwiZGF0YSIsInppcCIsImJ1ZmZlciIsImFwcGVuZCIsIm9yaWdpbmFsbmFtZSIsIm5hbWUiLCJ3cml0ZV9rZXkiLCJnZXRIZWFkZXJzIiwiZm9ybSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0TGVuZ3RoIiwiZXJyIiwibGVuZ3RoIiwiaGVhZGVycyIsInRoZW4iLCJQT1NUIiwiZXJyb3IiLCJyZXNwb25zZSIsImVkaXRFeHRlbnNpb24iLCJpZCIsIlBVVCIsImRlbGV0ZUV4dGVuc2lvbiIsIkRFTEVURSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZXh0ZW5zaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhJyk7XG5jb25zdCB7IFVSSSB9ID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL2Vudi5jb25zdGFudHMnKTtcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9odHRwTWV0aG9kcy5jb25zdGFudHMnKTtcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdEhhbmRsZXInKTtcblxuLyoqXG4gKiBBIHNldCBvZiBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIGV4dGVuc2lvbnMuXG4gKiBAcGFyYW0gYnVja2V0Q29uZmlnIC0gVGhlIGJ1Y2tldCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIEEgc2V0IG9mIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggZXh0ZW5zaW9ucy5cbiAqL1xuY29uc3QgZXh0ZW5zaW9uTWV0aG9kcyA9IChidWNrZXRDb25maWcpID0+ICh7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBleHRlbnNpb25zIGZvciB0aGUgY3VycmVudCBidWNrZXQuXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIGV4dGVuc2lvbnMuXG4gICAqL1xuICBnZXRFeHRlbnNpb25zOiAoKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0Q29uZmlnLnNsdWd9L2V4dGVuc2lvbnNgO1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gIH0sXG4gIC8qKlxuICAgKiBBZGQgYW4gZXh0ZW5zaW9uIHRvIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBhZGQgdGhlIGV4dGVuc2lvbi5cbiAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGV4dGVuc2lvbiBvYmplY3QuXG4gICAqL1xuICBhZGRFeHRlbnNpb246IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRDb25maWcuc2x1Z30vZXh0ZW5zaW9uc2A7XG4gICAgbGV0IGRhdGE7XG4gICAgaWYgKHBhcmFtcy56aXApIHtcbiAgICAgIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGlmIChwYXJhbXMuemlwLmJ1ZmZlcikge1xuICAgICAgICBkYXRhLmFwcGVuZCgnemlwJywgcGFyYW1zLnppcC5idWZmZXIsIHBhcmFtcy56aXAub3JpZ2luYWxuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuYXBwZW5kKCd6aXAnLCBwYXJhbXMuemlwLCBwYXJhbXMuemlwLm5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gcGFyYW1zO1xuICAgICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgICAgZGF0YS53cml0ZV9rZXkgPSBidWNrZXRDb25maWcud3JpdGVfa2V5O1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0gZm9ybSAtIFRoZSBmb3JtIHRvIGdldCB0aGUgaGVhZGVycyBmb3IuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGhlYWRlcnMuXG4gICAgICovXG4gICAgY29uc3QgZ2V0SGVhZGVycyA9IChmb3JtKSA9PlxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLnppcCkge1xuICAgICAgICAgIGlmIChwYXJhbXMuemlwLmJ1ZmZlcikge1xuICAgICAgICAgICAgZm9ybS5nZXRMZW5ndGgoKGVyciwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdDb250ZW50LUxlbmd0aCc6IGxlbmd0aCxcbiAgICAgICAgICAgICAgICAuLi5mb3JtLmdldEhlYWRlcnMoKSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShoZWFkZXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBnZXRIZWFkZXJzKGRhdGEpLnRoZW4oKGhlYWRlcnMpID0+XG4gICAgICByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpLmNhdGNoKFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfSxcbiAgLyoqXG4gICAqIEVkaXQgYW4gZXh0ZW5zaW9uIGluIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBlZGl0IHRoZSBleHRlbnNpb24gd2l0aC5cbiAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGVkaXRlZCBleHRlbnNpb24uXG4gICAqL1xuICBlZGl0RXh0ZW5zaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0Q29uZmlnLnNsdWd9L2V4dGVuc2lvbnMvJHtwYXJhbXMuaWR9YDtcbiAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgcGFyYW1zLndyaXRlX2tleSA9IGJ1Y2tldENvbmZpZy53cml0ZV9rZXk7XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUFVULCBlbmRwb2ludCwgcGFyYW1zKTtcbiAgfSxcbiAgLyoqXG4gICAqIERlbGV0ZXMgYW4gZXh0ZW5zaW9uIGZyb20gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIGRlbGV0ZUV4dGVuc2lvbjogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS8ke2J1Y2tldENvbmZpZy5zbHVnfS9leHRlbnNpb25zLyR7cGFyYW1zLmlkfWA7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBidWNrZXRDb25maWcpO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXh0ZW5zaW9uTWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDckMsZUFBZ0JBLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztFQUE3Q0MsR0FBRyxZQUFIQSxHQUFHO0FBQ1gsSUFBTUMsWUFBWSxHQUFHRixPQUFPLENBQUMsb0NBQW9DLENBQUM7QUFDbEUsZ0JBQTJCQSxPQUFPLENBQUMsMkJBQTJCLENBQUM7RUFBdkRHLGNBQWMsYUFBZEEsY0FBYzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0IsQ0FBSUMsWUFBWTtFQUFBLE9BQU07SUFDMUM7QUFDRjtBQUNBO0FBQ0E7SUFDRUMsYUFBYSxFQUFFLHlCQUFNO01BQ25CLElBQU1DLFFBQVEsYUFBTU4sR0FBRyxjQUFJSSxZQUFZLENBQUNHLElBQUksZ0JBQWE7TUFDekQsT0FBT0wsY0FBYyxDQUFDRCxZQUFZLENBQUNPLEdBQUcsRUFBRUYsUUFBUSxDQUFDO0lBQ25ELENBQUM7SUFDRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0lBQ0VHLFlBQVksRUFBRSxzQkFBQ0MsTUFBTSxFQUFLO01BQ3hCLElBQU1KLFFBQVEsYUFBTU4sR0FBRyxjQUFJSSxZQUFZLENBQUNHLElBQUksZ0JBQWE7TUFDekQsSUFBSUksSUFBSTtNQUNSLElBQUlELE1BQU0sQ0FBQ0UsR0FBRyxFQUFFO1FBQ2RELElBQUksR0FBRyxJQUFJYixRQUFRLEVB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