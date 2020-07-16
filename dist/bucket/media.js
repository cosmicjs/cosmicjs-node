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
      var endpoint = "".concat(UPLOAD_API_URL, "/").concat(API_VERSION, "/").concat(bucket_config.slug, "/media");
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
        return requestHandler(HTTP_METHODS.POST, endpoint, data, headers)["catch"](function (error) {
          throw error.response.data;
        });
      });
    },
    getMedia: function getMedia(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/media?read_key=").concat(bucket_config.read_key);

      if (params && params.limit) {
        endpoint += "&limit=".concat(params.limit);
      }

      if (params && params.skip) {
        endpoint += "&skip=".concat(params.skip);
      }

      if (params && params.locale) {
        endpoint += "&locale=".concat(params.locale);
      }

      if (params && params.status) {
        endpoint += "&status=".concat(params.status);
      }

      if (params && params.folder) {
        endpoint += "&folder=".concat(params.folder);
      }

      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    deleteMedia: function deleteMedia(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/media/").concat(params.id);
      return requestHandler(HTTP_METHODS.DELETE, endpoint, bucket_config);
    }
  };
};

module.exports = mediaMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsiRm9ybURhdGEiLCJyZXF1aXJlIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwibWVkaWFNZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImFkZE1lZGlhIiwicGFyYW1zIiwiZW5kcG9pbnQiLCJzbHVnIiwiZGF0YSIsIm1lZGlhIiwiYnVmZmVyIiwiYXBwZW5kIiwib3JpZ2luYWxuYW1lIiwibmFtZSIsIndyaXRlX2tleSIsImZvbGRlciIsIm1ldGFkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIlBPU1QiLCJlcnJvciIsInJlc3BvbnNlIiwiZ2V0TWVkaWEiLCJyZWFkX2tleSIsImxpbWl0Iiwic2tpcCIsImxvY2FsZSIsInN0YXR1cyIsInByb3BzIiwiR0VUIiwiZGVsZXRlTWVkaWEiLCJpZCIsIkRFTEVURSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF4Qjs7ZUFDNkNBLE9BQU8sQ0FBQyxzQkFBRCxDO0lBQTVDQyxHLFlBQUFBLEc7SUFBS0MsYyxZQUFBQSxjO0lBQWdCQyxXLFlBQUFBLFc7O0FBQzdCLElBQU1DLFlBQVksR0FBR0osT0FBTyxDQUFDLHlCQUFELENBQTVCOztnQkFDMkJBLE9BQU8sQ0FBQyw0QkFBRCxDO0lBQTFCSyxjLGFBQUFBLGM7O0FBRVIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsYUFBRDtBQUFBLFNBQW9CO0FBQ3ZDQyxJQUFBQSxRQUFRLEVBQUUsa0JBQUNDLE1BQUQsRUFBWTtBQUNwQixVQUFNQyxR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QjlCLFFBQUFBLFFBQVEsc0JBQWVELE1BQU0sQ0FBQytCLE1BQXRCLENBQVI7QUFDRDs7QUFDRCxVQUFJL0IsTUFBTSxJQUFJQSxNQUFNLENBQUNnQyxNQUFyQixFQUE2QjtBQUMzQi9CLFFBQUFBLFFBQVEsc0JBQWVELE1BQU0sQ0FBQ2dDLE1BQXRCLENBQVI7QUFDRDs7QUFDRCxVQUFJaEMsTUFBTSxJQUFJQSxNQUFNLENBQUNVLE1BQXJCLEVBQTZCO0FBQzNCVCxRQUFBQSxRQUFRLHNCQUFlRCxNQUFNLENBQUNVLE1BQXRCLENBQVI7QUFDRDs7QUFDRCxVQUFJVixNQUFNLElBQUlBLE1BQU0sQ0FBQ2lDLEtBQXJCLEVBQTRCO0FBQzFCaEMsUUFBQUEsUUFBUSxxQkFBY0QsTUFBTSxDQUFDaUMsS0FBckIsQ0FBUjtBQUNEOztBQUNELGFBQU9yQyxjQUFjLENBQUNELFlBQVksQ0FBQ3VDLEdBQWQsRUFBbUJqQyxRQUFuQixDQUFyQjtBQUNELEtBekRzQztBQTBEdkNrQyxJQUFBQSxXQUFXLEVBQUUscUJBQUNuQyxNQUFELEVBQVk7QUFDdkIsVUFBTUMsUUFBUSxhQUFNVCxHQUFOLGNBQWFNLGFBQWEsQ0FBQ0ksSUFBM0Isb0JBQXlDRixNQUFNLENBQUNvQyxFQUFoRCxDQUFkO0FBQ0EsYUFBT3hDLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDMEMsTUFBZCxFQUFzQnBDLFFBQXRCLEVBQWdDSCxhQUFoQyxDQUFyQjtBQUNEO0FBN0RzQyxHQUFwQjtBQUFBLENBQXJCOztBQWdFQXdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjFDLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKVxuY29uc3QgeyBVUkksIFVQTE9BRF9BUElfVVJMLCBBUElfVkVSU0lPTiB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuXG5jb25zdCBtZWRpYU1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgYWRkTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VQTE9BRF9BUElfVVJMfS8ke0FQSV9WRVJTSU9OfS8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWFgXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYS5idWZmZXIsIHBhcmFtcy5tZWRpYS5vcmlnaW5hbG5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYSwgcGFyYW1zLm1lZGlhLm5hbWUpXG4gICAgfVxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KVxuICAgIH1cbiAgICBpZiAocGFyYW1zLmZvbGRlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ2ZvbGRlcicsIHBhcmFtcy5mb2xkZXIpXG4gICAgfVxuICAgIGlmIChwYXJhbXMubWV0YWRhdGEpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5tZXRhZGF0YSkpXG4gICAgfVxuICAgIGNvbnN0IGdldEhlYWRlcnMgPSAoKGZvcm0pID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICAgIGZvcm0uZ2V0TGVuZ3RoKChlcnIsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLCAuLi5mb3JtLmdldEhlYWRlcnMoKSB9XG4gICAgICAgICAgcmVzb2x2ZShoZWFkZXJzKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIClcbiAgICByZXR1cm4gZ2V0SGVhZGVycyhkYXRhKVxuICAgICAgLnRoZW4oKGhlYWRlcnMpID0+IHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgZGF0YSwgaGVhZGVycylcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRocm93IGVycm9yLnJlc3BvbnNlLmRhdGFcbiAgICAgICAgfSkpXG4gIH0sXG4gIGdldE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubG9jYWxlKSB7XG4gICAgICBlbmRwb2ludCArPSBgJmxvY2FsZT0ke3BhcmFtcy5sb2NhbGV9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5zdGF0dXMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc3RhdHVzPSR7cGFyYW1zLnN0YXR1c31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmZvbGRlcikge1xuICAgICAgZW5kcG9pbnQgKz0gYCZmb2xkZXI9JHtwYXJhbXMuZm9sZGVyfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGRlbGV0ZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH1gXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBidWNrZXRfY29uZmlnKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhTWV0aG9kc1xuIl19