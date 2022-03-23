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
        headers["Authorization"] = "Bearer ".concat(bucket_config.write_key);
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
          "Authorization": "Bearer ".concat(bucket_config.write_key)
        };
      }

      return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
    }
  };
};

module.exports = mediaMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsiRm9ybURhdGEiLCJyZXF1aXJlIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwibWVkaWFNZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImFkZE1lZGlhIiwicGFyYW1zIiwiZW5kcG9pbnQiLCJzbHVnIiwiZGF0YSIsIm1lZGlhIiwiYnVmZmVyIiwiYXBwZW5kIiwib3JpZ2luYWxuYW1lIiwibmFtZSIsIndyaXRlX2tleSIsImZvbGRlciIsIm1ldGFkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIlBPU1QiLCJlcnJvciIsInJlc3BvbnNlIiwiZ2V0TWVkaWEiLCJyZWFkX2tleSIsImxpbWl0Iiwic2tpcCIsInF1ZXJ5IiwiZW5jb2RlVVJJIiwicHJvcHMiLCJHRVQiLCJnZXRTaW5nbGVNZWRpYSIsImlkIiwiZGVsZXRlTWVkaWEiLCJERUxFVEUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBeEI7O2VBQzZDQSxPQUFPLENBQUMsc0JBQUQsQztJQUE1Q0MsRyxZQUFBQSxHO0lBQUtDLGMsWUFBQUEsYztJQUFnQkMsVyxZQUFBQSxXOztBQUM3QixJQUFNQyxZQUFZLEdBQUdKLE9BQU8sQ0FBQyx5QkFBRCxDQUE1Qjs7Z0JBQzJCQSxPQUFPLENBQUMsNEJBQUQsQztJQUExQkssYyxhQUFBQSxjOztBQUVSLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLGFBQUQ7QUFBQSxTQUFvQjtBQUN2Q0MsSUFBQUEsUUFBUSxFQUFFLGtCQUFDQyxNQUFE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Q0FBQ1csU0FBekM7QUFEUSxTQUFWO0FBR0Q7O0FBQ0QsYUFBT2IsY0FBYyxDQUFDRCxZQUFZLENBQUMyQyxNQUFkLEVBQXNCckMsUUFBdEIsRUFBZ0MsSUFBaEMsRUFBc0NxQixPQUF0QyxDQUFyQjtBQUNEO0FBdEVzQyxHQUFwQjtBQUFBLENBQXJCOztBQXlFQWlCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNDLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKVxuY29uc3QgeyBVUkksIFVQTE9BRF9BUElfVVJMLCBBUElfVkVSU0lPTiB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuXG5jb25zdCBtZWRpYU1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgYWRkTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VQTE9BRF9BUElfVVJMfS8ke0FQSV9WRVJTSU9OfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYWBcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLmJ1ZmZlciwgcGFyYW1zLm1lZGlhLm9yaWdpbmFsbmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLCBwYXJhbXMubWVkaWEubmFtZSlcbiAgICB9XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMuZm9sZGVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnZm9sZGVyJywgcGFyYW1zLmZvbGRlcilcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zLm1ldGFkYXRhKSlcbiAgICB9XG4gICAgY29uc3QgZ2V0SGVhZGVycyA9ICgoZm9ybSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgICAgZm9ybS5nZXRMZW5ndGgoKGVyciwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycilcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1MZW5ndGgnOiBsZW5ndGgsIC4uLmZvcm0uZ2V0SGVhZGVycygpIH1cbiAgICAgICAgICByZXNvbHZlKGhlYWRlcnMpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgKVxuICAgIHJldHVybiBnZXRIZWFkZXJzKGRhdGEpXG4gICAgICAudGhlbigoaGVhZGVycykgPT4ge1xuICAgICAgICBoZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gO1xuICAgICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBkYXRhLCBoZWFkZXJzKVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2UuZGF0YVxuICAgICAgfSlcbiAgfSxcbiAgZ2V0TWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldFNpbmdsZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZGVsZXRlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9YFxuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycylcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYU1ldGhvZHNcbiJdfQ==