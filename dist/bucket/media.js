"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormData = require('form-data');

var _require = require('../helpers/constants'),
    URI = _require.URI,
    UPLOAD_API_URL = _require.UPLOAD_API_URL,
    API_VERSION = _require.API_VERSION;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var mediaMethods = function mediaMethods(bucket_config) {
  return {
    addMedia: function addMedia(params) {
      var endpoint = "".concat(UPLOAD_API_URL, "/").concat(API_VERSION, "/buckets/").concat(bucket_config.slug, "/media");
      var data = new FormData();

      if (params.media.buffer) {
        data.append('media', params.media.buffer, params.media.originalname);
      } else {
        data.append('media', params.media, params.media.name);
      }

      if (bucket_config.write_key) {
        data.append('write_key', bucket_config.write_key);
      }

      if (params.folder) {
        data.append('folder', params.folder);
      }

      if (params.metadata) {
        data.append('metadata', JSON.stringify(params.metadata));
      }

      if (params.trigger_webhook) {
        data.append('trigger_webhook', params.trigger_webhook);
      }

      var getHeaders = function getHeaders(form) {
        return new Promise(function (resolve, reject) {
          if (params.media.buffer) {
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
        });
      };

      return getHeaders(data).then(function (headers) {
        headers.Authorization = "Bearer ".concat(bucket_config.write_key);
        return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
      })["catch"](function (error) {
        throw error.response.data;
      });
    },
    getMedia: function getMedia(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media?read_key=").concat(bucket_config.read_key);

      if (params && params.limit) {
        endpoint += "&limit=".concat(params.limit);
      }

      if (params && params.skip) {
        endpoint += "&skip=".concat(params.skip);
      }

      if (params && params.query) {
        endpoint += "&query=".concat(encodeURI(JSON.stringify(params.query)));
      }

      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    getSingleMedia: function getSingleMedia(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media/").concat(params.id, "?read_key=").concat(bucket_config.read_key);

      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    deleteMedia: function deleteMedia(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media/").concat(params.id);
      var headers;

      if (bucket_config.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucket_config.write_key)
        };
      }

      var data;

      if (params.trigger_webhook) {
        data.trigger_webhook = params.trigger_webhook;
      }

      return requestHandler(HTTP_METHODS.DELETE, endpoint, data, headers);
    }
  };
};

module.exports = mediaMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsiRm9ybURhdGEiLCJyZXF1aXJlIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwibWVkaWFNZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImFkZE1lZGlhIiwicGFyYW1zIiwiZW5kcG9pbnQiLCJzbHVnIiwiZGF0YSIsIm1lZGlhIiwiYnVmZmVyIiwiYXBwZW5kIiwib3JpZ2luYWxuYW1lIiwibmFtZSIsIndyaXRlX2tleSIsImZvbGRlciIsIm1ldGFkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyaWdnZXJfd2ViaG9vayIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIkF1dGhvcml6YXRpb24iLCJQT1NUIiwiZXJyb3IiLCJyZXNwb25zZSIsImdldE1lZGlhIiwicmVhZF9rZXkiLCJsaW1pdCIsInNraXAiLCJxdWVyeSIsImVuY29kZVVSSSIsInByb3BzIiwiR0VUIiwiZ2V0U2luZ2xlTWVkaWEiLCJpZCIsImRlbGV0ZU1lZGlhIiwiREVMRVRFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXhCOztlQUM2Q0EsT0FBTyxDQUFDLHNCQUFELEM7SUFBNUNDLEcsWUFBQUEsRztJQUFLQyxjLFlBQUFBLGM7SUFBZ0JDLFcsWUFBQUEsVzs7QUFDN0IsSUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUMseUJBQUQsQ0FBNUI7O2dCQUMyQkEsT0FBTyxDQUFDLDRCQUFELEM7SUFBMUJLLGMsYUFBQUEsYzs7QUFFUixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxhQUFEO0FBQUEsU0FBb0I7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SSxJQUFuQyxvQkFBaURGLE1BQU0sQ0FBQ3NDLEVBQXhELENBQWQ7QUFDQSxVQUFJZixPQUFKOztBQUNBLFVBQUl6QixhQUFhLENBQUNXLFNBQWxCLEVBQTZCO0FBQzNCYyxRQUFBQSxPQUFPLEdBQUc7QUFDUkUsVUFBQUEsYUFBYSxtQkFBWTNCLGFBQWEsQ0FBQ1csU0FBMUI7QUFETCxTQUFWO0FBR0Q7O0FBQ0QsVUFBSU4sSUFBSjs7QUFDQSxVQUFJSCxNQUFNLENBQUNjLGVBQVgsRUFBNEI7QUFDMUJYLFFBQUFBLElBQUksQ0FBQ1csZUFBTCxHQUF1QmQsTUFBTSxDQUFDYyxlQUE5QjtBQUNEOztBQUNELGFBQU9sQixjQUFjLENBQUNELFlBQVksQ0FBQzZDLE1BQWQsRUFBc0J2QyxRQUF0QixFQUFnQ0UsSUFBaEMsRUFBc0NvQixPQUF0QyxDQUFyQjtBQUNEO0FBN0VzQyxHQUFwQjtBQUFBLENBQXJCOztBQWdGQWtCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjdDLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKVxuY29uc3QgeyBVUkksIFVQTE9BRF9BUElfVVJMLCBBUElfVkVSU0lPTiB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuXG5jb25zdCBtZWRpYU1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgYWRkTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VQTE9BRF9BUElfVVJMfS8ke0FQSV9WRVJTSU9OfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYWBcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLmJ1ZmZlciwgcGFyYW1zLm1lZGlhLm9yaWdpbmFsbmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLCBwYXJhbXMubWVkaWEubmFtZSlcbiAgICB9XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMuZm9sZGVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnZm9sZGVyJywgcGFyYW1zLmZvbGRlcilcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zLm1ldGFkYXRhKSlcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50cmlnZ2VyX3dlYmhvb2spIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd0cmlnZ2VyX3dlYmhvb2snLCBwYXJhbXMudHJpZ2dlcl93ZWJob29rKVxuICAgIH1cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKChmb3JtKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LUxlbmd0aCc6IGxlbmd0aCwgLi4uZm9ybS5nZXRIZWFkZXJzKCkgfVxuICAgICAgICAgIHJlc29sdmUoaGVhZGVycylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICApXG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiB7XG4gICAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2UuZGF0YVxuICAgICAgfSlcbiAgfSxcbiAgZ2V0TWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldFNpbmdsZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZGVsZXRlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9YFxuICAgIGxldCBoZWFkZXJzXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGF0YVxuICAgIGlmIChwYXJhbXMudHJpZ2dlcl93ZWJob29rKSB7XG4gICAgICBkYXRhLnRyaWdnZXJfd2ViaG9vayA9IHBhcmFtcy50cmlnZ2VyX3dlYmhvb2tcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBkYXRhLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhTWV0aG9kc1xuIl19