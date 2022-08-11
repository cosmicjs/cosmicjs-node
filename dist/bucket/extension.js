"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormData = require('form-data');

var _require = require('../helpers/constants'),
    URI = _require.URI;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var extensionMethods = function extensionMethods(bucket_config) {
  return {
    getExtensions: function getExtensions() {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/extensions");
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    addExtension: function addExtension(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/extensions");
      var data;

      if (params.zip) {
        data = new FormData();

        if (params.zip.buffer) {
          data.append('zip', params.zip.buffer, params.zip.originalname);
        } else {
          data.append('zip', params.zip, params.zip.name);
        }

        if (bucket_config.write_key) {
          data.append('write_key', bucket_config.write_key);
        }
      } else {
        data = params;

        if (bucket_config.write_key) {
          data.write_key = bucket_config.write_key;
        }
      }

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
    editExtension: function editExtension(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/extensions/").concat(params.id);

      if (bucket_config.write_key) {
        params.write_key = bucket_config.write_key;
      }

      return requestHandler(HTTP_METHODS.PUT, endpoint, params);
    },
    deleteExtension: function deleteExtension(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/extensions/").concat(params.id);
      return requestHandler(HTTP_METHODS.DELETE, endpoint, bucket_config);
    }
  };
};

module.exports = extensionMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvZXh0ZW5zaW9uLmpzIl0sIm5hbWVzIjpbIkZvcm1EYXRhIiwicmVxdWlyZSIsIlVSSSIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwiZXh0ZW5zaW9uTWV0aG9kcyIsImJ1Y2tldF9jb25maWciLCJnZXRFeHRlbnNpb25zIiwiZW5kcG9pbnQiLCJzbHVnIiwiR0VUIiwiYWRkRXh0ZW5zaW9uIiwicGFyYW1zIiwiZGF0YSIsInppcCIsImJ1ZmZlciIsImFwcGVuZCIsIm9yaWdpbmFsbmFtZSIsIm5hbWUiLCJ3cml0ZV9rZXkiLCJnZXRIZWFkZXJzIiwiZm9ybSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0TGVuZ3RoIiwiZXJyIiwibGVuZ3RoIiwiaGVhZGVycyIsInRoZW4iLCJQT1NUIiwiZXJyb3IiLCJyZXNwb25zZSIsImVkaXRFeHRlbnNpb24iLCJpZCIsIlBVVCIsImRlbGV0ZUV4dGVuc2lvbiIsIkRFTEVURSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF4Qjs7ZUFDZ0JBLE9BQU8sQ0FBQyxzQkFBRCxDO0lBQWZDLEcsWUFBQUEsRzs7QUFDUixJQUFNQyxZQUFZLEdBQUdGLE9BQU8sQ0FBQyx5QkFBRCxDQUE1Qjs7Z0JBQzJCQSxPQUFPLENBQUMsNEJBQUQsQztJQUExQkcsYyxhQUFBQSxjOztBQUVSLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsYUFBRDtBQUFBLFNBQW9CO0FBQzNDQyxJQUFBQSxhQUFhLEVBQUUseUJBQU07QUFDbkIsVUFBTUMsUUFBUSxhQUFNTixHQUFOLGNBQWFJLGFBQWEsQ0FBQ0csSUFBM0IsZ0JBQWQ7QUFDQSxhQUFPTCxjQUFjLENBQUNELFlBQVksQ0FBQ08sR0FBZCxFQUFtQkYsUUFBbkIsQ0FBckI7QUFDRCxLQUowQztBQUszQ0csSUFB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ckI7QUFDRCxLQXBEMEM7QUFxRDNDd0IsSUFBQUEsZUFBZSxFQUFFLHlCQUFDeEIsTUFBRCxFQUFZO0FBQzNCLFVBQU1KLFFBQVEsYUFBTU4sR0FBTixjQUFhSSxhQUFhLENBQUNHLElBQTNCLHlCQUE4Q0csTUFBTSxDQUFDc0IsRUFBckQsQ0FBZDtBQUNBLGFBQU85QixjQUFjLENBQUNELFlBQVksQ0FBQ2tDLE1BQWQsRUFBc0I3QixRQUF0QixFQUFnQ0YsYUFBaEMsQ0FBckI7QUFDRDtBQXhEMEMsR0FBcEI7QUFBQSxDQUF6Qjs7QUEyREFnQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQyxnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YScpXG5jb25zdCB7IFVSSSB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuXG5jb25zdCBleHRlbnNpb25NZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIGdldEV4dGVuc2lvbnM6ICgpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRfY29uZmlnLnNsdWd9L2V4dGVuc2lvbnNgXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBhZGRFeHRlbnNpb246IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRfY29uZmlnLnNsdWd9L2V4dGVuc2lvbnNgXG4gICAgbGV0IGRhdGFcbiAgICBpZiAocGFyYW1zLnppcCkge1xuICAgICAgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICBpZiAocGFyYW1zLnppcC5idWZmZXIpIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3ppcCcsIHBhcmFtcy56aXAuYnVmZmVyLCBwYXJhbXMuemlwLm9yaWdpbmFsbmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuYXBwZW5kKCd6aXAnLCBwYXJhbXMuemlwLCBwYXJhbXMuemlwLm5hbWUpXG4gICAgICB9XG4gICAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gcGFyYW1zXG4gICAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgICAgZGF0YS53cml0ZV9rZXkgPSBidWNrZXRfY29uZmlnLndyaXRlX2tleVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKChmb3JtKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLnppcCkge1xuICAgICAgICBpZiAocGFyYW1zLnppcC5idWZmZXIpIHtcbiAgICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1MZW5ndGgnOiBsZW5ndGgsIC4uLmZvcm0uZ2V0SGVhZGVycygpIH1cbiAgICAgICAgICAgIHJlc29sdmUoaGVhZGVycylcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICApXG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhXG4gICAgICAgIH0pKVxuICB9LFxuICBlZGl0RXh0ZW5zaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9leHRlbnNpb25zLyR7cGFyYW1zLmlkfWBcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIHBhcmFtcy53cml0ZV9rZXkgPSBidWNrZXRfY29uZmlnLndyaXRlX2tleVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBVVCwgZW5kcG9pbnQsIHBhcmFtcylcbiAgfSxcbiAgZGVsZXRlRXh0ZW5zaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9leHRlbnNpb25zLyR7cGFyYW1zLmlkfWBcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIGJ1Y2tldF9jb25maWcpXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gZXh0ZW5zaW9uTWV0aG9kc1xuIl19