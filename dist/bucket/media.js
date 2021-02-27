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

      headers["Authorization"] = "Bearer ".concat(bucket_config.write_key);
      return getHeaders(data).then(function (headers) {
        return requestHandler(HTTP_METHODS.POST, endpoint, data, headers)["catch"](function (error) {
          throw error.response.data;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsiRm9ybURhdGEiLCJyZXF1aXJlIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwibWVkaWFNZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImFkZE1lZGlhIiwicGFyYW1zIiwiZW5kcG9pbnQiLCJzbHVnIiwiZGF0YSIsIm1lZGlhIiwiYnVmZmVyIiwiYXBwZW5kIiwib3JpZ2luYWxuYW1lIiwibmFtZSIsIndyaXRlX2tleSIsImZvbGRlciIsIm1ldGFkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIlBPU1QiLCJlcnJvciIsInJlc3BvbnNlIiwiZ2V0TWVkaWEiLCJyZWFkX2tleSIsImxpbWl0Iiwic2tpcCIsInN0YXR1cyIsInByb3BzIiwiR0VUIiwiZ2V0U2luZ2xlTWVkaWEiLCJpZCIsImRlbGV0ZU1lZGlhIiwiREVMRVRFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXhCOztlQUM2Q0EsT0FBTyxDQUFDLHNCQUFELEM7SUFBNUNDLEcsWUFBQUEsRztJQUFLQyxjLFlBQUFBLGM7SUFBZ0JDLFcsWUFBQUEsVzs7QUFDN0IsSUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUMseUJBQUQsQ0FBNUI7O2dCQUMyQkEsT0FBTyxDQUFDLDRCQUFELEM7SUFBMUJLLGMsYUFBQUEsYzs7QUFFUixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxhQUFEO0FBQUEsU0FBb0I7QUFDdkNDLElBQUFBLFFBQVEsRUFBRSxrQkFBQ0MsTUFBRCxFQUFZO0FBQ3BC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QUMzQmEsUUFBQUEsT0FBTyxHQUFHO0FBQ1IsNENBQTJCeEIsYUFBYSxDQUFDVyxTQUF6QztBQURRLFNBQVY7QUFHRDs7QUFDRCxhQUFPYixjQUFjLENBQUNELFlBQVksQ0FBQzBDLE1BQWQsRUFBc0JwQyxRQUF0QixFQUFnQyxJQUFoQyxFQUFzQ3FCLE9BQXRDLENBQXJCO0FBQ0Q7QUF4RXNDLEdBQXBCO0FBQUEsQ0FBckI7O0FBMkVBZ0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUMsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YScpXG5jb25zdCB7IFVSSSwgVVBMT0FEX0FQSV9VUkwsIEFQSV9WRVJTSU9OIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbnN0YW50cycpXG5jb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2h0dHBfbWV0aG9kcycpXG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RfaGFuZGxlcicpXG5cbmNvbnN0IG1lZGlhTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICBhZGRNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVBMT0FEX0FQSV9VUkx9LyR7QVBJX1ZFUlNJT059LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYWBcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLmJ1ZmZlciwgcGFyYW1zLm1lZGlhLm9yaWdpbmFsbmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLCBwYXJhbXMubWVkaWEubmFtZSlcbiAgICB9XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMuZm9sZGVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnZm9sZGVyJywgcGFyYW1zLmZvbGRlcilcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zLm1ldGFkYXRhKSlcbiAgICB9XG4gICAgY29uc3QgZ2V0SGVhZGVycyA9ICgoZm9ybSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgICAgZm9ybS5nZXRMZW5ndGgoKGVyciwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycilcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1MZW5ndGgnOiBsZW5ndGgsIC4uLmZvcm0uZ2V0SGVhZGVycygpIH1cbiAgICAgICAgICByZXNvbHZlKGhlYWRlcnMpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgKVxuICAgIGhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWA7XG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhXG4gICAgICAgIH0pKVxuICB9LFxuICBnZXRNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5mb2xkZXIpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmZm9sZGVyPSR7cGFyYW1zLmZvbGRlcn1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRTaW5nbGVNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9P3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGRlbGV0ZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhLyR7cGFyYW1zLmlkfWBcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWFNZXRob2RzXG4iXX0=