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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsiRm9ybURhdGEiLCJyZXF1aXJlIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwibWVkaWFNZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImFkZE1lZGlhIiwicGFyYW1zIiwiZW5kcG9pbnQiLCJzbHVnIiwiZGF0YSIsIm1lZGlhIiwiYnVmZmVyIiwiYXBwZW5kIiwib3JpZ2luYWxuYW1lIiwibmFtZSIsIndyaXRlX2tleSIsImZvbGRlciIsIm1ldGFkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyaWdnZXJfd2ViaG9vayIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIkF1dGhvcml6YXRpb24iLCJQT1NUIiwiZXJyb3IiLCJyZXNwb25zZSIsImdldE1lZGlhIiwicmVhZF9rZXkiLCJsaW1pdCIsInNraXAiLCJxdWVyeSIsImVuY29kZVVSSSIsInByb3BzIiwiR0VUIiwiZ2V0U2luZ2xlTWVkaWEiLCJpZCIsImRlbGV0ZU1lZGlhIiwiREVMRVRFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXhCOztlQUM2Q0EsT0FBTyxDQUFDLHNCQUFELEM7SUFBNUNDLEcsWUFBQUEsRztJQUFLQyxjLFlBQUFBLGM7SUFBZ0JDLFcsWUFBQUEsVzs7QUFDN0IsSUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUMseUJBQUQsQ0FBNUI7O2dCQUMyQkEsT0FBTyxDQUFDLDRCQUFELEM7SUFBMUJLLGMsYUFBQUEsYzs7QUFFUixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxhQUFEO0FBQUEsU0FBb0I7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SSxJQUFuQyxvQkFBaURGLE1BQU0sQ0FBQ3NDLEVBQXhELFNBQTZEdEMsTUFBTSxDQUFDYyxlQUFQLEdBQXlCLHVCQUF6QixHQUFtRCxFQUFoSCxDQUFkO0FBQ0EsVUFBSVMsT0FBSjs7QUFDQSxVQUFJekIsYUFBYSxDQUFDVyxTQUFsQixFQUE2QjtBQUMzQmMsUUFBQUEsT0FBTyxHQUFHO0FBQ1JFLFVBQUFBLGFBQWEsbUJBQVkzQixhQUFhLENBQUNXLFNBQTFCO0FBREwsU0FBVjtBQUdEOztBQUNELGFBQU9iLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDNkMsTUFBZCxFQUFzQnZDLFFBQXRCLEVBQWdDLElBQWhDLEVBQXNDc0IsT0FBdEMsQ0FBckI7QUFDRDtBQXpFc0MsR0FBcEI7QUFBQSxDQUFyQjs7QUE0RUFrQixNQUFNLENBQUNDLE9BQVAsR0FBaUI3QyxZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhJylcbmNvbnN0IHsgVVJJLCBVUExPQURfQVBJX1VSTCwgQVBJX1ZFUlNJT04gfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcblxuY29uc3QgbWVkaWFNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIGFkZE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUExPQURfQVBJX1VSTH0vJHtBUElfVkVSU0lPTn0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWFgXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYS5idWZmZXIsIHBhcmFtcy5tZWRpYS5vcmlnaW5hbG5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYSwgcGFyYW1zLm1lZGlhLm5hbWUpXG4gICAgfVxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KVxuICAgIH1cbiAgICBpZiAocGFyYW1zLmZvbGRlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ2ZvbGRlcicsIHBhcmFtcy5mb2xkZXIpXG4gICAgfVxuICAgIGlmIChwYXJhbXMubWV0YWRhdGEpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5tZXRhZGF0YSkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMudHJpZ2dlcl93ZWJob29rKSB7XG4gICAgICBkYXRhLmFwcGVuZCgndHJpZ2dlcl93ZWJob29rJywgcGFyYW1zLnRyaWdnZXJfd2ViaG9vaylcbiAgICB9XG4gICAgY29uc3QgZ2V0SGVhZGVycyA9ICgoZm9ybSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgICAgZm9ybS5nZXRMZW5ndGgoKGVyciwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycilcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1MZW5ndGgnOiBsZW5ndGgsIC4uLmZvcm0uZ2V0SGVhZGVycygpIH1cbiAgICAgICAgICByZXNvbHZlKGhlYWRlcnMpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgKVxuICAgIHJldHVybiBnZXRIZWFkZXJzKGRhdGEpXG4gICAgICAudGhlbigoaGVhZGVycykgPT4ge1xuICAgICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBkYXRhLCBoZWFkZXJzKVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLnJlc3BvbnNlLmRhdGFcbiAgICAgIH0pXG4gIH0sXG4gIGdldE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB7XG4gICAgICBlbmRwb2ludCArPSBgJmxpbWl0PSR7cGFyYW1zLmxpbWl0fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2tpcCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZza2lwPSR7cGFyYW1zLnNraXB9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5xdWVyeSkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShwYXJhbXMucXVlcnkpKX1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRTaW5nbGVNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9P3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGRlbGV0ZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhLyR7cGFyYW1zLmlkfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YFxuICAgIGxldCBoZWFkZXJzXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWFNZXRob2RzXG4iXX0=