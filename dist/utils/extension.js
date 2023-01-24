"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const FormData = require('form-data');
const {
  URI
} = require('../constants/env.constants');
const HTTP_METHODS = require('../constants/httpMethods.constants');
const {
  requestHandler
} = require('../helpers/requestHandler');

/**
 * A set of methods for interacting with extensions.
 * @param bucketConfig - The bucket configuration object.
 * @returns A set of methods for interacting with extensions.
 */
const extensionMethods = bucketConfig => ({
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
  addExtension: params => {
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
    const getHeaders = form => new Promise((resolve, reject) => {
      if (params.zip) {
        if (params.zip.buffer) {
          form.getLength((err, length) => {
            if (err) reject(err);
            const headers = _objectSpread({
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
    return getHeaders(data).then(headers => requestHandler(HTTP_METHODS.POST, endpoint, data, headers).catch(error => {
      throw error.response.data;
    }));
  },
  /**
   * Edit an extension in the bucket.
   * @param params - The parameters to edit the extension with.
   * @returns A promise that resolves to the edited extension.
   */
  editExtension: params => {
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
  deleteExtension: params => {
    const endpoint = `${URI}/${bucketConfig.slug}/extensions/${params.id}`;
    return requestHandler(HTTP_METHODS.DELETE, endpoint, bucketConfig);
  }
});
module.exports = extensionMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtRGF0YSIsInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsImV4dGVuc2lvbk1ldGhvZHMiLCJidWNrZXRDb25maWciLCJnZXRFeHRlbnNpb25zIiwiZW5kcG9pbnQiLCJzbHVnIiwiR0VUIiwiYWRkRXh0ZW5zaW9uIiwicGFyYW1zIiwiZGF0YSIsInppcCIsImJ1ZmZlciIsImFwcGVuZCIsIm9yaWdpbmFsbmFtZSIsIm5hbWUiLCJ3cml0ZV9rZXkiLCJnZXRIZWFkZXJzIiwiZm9ybSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0TGVuZ3RoIiwiZXJyIiwibGVuZ3RoIiwiaGVhZGVycyIsInRoZW4iLCJQT1NUIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwiZWRpdEV4dGVuc2lvbiIsImlkIiwiUFVUIiwiZGVsZXRlRXh0ZW5zaW9uIiwiREVMRVRFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9leHRlbnNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKTtcbmNvbnN0IHsgVVJJIH0gPSByZXF1aXJlKCcuLi9jb25zdGFudHMvZW52LmNvbnN0YW50cycpO1xuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL2h0dHBNZXRob2RzLmNvbnN0YW50cycpO1xuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0SGFuZGxlcicpO1xuXG4vKipcbiAqIEEgc2V0IG9mIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggZXh0ZW5zaW9ucy5cbiAqIEBwYXJhbSBidWNrZXRDb25maWcgLSBUaGUgYnVja2V0IGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMgQSBzZXQgb2YgbWV0aG9kcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBleHRlbnNpb25zLlxuICovXG5jb25zdCBleHRlbnNpb25NZXRob2RzID0gKGJ1Y2tldENvbmZpZykgPT4gKHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIGV4dGVuc2lvbnMgZm9yIHRoZSBjdXJyZW50IGJ1Y2tldC5cbiAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgZXh0ZW5zaW9ucy5cbiAgICovXG4gIGdldEV4dGVuc2lvbnM6ICgpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRDb25maWcuc2x1Z30vZXh0ZW5zaW9uc2A7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgfSxcbiAgLyoqXG4gICAqIEFkZCBhbiBleHRlbnNpb24gdG8gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIGFkZCB0aGUgZXh0ZW5zaW9uLlxuICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgZXh0ZW5zaW9uIG9iamVjdC5cbiAgICovXG4gIGFkZEV4dGVuc2lvbjogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS8ke2J1Y2tldENvbmZpZy5zbHVnfS9leHRlbnNpb25zYDtcbiAgICBsZXQgZGF0YTtcbiAgICBpZiAocGFyYW1zLnppcCkge1xuICAgICAgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgaWYgKHBhcmFtcy56aXAuYnVmZmVyKSB7XG4gICAgICAgIGRhdGEuYXBwZW5kKCd6aXAnLCBwYXJhbXMuemlwLmJ1ZmZlciwgcGFyYW1zLnppcC5vcmlnaW5hbG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3ppcCcsIHBhcmFtcy56aXAsIHBhcmFtcy56aXAubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0Q29uZmlnLndyaXRlX2tleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBwYXJhbXM7XG4gICAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgICBkYXRhLndyaXRlX2tleSA9IGJ1Y2tldENvbmZpZy53cml0ZV9rZXk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSBmb3JtIC0gVGhlIGZvcm0gdG8gZ2V0IHRoZSBoZWFkZXJzIGZvci5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgaGVhZGVycy5cbiAgICAgKi9cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKGZvcm0pID0+XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMuemlwKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy56aXAuYnVmZmVyKSB7XG4gICAgICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLFxuICAgICAgICAgICAgICAgIC4uLmZvcm0uZ2V0SGVhZGVycygpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXNvbHZlKGhlYWRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSkudGhlbigoaGVhZGVycykgPT5cbiAgICAgIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgZGF0YSwgaGVhZGVycykuY2F0Y2goXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRocm93IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9LFxuICAvKipcbiAgICogRWRpdCBhbiBleHRlbnNpb24gaW4gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIGVkaXQgdGhlIGV4dGVuc2lvbiB3aXRoLlxuICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgZWRpdGVkIGV4dGVuc2lvbi5cbiAgICovXG4gIGVkaXRFeHRlbnNpb246IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRDb25maWcuc2x1Z30vZXh0ZW5zaW9ucy8ke3BhcmFtcy5pZH1gO1xuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBwYXJhbXMud3JpdGVfa2V5ID0gYnVja2V0Q29uZmlnLndyaXRlX2tleTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QVVQsIGVuZHBvaW50LCBwYXJhbXMpO1xuICB9LFxuICAvKipcbiAgICogRGVsZXRlcyBhbiBleHRlbnNpb24gZnJvbSB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybnMgTm9uZVxuICAgKi9cbiAgZGVsZXRlRXh0ZW5zaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0Q29uZmlnLnNsdWd9L2V4dGVuc2lvbnMvJHtwYXJhbXMuaWR9YDtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIGJ1Y2tldENvbmZpZyk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHRlbnNpb25NZXRob2RzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3JDLE1BQU07RUFBRUM7QUFBSSxDQUFDLEdBQUdELE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztBQUNyRCxNQUFNRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztBQUNsRSxNQUFNO0VBQUVHO0FBQWUsQ0FBQyxHQUFHSCxPQUFPLENBQUMsMkJBQTJCLENBQUM7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNSSxnQkFBZ0IsR0FBSUMsWUFBWSxLQUFNO0VBQzFDO0FBQ0Y7QUFDQTtBQUNBO0VBQ0VDLGFBQWEsRUFBRSxNQUFNO0lBQ25CLE1BQU1DLFFBQVEsR0FBSSxHQUFFTixHQUFJLElBQUdJLFlBQVksQ0FBQ0csSUFBSyxhQUFZO0lBQ3pELE9BQU9MLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDTyxHQUFHLEVBQUVGLFFBQVEsQ0FBQztFQUNuRCxDQUFDO0VBQ0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUNFRyxZQUFZLEVBQUdDLE1BQU0sSUFBSztJQUN4QixNQUFNSixRQUFRLEdBQUksR0FBRU4sR0FBSSxJQUFHSSxZQUFZLENBQUNHLElBQUssYUFBWTtJQUN6RCxJQUFJSSxJQUFJO0lBQ1IsSUFBSUQsTUFBTSxDQUFDRSxHQUFHLEVBQUU7TUFDZEQsSUFBSSxHQUFHLElBQUliLFFBQVEsRUFBRTtNQUNyQixJQUFJWSxNQUFNLENB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