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

      console.log(endpoint);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsiRm9ybURhdGEiLCJyZXF1aXJlIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwibWVkaWFNZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImFkZE1lZGlhIiwicGFyYW1zIiwiZW5kcG9pbnQiLCJzbHVnIiwiZGF0YSIsIm1lZGlhIiwiYnVmZmVyIiwiYXBwZW5kIiwib3JpZ2luYWxuYW1lIiwibmFtZSIsIndyaXRlX2tleSIsImZvbGRlciIsIm1ldGFkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIlBPU1QiLCJlcnJvciIsInJlc3BvbnNlIiwiZ2V0TWVkaWEiLCJyZWFkX2tleSIsImxpbWl0Iiwic2tpcCIsInF1ZXJ5IiwiZW5jb2RlVVJJIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiR0VUIiwiZ2V0U2luZ2xlTWVkaWEiLCJpZCIsImRlbGV0ZU1lZGlhIiwiREVMRVRFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXhCOztlQUM2Q0EsT0FBTyxDQUFDLHNCQUFELEM7SUFBNUNDLEcsWUFBQUEsRztJQUFLQyxjLFlBQUFBLGM7SUFBZ0JDLFcsWUFBQUEsVzs7QUFDN0IsSUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUMseUJBQUQsQ0FBNUI7O2dCQUMyQkEsT0FBTyxDQUFDLDRCQUFELEM7SUFBMUJLLGMsYUFBQUEsYzs7QUFFUixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxhQUFEO0FBQUEsU0FBb0I7QUFDdkNDLElBQUFBLFFBQVEs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VyxTQUFsQixFQUE2QjtBQUMzQmEsUUFBQUEsT0FBTyxHQUFHO0FBQ1IsNENBQTJCeEIsYUFBYSxDQUFDVyxTQUF6QztBQURRLFNBQVY7QUFHRDs7QUFDRCxhQUFPYixjQUFjLENBQUNELFlBQVksQ0FBQzZDLE1BQWQsRUFBc0J2QyxRQUF0QixFQUFnQyxJQUFoQyxFQUFzQ3FCLE9BQXRDLENBQXJCO0FBQ0Q7QUF2RXNDLEdBQXBCO0FBQUEsQ0FBckI7O0FBMEVBbUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCN0MsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YScpXG5jb25zdCB7IFVSSSwgVVBMT0FEX0FQSV9VUkwsIEFQSV9WRVJTSU9OIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbnN0YW50cycpXG5jb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2h0dHBfbWV0aG9kcycpXG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RfaGFuZGxlcicpXG5cbmNvbnN0IG1lZGlhTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICBhZGRNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVBMT0FEX0FQSV9VUkx9LyR7QVBJX1ZFUlNJT059L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhYFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWVkaWEnLCBwYXJhbXMubWVkaWEuYnVmZmVyLCBwYXJhbXMubWVkaWEub3JpZ2luYWxuYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWVkaWEnLCBwYXJhbXMubWVkaWEsIHBhcmFtcy5tZWRpYS5uYW1lKVxuICAgIH1cbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd3cml0ZV9rZXknLCBidWNrZXRfY29uZmlnLndyaXRlX2tleSlcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5mb2xkZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdmb2xkZXInLCBwYXJhbXMuZm9sZGVyKVxuICAgIH1cbiAgICBpZiAocGFyYW1zLm1ldGFkYXRhKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMubWV0YWRhdGEpKVxuICAgIH1cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKChmb3JtKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LUxlbmd0aCc6IGxlbmd0aCwgLi4uZm9ybS5nZXRIZWFkZXJzKCkgfVxuICAgICAgICAgIHJlc29sdmUoaGVhZGVycylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICApXG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiB7XG4gICAgICAgIGhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWA7XG4gICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhXG4gICAgICB9KVxuICB9LFxuICBnZXRNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocGFyYW1zLnF1ZXJ5KSl9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZ2V0U2luZ2xlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBkZWxldGVNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH1gXG4gICAgbGV0IGhlYWRlcnM7XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhTWV0aG9kc1xuIl19