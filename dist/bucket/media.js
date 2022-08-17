"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('regenerator-runtime/runtime');

var FormData = require('form-data');

var _require = require('../helpers/constants'),
    URI = _require.URI,
    UPLOAD_API_URL = _require.UPLOAD_API_URL,
    API_VERSION = _require.API_VERSION;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var promiser = require('../helpers/promiser');

var mediaChainMethods = function mediaChainMethods(bucket_config) {
  return {
    // Get
    find: function find(query) {
      this.endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media?read_key=").concat(bucket_config.read_key).concat(query ? "&query=".concat(encodeURI(JSON.stringify(query))) : '');
      return this;
    },
    // findOne
    findOne: function findOne(query) {
      this.endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media/").concat(query.id, "?read_key=").concat(bucket_config.read_key);
      return this;
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
    // insertOne
    insertOne: function insertOne(params) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var endpoint, data, getHeaders;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                endpoint = "".concat(UPLOAD_API_URL, "/").concat(API_VERSION, "/buckets/").concat(bucket_config.slug, "/media");
                data = new FormData();

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

                getHeaders = function getHeaders(form) {
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

                return _context.abrupt("return", getHeaders(data).then(function (headers) {
                  headers.Authorization = "Bearer ".concat(bucket_config.write_key);
                  return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
                })["catch"](function (error) {
                  throw error.response.data;
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // Delete
    deleteOne: function deleteOne(params) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var endpoint, headers;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media/").concat(params.id).concat(params.trigger_webhook ? '?trigger_webhook=true' : '');

                if (bucket_config.write_key) {
                  headers = {
                    Authorization: "Bearer ".concat(bucket_config.write_key)
                  };
                }

                return _context2.abrupt("return", requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    then: function then(resolve, reject) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                promiser(_this.endpoint).then(function (res) {
                  return resolve(res, null);
                })["catch"](function (err) {
                  if (typeof reject === 'function') {
                    reject(err);
                  } else {
                    resolve(null, err);
                  }
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkZvcm1EYXRhIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwicHJvbWlzZXIiLCJtZWRpYUNoYWluTWV0aG9kcyIsImJ1Y2tldF9jb25maWciLCJmaW5kIiwicXVlcnkiLCJlbmRwb2ludCIsInNsdWciLCJyZWFkX2tleSIsImVuY29kZVVSSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaW5kT25lIiwiaWQiLCJwcm9wcyIsInNvcnQiLCJsaW1pdCIsInNraXAiLCJpbnNlcnRPbmUiLCJwYXJhbXMiLCJkYXRhIiwibWVkaWEiLCJidWZmZXIiLCJhcHBlbmQiLCJvcmlnaW5hbG5hbWUiLCJuYW1lIiwid3JpdGVfa2V5IiwiZm9sZGVyIiwibWV0YWRhdGEiLCJ0cmlnZ2VyX3dlYmhvb2siLCJ0b1N0cmluZyIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIkF1dGhvcml6YXRpb24iLCJQT1NUIiwiZXJyb3IiLCJyZXNwb25zZSIsImRlbGV0ZU9uZSIsIkRFTEVURSIsInJlcyIsIm1lZGlhTWV0aG9kcyIsImFkZE1lZGlhIiwiZ2V0TWVkaWEiLCJHRVQiLCJnZXRTaW5nbGVNZWRpYSIsImRlbGV0ZU1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQyw2QkFBRCxDQUFQOztBQUVBLElBQU1DLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBeEI7O2VBQzZDQSxPQUFPLENBQUMsc0JBQUQsQztJQUE1Q0UsRyxZQUFBQSxHO0lBQUtDLGMsWUFBQUEsYztJQUFnQkMsVyxZQUFBQSxXOztBQUM3QixJQUFNQyxZQUFZ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LENBQUNMLEtBQXJCLENBQVI7QUFDRDs7QUFDRCxhQUFPZCxjQUFjLENBQUNELFlBQVksQ0FBQ29ELEdBQWQsRUFBbUI3QyxRQUFuQixDQUFyQjtBQUNELEtBaEVzQztBQWlFdkMrQyxJQUFBQSxXQUFXLEVBQUUscUJBQUNsQyxNQUFELEVBQVk7QUFDdkIsVUFBTWIsUUFBUSxhQUFNVixHQUFOLHNCQUFxQk8sYUFBYSxDQUFDSSxJQUFuQyxvQkFBaURZLE1BQU0sQ0FBQ04sRUFBeEQsU0FBNkRNLE1BQU0sQ0FBQ1UsZUFBUCxHQUF5Qix1QkFBekIsR0FBbUQsRUFBaEgsQ0FBZDtBQUNBLFVBQUlVLE9BQUo7O0FBQ0EsVUFBSXBDLGFBQWEsQ0FBQ3VCLFNBQWxCLEVBQTZCO0FBQzNCYSxRQUFBQSxPQUFPLEdBQUc7QUFDUkUsVUFBQUEsYUFBYSxtQkFBWXRDLGFBQWEsQ0FBQ3VCLFNBQTFCO0FBREwsU0FBVjtBQUdEOztBQUNELGFBQU8xQixjQUFjLENBQUNELFlBQVksQ0FBQytDLE1BQWQsRUFBc0J4QyxRQUF0QixFQUFnQyxJQUFoQyxFQUFzQ2lDLE9BQXRDLENBQXJCO0FBQ0Q7QUExRXNDLEdBQXBCO0FBQUEsQ0FBckI7O0FBNkVBZSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJylcblxuY29uc3QgRm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKVxuY29uc3QgeyBVUkksIFVQTE9BRF9BUElfVVJMLCBBUElfVkVSU0lPTiB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuY29uc3QgcHJvbWlzZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3Byb21pc2VyJylcblxuY29uc3QgbWVkaWFDaGFpbk1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgLy8gR2V0XG4gIGZpbmQocXVlcnkpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9JHtxdWVyeSA/IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocXVlcnkpKX1gIDogJyd9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIC8vIGZpbmRPbmVcbiAgZmluZE9uZShxdWVyeSkge1xuICAgIHRoaXMuZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhLyR7cXVlcnkuaWR9P3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgcHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmcHJvcHM9JHtwcm9wc31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgc29ydChzb3J0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNvcnQ9JHtzb3J0fWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBsaW1pdChsaW1pdCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZsaW1pdD0ke2xpbWl0fWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBza2lwKHNraXApIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2tpcD0ke3NraXB9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIC8vIGluc2VydE9uZVxuICBhc3luYyBpbnNlcnRPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUExPQURfQVBJX1VSTH0vJHtBUElfVkVSU0lPTn0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWFgXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYS5idWZmZXIsIHBhcmFtcy5tZWRpYS5vcmlnaW5hbG5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYSwgcGFyYW1zLm1lZGlhLm5hbWUpXG4gICAgfVxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KVxuICAgIH1cbiAgICBpZiAocGFyYW1zLmZvbGRlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ2ZvbGRlcicsIHBhcmFtcy5mb2xkZXIpXG4gICAgfVxuICAgIGlmIChwYXJhbXMubWV0YWRhdGEpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5tZXRhZGF0YSkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMudHJpZ2dlcl93ZWJob29rKSB7XG4gICAgICBkYXRhLmFwcGVuZCgndHJpZ2dlcl93ZWJob29rJywgcGFyYW1zLnRyaWdnZXJfd2ViaG9vay50b1N0cmluZygpKVxuICAgIH1cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKChmb3JtKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LUxlbmd0aCc6IGxlbmd0aCwgLi4uZm9ybS5nZXRIZWFkZXJzKCkgfVxuICAgICAgICAgIHJlc29sdmUoaGVhZGVycylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICApXG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiB7XG4gICAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2UuZGF0YVxuICAgICAgfSlcbiAgfSxcbiAgLy8gRGVsZXRlXG4gIGFzeW5jIGRlbGV0ZU9uZShwYXJhbXMpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9JHtwYXJhbXMudHJpZ2dlcl93ZWJob29rID8gJz90cmlnZ2VyX3dlYmhvb2s9dHJ1ZScgOiAnJ31gXG4gICAgbGV0IGhlYWRlcnNcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycylcbiAgfSxcbiAgYXN5bmMgdGhlbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcm9taXNlcih0aGlzLmVuZHBvaW50KS50aGVuKChyZXMpID0+IHJlc29sdmUocmVzLCBudWxsKSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUobnVsbCwgZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbmNvbnN0IG1lZGlhTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICBtZWRpYTogbWVkaWFDaGFpbk1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIGFkZE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUExPQURfQVBJX1VSTH0vJHtBUElfVkVSU0lPTn0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWFgXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYS5idWZmZXIsIHBhcmFtcy5tZWRpYS5vcmlnaW5hbG5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYSwgcGFyYW1zLm1lZGlhLm5hbWUpXG4gICAgfVxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KVxuICAgIH1cbiAgICBpZiAocGFyYW1zLmZvbGRlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ2ZvbGRlcicsIHBhcmFtcy5mb2xkZXIpXG4gICAgfVxuICAgIGlmIChwYXJhbXMubWV0YWRhdGEpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5tZXRhZGF0YSkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMudHJpZ2dlcl93ZWJob29rKSB7XG4gICAgICBkYXRhLmFwcGVuZCgndHJpZ2dlcl93ZWJob29rJywgcGFyYW1zLnRyaWdnZXJfd2ViaG9vay50b1N0cmluZygpKVxuICAgIH1cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKChmb3JtKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LUxlbmd0aCc6IGxlbmd0aCwgLi4uZm9ybS5nZXRIZWFkZXJzKCkgfVxuICAgICAgICAgIHJlc29sdmUoaGVhZGVycylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICApXG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiB7XG4gICAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2UuZGF0YVxuICAgICAgfSlcbiAgfSxcbiAgZ2V0TWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldFNpbmdsZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZGVsZXRlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9JHtwYXJhbXMudHJpZ2dlcl93ZWJob29rID8gJz90cmlnZ2VyX3dlYmhvb2s9dHJ1ZScgOiAnJ31gXG4gICAgbGV0IGhlYWRlcnNcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycylcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYU1ldGhvZHNcbiJdfQ==