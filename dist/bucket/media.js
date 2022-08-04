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
        data.append('trigger_webhook', params.trigger_webhook.toString());
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
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media/").concat(params.id).concat(params.trigger_webhook ? '?trigger_webhook=true' : '');
      var headers;

      if (bucket_config.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucket_config.write_key)
        };
      }

      return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
    }
  };
};

module.exports = mediaMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsiRm9ybURhdGEiLCJyZXF1aXJlIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwibWVkaWFNZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImFkZE1lZGlhIiwicGFyYW1zIiwiZW5kcG9pbnQiLCJzbHVnIiwiZGF0YSIsIm1lZGlhIiwiYnVmZmVyIiwiYXBwZW5kIiwib3JpZ2luYWxuYW1lIiwibmFtZSIsIndyaXRlX2tleSIsImZvbGRlciIsIm1ldGFkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyaWdnZXJfd2ViaG9vayIsInRvU3RyaW5nIiwiZ2V0SGVhZGVycyIsImZvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldExlbmd0aCIsImVyciIsImxlbmd0aCIsImhlYWRlcnMiLCJ0aGVuIiwiQXV0aG9yaXphdGlvbiIsIlBPU1QiLCJlcnJvciIsInJlc3BvbnNlIiwiZ2V0TWVkaWEiLCJyZWFkX2tleSIsImxpbWl0Iiwic2tpcCIsInF1ZXJ5IiwiZW5jb2RlVVJJIiwicHJvcHMiLCJHRVQiLCJnZXRTaW5nbGVNZWRpYSIsImlkIiwiZGVsZXRlTWVkaWEiLCJERUxFVEUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBeEI7O2VBQzZDQSxPQUFPLENBQUMsc0JBQUQsQztJQUE1Q0MsRyxZQUFBQSxHO0lBQUtDLGMsWUFBQUEsYztJQUFnQkMsVyxZQUFBQSxXOztBQUM3QixJQUFNQyxZQUFZLEdBQUdKLE9BQU8sQ0FBQyx5QkFBRCxDQUE1Qjs7Z0JBQzJCQSxPQUFPLENBQUMsNEJBQUQsQztJQUExQkssYyxhQUFBQSxjOztBQUVSLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLGFBQUQ7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LGFBQU1ULEdBQU4sc0JBQXFCTSxhQUFhLENBQUNJLElBQW5DLG9CQUFpREYsTUFBTSxDQUFDdUMsRUFBeEQsU0FBNkR2QyxNQUFNLENBQUNjLGVBQVAsR0FBeUIsdUJBQXpCLEdBQW1ELEVBQWhILENBQWQ7QUFDQSxVQUFJVSxPQUFKOztBQUNBLFVBQUkxQixhQUFhLENBQUNXLFNBQWxCLEVBQTZCO0FBQzNCZSxRQUFBQSxPQUFPLEdBQUc7QUFDUkUsVUFBQUEsYUFBYSxtQkFBWTVCLGFBQWEsQ0FBQ1csU0FBMUI7QUFETCxTQUFWO0FBR0Q7O0FBQ0QsYUFBT2IsY0FBYyxDQUFDRCxZQUFZLENBQUM4QyxNQUFkLEVBQXNCeEMsUUFBdEIsRUFBZ0MsSUFBaEMsRUFBc0N1QixPQUF0QyxDQUFyQjtBQUNEO0FBekVzQyxHQUFwQjtBQUFBLENBQXJCOztBQTRFQWtCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjlDLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKVxuY29uc3QgeyBVUkksIFVQTE9BRF9BUElfVVJMLCBBUElfVkVSU0lPTiB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuXG5jb25zdCBtZWRpYU1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgYWRkTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VQTE9BRF9BUElfVVJMfS8ke0FQSV9WRVJTSU9OfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYWBcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLmJ1ZmZlciwgcGFyYW1zLm1lZGlhLm9yaWdpbmFsbmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLCBwYXJhbXMubWVkaWEubmFtZSlcbiAgICB9XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMuZm9sZGVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnZm9sZGVyJywgcGFyYW1zLmZvbGRlcilcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zLm1ldGFkYXRhKSlcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50cmlnZ2VyX3dlYmhvb2spIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd0cmlnZ2VyX3dlYmhvb2snLCBwYXJhbXMudHJpZ2dlcl93ZWJob29rLnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIGNvbnN0IGdldEhlYWRlcnMgPSAoKGZvcm0pID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICAgIGZvcm0uZ2V0TGVuZ3RoKChlcnIsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLCAuLi5mb3JtLmdldEhlYWRlcnMoKSB9XG4gICAgICAgICAgcmVzb2x2ZShoZWFkZXJzKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIClcbiAgICByZXR1cm4gZ2V0SGVhZGVycyhkYXRhKVxuICAgICAgLnRoZW4oKGhlYWRlcnMpID0+IHtcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgZGF0YSwgaGVhZGVycylcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhXG4gICAgICB9KVxuICB9LFxuICBnZXRNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocGFyYW1zLnF1ZXJ5KSl9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZ2V0U2luZ2xlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBkZWxldGVNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0ke3BhcmFtcy50cmlnZ2VyX3dlYmhvb2sgPyAnP3RyaWdnZXJfd2ViaG9vaz10cnVlJyA6ICcnfWBcbiAgICBsZXQgaGVhZGVyc1xuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhTWV0aG9kc1xuIl19