"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FormData = require('form-data');

var _require = require('../helpers/constants'),
    URI = _require.URI,
    UPLOAD_API_URL = _require.UPLOAD_API_URL,
    API_VERSION = _require.API_VERSION;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var mediaChainMethods = function mediaChainMethods(bucket_config) {
  return {
    // Get
    find: function find(query) {
      this.endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media?read_key=").concat(bucket_config.read_key).concat(query ? "&query=".concat(encodeURI(JSON.stringify(query))) : '');
      return this;
    },
    // Delete
    deleteOne: function deleteOne(params) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var endpoint;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id).concat(params.trigger_webhook ? '?trigger_webhook=true' : '');

                if (bucket_config.write_key) {
                  headers = {
                    Authorization: "Bearer ".concat(bucket_config.write_key)
                  };
                }

                return _context.abrupt("return", requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    props: function props(_props) {
      this.endpoint += "&props=".concat(_props);
      return this;
    },
    sort: function sort(_sort) {
      this.endpoint += "&sort=".concat(_sort);
      return this;
    },
    limit: function limit(_limit) {
      this.endpoint += "&limit=".concat(_limit);
      return this;
    },
    skip: function skip(_skip) {
      this.endpoint += "&skip=".concat(_skip);
      return this;
    },
    then: function then(resolve) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                resolve(new Promise(function (res) {
                  res(requestHandler(HTTP_METHODS.GET, _this.endpoint));
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  };
};

var mediaMethods = function mediaMethods(bucket_config) {
  return {
    media: mediaChainMethods(bucket_config),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsiRm9ybURhdGEiLCJyZXF1aXJlIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwibWVkaWFDaGFpbk1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZmluZCIsInF1ZXJ5IiwiZW5kcG9pbnQiLCJzbHVnIiwicmVhZF9rZXkiLCJlbmNvZGVVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVsZXRlT25lIiwicGFyYW1zIiwiaWQiLCJ0cmlnZ2VyX3dlYmhvb2siLCJ3cml0ZV9rZXkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkRFTEVURSIsInByb3BzIiwic29ydCIsImxpbWl0Iiwic2tpcCIsInRoZW4iLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlcyIsIkdFVCIsIm1lZGlhTWV0aG9kcyIsIm1lZGlhIiwiYWRkTWVkaWEiLCJkYXRhIiwiYnVmZmVyIiwiYXBwZW5kIiwib3JpZ2luYWxuYW1lIiwibmFtZSIsImZvbGRlciIsIm1ldGFkYXRhIiwidG9TdHJpbmciLCJnZXRIZWFkZXJzIiwiZm9ybSIsInJlamVjdCIsImdldExlbmd0aCIsImVyciIsImxlbmd0aCIsIlBPU1QiLCJlcnJvciIsInJlc3BvbnNlIiwiZ2V0TWVkaWEiLCJnZXRTaW5nbGVNZWRpYSIsImRlbGV0ZU1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF4Qjs7ZUFDNkNBLE9BQU8sQ0FBQyxzQkFBRCxDO0lBQTVDQyxHLFlBQUFBLEc7SUFBS0MsYyxZQUFBQSxjO0lBQWdCQyxXLFlBQUFBLFc7O0FBQzdCLElBQU1DLFlBQVksR0FBR0osT0FBTyxDQUFDLHlCQUFELENBQTVCOztnQkFDMkJBLE9BQU8sQ0FBQyw0QkFBRCxDO0lBQTFC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MUI7QUFETCxTQUFWO0FBR0Q7O0FBQ0QsYUFBT2YsY0FBYyxDQUFDRCxZQUFZLENBQUNtQixNQUFkLEVBQXNCYixRQUF0QixFQUFnQyxJQUFoQyxFQUFzQ1csT0FBdEMsQ0FBckI7QUFDRDtBQTFFc0MsR0FBcEI7QUFBQSxDQUFyQjs7QUE2RUFtQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhJylcbmNvbnN0IHsgVVJJLCBVUExPQURfQVBJX1VSTCwgQVBJX1ZFUlNJT04gfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcblxuY29uc3QgbWVkaWFDaGFpbk1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgLy8gR2V0XG4gIGZpbmQocXVlcnkpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9JHtxdWVyeSA/IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocXVlcnkpKX1gIDogJyd9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIC8vIERlbGV0ZVxuICBhc3luYyBkZWxldGVPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9JHtwYXJhbXMudHJpZ2dlcl93ZWJob29rID8gJz90cmlnZ2VyX3dlYmhvb2s9dHJ1ZScgOiAnJ31gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpXG4gIH0sXG4gIHByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnByb3BzPSR7cHJvcHN9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHNvcnQoc29ydCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzb3J0PSR7c29ydH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgbGltaXQobGltaXQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmbGltaXQ9JHtsaW1pdH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgc2tpcChza2lwKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNraXA9JHtza2lwfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBhc3luYyB0aGVuKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKFxuICAgICAgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICByZXMocmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgdGhpcy5lbmRwb2ludCkpXG4gICAgICB9KVxuICAgIClcbiAgfVxufSlcblxuY29uc3QgbWVkaWFNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIG1lZGlhOiBtZWRpYUNoYWluTWV0aG9kcyhidWNrZXRfY29uZmlnKSxcbiAgYWRkTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VQTE9BRF9BUElfVVJMfS8ke0FQSV9WRVJTSU9OfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYWBcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLmJ1ZmZlciwgcGFyYW1zLm1lZGlhLm9yaWdpbmFsbmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLCBwYXJhbXMubWVkaWEubmFtZSlcbiAgICB9XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMuZm9sZGVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnZm9sZGVyJywgcGFyYW1zLmZvbGRlcilcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zLm1ldGFkYXRhKSlcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50cmlnZ2VyX3dlYmhvb2spIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd0cmlnZ2VyX3dlYmhvb2snLCBwYXJhbXMudHJpZ2dlcl93ZWJob29rLnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIGNvbnN0IGdldEhlYWRlcnMgPSAoKGZvcm0pID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICAgIGZvcm0uZ2V0TGVuZ3RoKChlcnIsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLCAuLi5mb3JtLmdldEhlYWRlcnMoKSB9XG4gICAgICAgICAgcmVzb2x2ZShoZWFkZXJzKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIClcbiAgICByZXR1cm4gZ2V0SGVhZGVycyhkYXRhKVxuICAgICAgLnRoZW4oKGhlYWRlcnMpID0+IHtcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgZGF0YSwgaGVhZGVycylcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhXG4gICAgICB9KVxuICB9LFxuICBnZXRNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocGFyYW1zLnF1ZXJ5KSl9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZ2V0U2luZ2xlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBkZWxldGVNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0ke3BhcmFtcy50cmlnZ2VyX3dlYmhvb2sgPyAnP3RyaWdnZXJfd2ViaG9vaz10cnVlJyA6ICcnfWBcbiAgICBsZXQgaGVhZGVyc1xuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhTWV0aG9kc1xuIl19