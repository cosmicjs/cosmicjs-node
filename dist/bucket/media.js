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
    then: function then(cb) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                promiser(_this.endpoint).then(function (res) {
                  return cb(res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkZvcm1EYXRhIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwicHJvbWlzZXIiLCJtZWRpYUNoYWluTWV0aG9kcyIsImJ1Y2tldF9jb25maWciLCJmaW5kIiwicXVlcnkiLCJlbmRwb2ludCIsInNsdWciLCJyZWFkX2tleSIsImVuY29kZVVSSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaW5kT25lIiwiaWQiLCJwcm9wcyIsInNvcnQiLCJsaW1pdCIsInNraXAiLCJpbnNlcnRPbmUiLCJwYXJhbXMiLCJkYXRhIiwibWVkaWEiLCJidWZmZXIiLCJhcHBlbmQiLCJvcmlnaW5hbG5hbWUiLCJuYW1lIiwid3JpdGVfa2V5IiwiZm9sZGVyIiwibWV0YWRhdGEiLCJ0cmlnZ2VyX3dlYmhvb2siLCJ0b1N0cmluZyIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIkF1dGhvcml6YXRpb24iLCJQT1NUIiwiZXJyb3IiLCJyZXNwb25zZSIsImRlbGV0ZU9uZSIsIkRFTEVURSIsImNiIiwicmVzIiwibWVkaWFNZXRob2RzIiwiYWRkTWVkaWEiLCJnZXRNZWRpYSIsIkdFVCIsImdldFNpbmdsZU1lZGlhIiwiZGVsZXRlTWVkaWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDLDZCQUFELENBQVA7O0FBRUEsSUFBTUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF4Qjs7ZUFDNkNBLE9BQU8sQ0FBQyxzQkFBRCxDO0lBQTVDRSxHLFlBQUFBLEc7SUFBS0MsYyxZQUFBQSxjO0lBQWdCQyxXLFlBQUFBLFc7O0FBQzdCLElBQU1D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LE1BQU0sQ0FBQ04sRUFBeEQsU0FBNkRNLE1BQU0sQ0FBQ1UsZUFBUCxHQUF5Qix1QkFBekIsR0FBbUQsRUFBaEgsQ0FBZDtBQUNBLFVBQUlVLE9BQUo7O0FBQ0EsVUFBSXBDLGFBQWEsQ0FBQ3VCLFNBQWxCLEVBQTZCO0FBQzNCYSxRQUFBQSxPQUFPLEdBQUc7QUFDUkUsVUFBQUEsYUFBYSxtQkFBWXRDLGFBQWEsQ0FBQ3VCLFNBQTFCO0FBREwsU0FBVjtBQUdEOztBQUNELGFBQU8xQixjQUFjLENBQUNELFlBQVksQ0FBQytDLE1BQWQsRUFBc0J4QyxRQUF0QixFQUFnQyxJQUFoQyxFQUFzQ2lDLE9BQXRDLENBQXJCO0FBQ0Q7QUExRXNDLEdBQXBCO0FBQUEsQ0FBckI7O0FBNkVBZ0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZScpXG5cbmNvbnN0IEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhJylcbmNvbnN0IHsgVVJJLCBVUExPQURfQVBJX1VSTCwgQVBJX1ZFUlNJT04gfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcbmNvbnN0IHByb21pc2VyID0gcmVxdWlyZSgnLi4vaGVscGVycy9wcm9taXNlcicpXG5cbmNvbnN0IG1lZGlhQ2hhaW5NZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIC8vIEdldFxuICBmaW5kKHF1ZXJ5KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fSR7cXVlcnkgPyBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSl9YCA6ICcnfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICAvLyBmaW5kT25lXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3F1ZXJ5LmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnByb3BzPSR7cHJvcHN9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHNvcnQoc29ydCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzb3J0PSR7c29ydH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgbGltaXQobGltaXQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmbGltaXQ9JHtsaW1pdH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgc2tpcChza2lwKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNraXA9JHtza2lwfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICAvLyBpbnNlcnRPbmVcbiAgYXN5bmMgaW5zZXJ0T25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVBMT0FEX0FQSV9VUkx9LyR7QVBJX1ZFUlNJT059L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhYFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWVkaWEnLCBwYXJhbXMubWVkaWEuYnVmZmVyLCBwYXJhbXMubWVkaWEub3JpZ2luYWxuYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWVkaWEnLCBwYXJhbXMubWVkaWEsIHBhcmFtcy5tZWRpYS5uYW1lKVxuICAgIH1cbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd3cml0ZV9rZXknLCBidWNrZXRfY29uZmlnLndyaXRlX2tleSlcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5mb2xkZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdmb2xkZXInLCBwYXJhbXMuZm9sZGVyKVxuICAgIH1cbiAgICBpZiAocGFyYW1zLm1ldGFkYXRhKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMubWV0YWRhdGEpKVxuICAgIH1cbiAgICBpZiAocGFyYW1zLnRyaWdnZXJfd2ViaG9vaykge1xuICAgICAgZGF0YS5hcHBlbmQoJ3RyaWdnZXJfd2ViaG9vaycsIHBhcmFtcy50cmlnZ2VyX3dlYmhvb2sudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgY29uc3QgZ2V0SGVhZGVycyA9ICgoZm9ybSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgICAgZm9ybS5nZXRMZW5ndGgoKGVyciwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycilcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1MZW5ndGgnOiBsZW5ndGgsIC4uLmZvcm0uZ2V0SGVhZGVycygpIH1cbiAgICAgICAgICByZXNvbHZlKGhlYWRlcnMpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgKVxuICAgIHJldHVybiBnZXRIZWFkZXJzKGRhdGEpXG4gICAgICAudGhlbigoaGVhZGVycykgPT4ge1xuICAgICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBkYXRhLCBoZWFkZXJzKVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLnJlc3BvbnNlLmRhdGFcbiAgICAgIH0pXG4gIH0sXG4gIC8vIERlbGV0ZVxuICBhc3luYyBkZWxldGVPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhLyR7cGFyYW1zLmlkfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YFxuICAgIGxldCBoZWFkZXJzXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpXG4gIH0sXG4gIGFzeW5jIHRoZW4oY2IpIHtcbiAgICBwcm9taXNlcih0aGlzLmVuZHBvaW50KS50aGVuKChyZXMpID0+IGNiKHJlcykpXG4gIH1cbn0pXG5cbmNvbnN0IG1lZGlhTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICBtZWRpYTogbWVkaWFDaGFpbk1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIGFkZE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUExPQURfQVBJX1VSTH0vJHtBUElfVkVSU0lPTn0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWFgXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYS5idWZmZXIsIHBhcmFtcy5tZWRpYS5vcmlnaW5hbG5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYSwgcGFyYW1zLm1lZGlhLm5hbWUpXG4gICAgfVxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KVxuICAgIH1cbiAgICBpZiAocGFyYW1zLmZvbGRlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ2ZvbGRlcicsIHBhcmFtcy5mb2xkZXIpXG4gICAgfVxuICAgIGlmIChwYXJhbXMubWV0YWRhdGEpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5tZXRhZGF0YSkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMudHJpZ2dlcl93ZWJob29rKSB7XG4gICAgICBkYXRhLmFwcGVuZCgndHJpZ2dlcl93ZWJob29rJywgcGFyYW1zLnRyaWdnZXJfd2ViaG9vay50b1N0cmluZygpKVxuICAgIH1cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKChmb3JtKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LUxlbmd0aCc6IGxlbmd0aCwgLi4uZm9ybS5nZXRIZWFkZXJzKCkgfVxuICAgICAgICAgIHJlc29sdmUoaGVhZGVycylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICApXG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiB7XG4gICAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2UuZGF0YVxuICAgICAgfSlcbiAgfSxcbiAgZ2V0TWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldFNpbmdsZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZGVsZXRlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9JHtwYXJhbXMudHJpZ2dlcl93ZWJob29rID8gJz90cmlnZ2VyX3dlYmhvb2s9dHJ1ZScgOiAnJ31gXG4gICAgbGV0IGhlYWRlcnNcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycylcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYU1ldGhvZHNcbiJdfQ==