"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtRGF0YSIsInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsImV4dGVuc2lvbk1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZ2V0RXh0ZW5zaW9ucyIsImVuZHBvaW50Iiwic2x1ZyIsIkdFVCIsImFkZEV4dGVuc2lvbiIsInBhcmFtcyIsImRhdGEiLCJ6aXAiLCJidWZmZXIiLCJhcHBlbmQiLCJvcmlnaW5hbG5hbWUiLCJuYW1lIiwid3JpdGVfa2V5IiwiZ2V0SGVhZGVycyIsImZvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldExlbmd0aCIsImVyciIsImxlbmd0aCIsImhlYWRlcnMiLCJ0aGVuIiwiUE9TVCIsImVycm9yIiwicmVzcG9uc2UiLCJlZGl0RXh0ZW5zaW9uIiwiaWQiLCJQVVQiLCJkZWxldGVFeHRlbnNpb24iLCJERUxFVEUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2J1Y2tldC9leHRlbnNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKVxuY29uc3QgeyBVUkkgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcblxuY29uc3QgZXh0ZW5zaW9uTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICBnZXRFeHRlbnNpb25zOiAoKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9leHRlbnNpb25zYFxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgYWRkRXh0ZW5zaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9leHRlbnNpb25zYFxuICAgIGxldCBkYXRhXG4gICAgaWYgKHBhcmFtcy56aXApIHtcbiAgICAgIGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgaWYgKHBhcmFtcy56aXAuYnVmZmVyKSB7XG4gICAgICAgIGRhdGEuYXBwZW5kKCd6aXAnLCBwYXJhbXMuemlwLmJ1ZmZlciwgcGFyYW1zLnppcC5vcmlnaW5hbG5hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLmFwcGVuZCgnemlwJywgcGFyYW1zLnppcCwgcGFyYW1zLnppcC5uYW1lKVxuICAgICAgfVxuICAgICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICAgIGRhdGEuYXBwZW5kKCd3cml0ZV9rZXknLCBidWNrZXRfY29uZmlnLndyaXRlX2tleSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHBhcmFtc1xuICAgICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICAgIGRhdGEud3JpdGVfa2V5ID0gYnVja2V0X2NvbmZpZy53cml0ZV9rZXlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0SGVhZGVycyA9ICgoZm9ybSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHBhcmFtcy56aXApIHtcbiAgICAgICAgaWYgKHBhcmFtcy56aXAuYnVmZmVyKSB7XG4gICAgICAgICAgZm9ybS5nZXRMZW5ndGgoKGVyciwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLCAuLi5mb3JtLmdldEhlYWRlcnMoKSB9XG4gICAgICAgICAgICByZXNvbHZlKGhlYWRlcnMpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgKVxuICAgIHJldHVybiBnZXRIZWFkZXJzKGRhdGEpXG4gICAgICAudGhlbigoaGVhZGVycykgPT4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBkYXRhLCBoZWFkZXJzKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2UuZGF0YVxuICAgICAgICB9KSlcbiAgfSxcbiAgZWRpdEV4dGVuc2lvbjogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS8ke2J1Y2tldF9jb25maWcuc2x1Z30vZXh0ZW5zaW9ucy8ke3BhcmFtcy5pZH1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBwYXJhbXMud3JpdGVfa2V5ID0gYnVja2V0X2NvbmZpZy53cml0ZV9rZXlcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QVVQsIGVuZHBvaW50LCBwYXJhbXMpXG4gIH0sXG4gIGRlbGV0ZUV4dGVuc2lvbjogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS8ke2J1Y2tldF9jb25maWcuc2x1Z30vZXh0ZW5zaW9ucy8ke3BhcmFtcy5pZH1gXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBidWNrZXRfY29uZmlnKVxuICB9XG59KVxuXG5tb2R1bGUuZXhw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