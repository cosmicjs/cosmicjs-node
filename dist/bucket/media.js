"use strict";

require("regenerator-runtime/runtime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvbWVkaWEuanMiXSwibmFtZXMiOlsiRm9ybURhdGEiLCJyZXF1aXJlIiwiVVJJIiwiVVBMT0FEX0FQSV9VUkwiLCJBUElfVkVSU0lPTiIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwibWVkaWFDaGFpbk1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZmluZCIsInF1ZXJ5IiwiZW5kcG9pbnQiLCJzbHVnIiwicmVhZF9rZXkiLCJlbmNvZGVVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVsZXRlT25lIiwicGFyYW1zIiwiaWQiLCJ0cmlnZ2VyX3dlYmhvb2siLCJ3cml0ZV9rZXkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkRFTEVURSIsInByb3BzIiwic29ydCIsImxpbWl0Iiwic2tpcCIsInRoZW4iLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlcyIsIkdFVCIsIm1lZGlhTWV0aG9kcyIsIm1lZGlhIiwiYWRkTWVkaWEiLCJkYXRhIiwiYnVmZmVyIiwiYXBwZW5kIiwib3JpZ2luYWxuYW1lIiwibmFtZSIsImZvbGRlciIsIm1ldGFkYXRhIiwidG9TdHJpbmciLCJnZXRIZWFkZXJzIiwiZm9ybSIsInJlamVjdCIsImdldExlbmd0aCIsImVyciIsImxlbmd0aCIsIlBPU1QiLCJlcnJvciIsInJlc3BvbnNlIiwiZ2V0TWVkaWEiLCJnZXRTaW5nbGVNZWRpYSIsImRlbGV0ZU1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF4Qjs7ZUFDNkNBLE9BQU8sQ0FBQyxzQkFBRCxDO0lBQTVDQyxHLFlBQUFBLEc7SUFBS0MsYyxZQUFBQSxjO0lBQWdCQyxXLFlBQUFBLFc7O0FBQzdCLElBQU1DLFlBQVksR0FBR0osT0FBTyxDQUFDLHlCQUFELENBQTVCOztnQkFDMkJBLE9BQU8sQ0FBQyw0QkFBRCxDO0lBQTFCSyxjLGFBQUFBLGM7O0FBRVIsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxhQUFEO0FBQUEsU0FBb0I7QUFDNUM7QUFDQUMsSUFBQUEsSUFGNEMsZ0JBRXZDQyxLQUZ1QyxFQUVoQztBQUNWLFdBQUtDLFFBQUwsYUFBbUJULEdBQW5CLHNCQUFrQ00sYUFBYSxDQUFDSSxJQUFoRCw2QkFBdUVKLGFBQWEsQ0FBQ0ssUUFBckYsU0FBZ0dILEtBQUssb0JBQWFJLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVOLEtBQWYsQ0FBRCxDQUF0QixJQUFrRCxFQUF2SjtBQUNBLGFBQU8sSUFBUDtBQUNELEtBTDJDO0FBTTVDO0FBQ01PLElBQUFBLFNBUHNDLHFCQU81QkMsTUFQNEIsRUFPcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJQLGdCQUFBQSxRQURnQixhQUNGVCxHQURFLHNCQUNhTSxhQUFhLENBQUNJLElBRDNCLHNCQUMyQ00sTUFBTSxDQUFDQyxFQURsRCxTQUN1REQsTUFBTSxDQUFDRSxlQUFQLEdBQXlCLHVCQUF6QixHQUFtRCxFQUQxRzs7QUFFdEIsb0JBQUlaLGFBQWEsQ0FBQ2EsU0FBbEIsRUFBNkI7QUFDM0JDLGtCQUFBQSxPQUFPLEdBQUc7QUFDUkMsb0JBQUFBLGFBQWEsbUJBQVlmLGFBQWEsQ0FBQ2EsU0FBMUI7QUFETCxtQkFBVjtBQUdEOztBQU5xQixpREFPZmYsY0FBYyxDQUFDRCxZQUFZLENBQUNtQixNQUFkLEVBQXNCYixRQUF0QixFQUFnQyxJQUFoQyxFQUFzQ1csT0FBdEMsQ0FQQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVF2QixLQWYyQztBQWdCNUNHLElBQUFBLEtBaEI0QyxpQkFnQnRDQSxNQWhCc0MsRUFnQi9CO0FBQ1gsV0FBS2QsUUFBTCxxQkFBMkJjLE1BQTNCO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0FuQjJDO0FBb0I1Q0MsSUFBQUEsSUFwQjRDLGdCQW9CdkNBLEtBcEJ1QyxFQW9CakM7QUFDVCxXQUFLZixRQUFMLG9CQUEwQmUsS0FBMUI7QUFDQSxhQUFPLElBQVA7QUFDRCxLQXZCMkM7QUF3QjVDQyxJQUFBQSxLQXhCNEMsaUJBd0J0Q0EsTUF4QnNDLEVBd0IvQjtBQUNYLFdBQUtoQixRQUFMLHFCQUEyQmdCLE1BQTNCO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0EzQjJDO0FBNEI1Q0MsSUFBQUEsSUE1QjRDLGdCQTRCdkNBLEtBNUJ1QyxFQTRCakM7QUFDVCxXQUFLakIsUUFBTCxvQkFBMEJpQixLQUExQjtBQUNBLGFBQU8sSUFBUDtBQUNELEtBL0IyQztBQWdDdENDLElBQUFBLElBaENzQyxnQkFnQ2pDQyxPQWhDaUMsRUFnQ3hCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQkEsZ0JBQUFBLE9BQU8sQ0FDTCxJQUFJQyxPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFTO0FBQ25CQSxrQkFBQUEsR0FBRyxDQUFDMUIsY0FBYyxDQUFDRCxZQUFZLENBQUM0QixHQUFkLEVBQW1CLEtBQUksQ0FBQ3RCLFFBQXhCLENBQWYsQ0FBSDtBQUNELGlCQUZELENBREssQ0FBUDs7QUFEa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNbkI7QUF0QzJDLEdBQXBCO0FBQUEsQ0FBMUI7O0FBeUNBLElBQU11QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDMUIsYUFBRDtBQUFBLFNBQW9CO0FBQ3ZDMkIsSUFBQUEsS0FBSyxFQUFFNUIsaUJBQWlCLENBQUNDLGFBQUQsQ0FEZTtBQUV2QzRCLElBQUFBLFFBQVEsRUFBRSxrQkFBQ2xCLE1BQUQsRUFBWTtBQUNwQixVQUFNUCxRQUFRLGFBQU1SLGNBQU4sY0FBd0JDLFdBQXhCLHNCQUErQ0ksYUFBYSxDQUFDSSxJQUE3RCxXQUFkO0FBQ0EsVUFBTXlCLElBQUksR0FBRyxJQUFJckMsUUFBSixFQUFiOztBQUNBLFVBQUlrQixNQUFNLENBQUNpQixLQUFQLENBQWFHLE1BQWpCLEVBQXlCO0FBQ3ZCRCxRQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxPQUFaLEVBQXFCckIsTUFBTSxDQUFDaUIsS0FBUCxDQUFhRyxNQUFsQyxFQUEwQ3BCLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUssWUFBdkQ7QUFDRCxPQUZELE1BRU87QUFDTEgsUUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVksT0FBWixFQUFxQnJCLE1BQU0sQ0FBQ2lCLEtBQTVCLEVBQW1DakIsTUFBTSxDQUFDaUIsS0FBUCxDQUFhTSxJQUFoRDtBQUNEOztBQUNELFVBQUlqQyxhQUFhLENBQUNhLFNBQWxCLEVBQTZCO0FBQzNCZ0IsUUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVksV0FBWixFQUF5Qi9CLGFBQWEsQ0FBQ2EsU0FBdkM7QUFDRDs7QUFDRCxVQUFJSCxNQUFNLENBQUN3QixNQUFYLEVBQW1CO0FBQ2pCTCxRQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxRQUFaLEVBQXNCckIsTUFBTSxDQUFDd0IsTUFBN0I7QUFDRDs7QUFDRCxVQUFJeEIsTUFBTSxDQUFDeUIsUUFBWCxFQUFxQjtBQUNuQk4sUUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVksVUFBWixFQUF3QnhCLElBQUksQ0FBQ0MsU0FBTCxDQUFlRSxNQUFNLENBQUN5QixRQUF0QixDQUF4QjtBQUNEOztBQUNELFVBQUl6QixNQUFNLENBQUNFLGVBQVgsRUFBNEI7QUFDMUJpQixRQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxpQkFBWixFQUErQnJCLE1BQU0sQ0FBQ0UsZUFBUCxDQUF1QndCLFFBQXZCLEVBQS9CO0FBQ0Q7O0FBQ0QsVUFBTUMsVUFBVSxHQUFJLFNBQWRBLFVBQWMsQ0FBQ0MsSUFBRDtBQUFBLGVBQVUsSUFBSWYsT0FBSixDQUFZLFVBQUNELE9BQUQsRUFBVWlCLE1BQVYsRUFBcUI7QUFDN0QsY0FBSTdCLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUcsTUFBakIsRUFBeUI7QUFDdkJRLFlBQUFBLElBQUksQ0FBQ0UsU0FBTCxDQUFlLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUM5QixrQkFBSUQsR0FBSixFQUFTRixNQUFNLENBQUNFLEdBQUQsQ0FBTjs7QUFDVCxrQkFBTTNCLE9BQU87QUFBSyxrQ0FBa0I0QjtBQUF2QixpQkFBa0NKLElBQUksQ0FBQ0QsVUFBTCxFQUFsQyxDQUFiOztBQUNBZixjQUFBQSxPQUFPLENBQUNSLE9BQUQsQ0FBUDtBQUNELGFBSkQ7QUFLRCxXQU5ELE1BTU87QUFDTFEsWUFBQUEsT0FBTyxDQUFDO0FBQUUsOEJBQWdCO0FBQWxCLGFBQUQsQ0FBUDtBQUNEO0FBQ0YsU0FWNkIsQ0FBVjtBQUFBLE9BQXBCOztBQVlBLGFBQU9lLFVBQVUsQ0FBQ1IsSUFBRCxDQUFWLENBQ0pSLElBREksQ0FDQyxVQUFDUCxPQUFELEVBQWE7QUFDakJBLFFBQUFBLE9BQU8sQ0FBQ0MsYUFBUixvQkFBa0NmLGFBQWEsQ0FBQ2EsU0FBaEQ7QUFDQSxlQUFPZixjQUFjLENBQUNELFlBQVksQ0FBQzhDLElBQWQsRUFBb0J4QyxRQUFwQixFQUE4QjBCLElBQTlCLEVBQW9DZixPQUFwQyxDQUFyQjtBQUNELE9BSkksV0FJSSxVQUFDOEIsS0FBRCxFQUFXO0FBQ2xCLGNBQU1BLEtBQUssQ0FBQ0MsUUFBTixDQUFlaEIsSUFBckI7QUFDRCxPQU5JLENBQVA7QUFPRCxLQXpDc0M7QUEwQ3ZDaUIsSUFBQUEsUUFBUSxFQUFFLGtCQUFDcEMsTUFBRCxFQUFZO0FBQ3BCLFVBQUlQLFFBQVEsYUFBTVQsR0FBTixzQkFBcUJNLGFBQWEsQ0FBQ0ksSUFBbkMsNkJBQTBESixhQUFhLENBQUNLLFFBQXhFLENBQVo7O0FBQ0EsVUFBSUssTUFBTSxJQUFJQSxNQUFNLENBQUNTLEtBQXJCLEVBQTRCO0FBQzFCaEIsUUFBQUEsUUFBUSxxQkFBY08sTUFBTSxDQUFDUyxLQUFyQixDQUFSO0FBQ0Q7O0FBQ0QsVUFBSVQsTUFBTSxJQUFJQSxNQUFNLENBQUNVLElBQXJCLEVBQTJCO0FBQ3pCakIsUUFBQUEsUUFBUSxvQkFBYU8sTUFBTSxDQUFDVSxJQUFwQixDQUFSO0FBQ0Q7O0FBQ0QsVUFBSVYsTUFBTSxJQUFJQSxNQUFNLENBQUNSLEtBQXJCLEVBQTRCO0FBQzFCQyxRQUFBQSxRQUFRLHFCQUFjRyxTQUFTLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRSxNQUFNLENBQUNSLEtBQXRCLENBQUQsQ0FBdkIsQ0FBUjtBQUNEOztBQUNELFVBQUlRLE1BQU0sSUFBSUEsTUFBTSxDQUFDTyxLQUFyQixFQUE0QjtBQUMxQmQsUUFBQUEsUUFBUSxxQkFBY08sTUFBTSxDQUFDTyxLQUFyQixDQUFSO0FBQ0Q7O0FBQ0QsYUFBT25CLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDNEIsR0FBZCxFQUFtQnRCLFFBQW5CLENBQXJCO0FBQ0QsS0F6RHNDO0FBMER2QzRDLElBQUFBLGNBQWMsRUFBRSx3QkFBQ3JDLE1BQUQsRUFBWTtBQUMxQixVQUFJUCxRQUFRLGFBQU1ULEdBQU4sc0JBQXFCTSxhQUFhLENBQUNJLElBQW5DLG9CQUFpRE0sTUFBTSxDQUFDQyxFQUF4RCx1QkFBdUVYLGFBQWEsQ0FBQ0ssUUFBckYsQ0FBWjs7QUFDQSxVQUFJSyxNQUFNLElBQUlBLE1BQU0sQ0FBQ08sS0FBckIsRUFBNEI7QUFDMUJkLFFBQUFBLFFBQVEscUJBQWNPLE1BQU0sQ0FBQ08sS0FBckIsQ0FBUjtBQUNEOztBQUNELGFBQU9uQixjQUFjLENBQUNELFlBQVksQ0FBQzRCLEdBQWQsRUFBbUJ0QixRQUFuQixDQUFyQjtBQUNELEtBaEVzQztBQWlFdkM2QyxJQUFBQSxXQUFXLEVBQUUscUJBQUN0QyxNQUFELEVBQVk7QUFDdkIsVUFBTVAsUUFBUSxhQUFNVCxHQUFOLHNCQUFxQk0sYUFBYSxDQUFDSSxJQUFuQyxvQkFBaURNLE1BQU0sQ0FBQ0MsRUFBeEQsU0FBNkRELE1BQU0sQ0FBQ0UsZUFBUCxHQUF5Qix1QkFBekIsR0FBbUQsRUFBaEgsQ0FBZDtBQUNBLFVBQUlFLE9BQUo7O0FBQ0EsVUFBSWQsYUFBYSxDQUFDYSxTQUFsQixFQUE2QjtBQUMzQkMsUUFBQUEsT0FBTyxHQUFHO0FBQ1JDLFVBQUFBLGFBQWEsbUJBQVlmLGFBQWEsQ0FBQ2EsU0FBMUI7QUFETCxTQUFWO0FBR0Q7O0FBQ0QsYUFBT2YsY0FBYyxDQUFDRCxZQUFZLENBQUNtQixNQUFkLEVBQXNCYixRQUF0QixFQUFnQyxJQUFoQyxFQUFzQ1csT0FBdEMsQ0FBckI7QUFDRDtBQTFFc0MsR0FBcEI7QUFBQSxDQUFyQjs7QUE2RUFtQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJ1xuXG5jb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YScpXG5jb25zdCB7IFVSSSwgVVBMT0FEX0FQSV9VUkwsIEFQSV9WRVJTSU9OIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbnN0YW50cycpXG5jb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2h0dHBfbWV0aG9kcycpXG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RfaGFuZGxlcicpXG5cbmNvbnN0IG1lZGlhQ2hhaW5NZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIC8vIEdldFxuICBmaW5kKHF1ZXJ5KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fSR7cXVlcnkgPyBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSl9YCA6ICcnfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICAvLyBEZWxldGVcbiAgYXN5bmMgZGVsZXRlT25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9LFxuICBwcm9wcyhwcm9wcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBzb3J0KHNvcnQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc29ydD0ke3NvcnR9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGxpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmxpbWl0PSR7bGltaXR9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHNraXAoc2tpcCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZza2lwPSR7c2tpcH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgYXN5bmMgdGhlbihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZShcbiAgICAgIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgcmVzKHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIHRoaXMuZW5kcG9pbnQpKVxuICAgICAgfSlcbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IG1lZGlhTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICBtZWRpYTogbWVkaWFDaGFpbk1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIGFkZE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUExPQURfQVBJX1VSTH0vJHtBUElfVkVSU0lPTn0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWFgXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYS5idWZmZXIsIHBhcmFtcy5tZWRpYS5vcmlnaW5hbG5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYSwgcGFyYW1zLm1lZGlhLm5hbWUpXG4gICAgfVxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KVxuICAgIH1cbiAgICBpZiAocGFyYW1zLmZvbGRlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ2ZvbGRlcicsIHBhcmFtcy5mb2xkZXIpXG4gICAgfVxuICAgIGlmIChwYXJhbXMubWV0YWRhdGEpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5tZXRhZGF0YSkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMudHJpZ2dlcl93ZWJob29rKSB7XG4gICAgICBkYXRhLmFwcGVuZCgndHJpZ2dlcl93ZWJob29rJywgcGFyYW1zLnRyaWdnZXJfd2ViaG9vay50b1N0cmluZygpKVxuICAgIH1cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKChmb3JtKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LUxlbmd0aCc6IGxlbmd0aCwgLi4uZm9ybS5nZXRIZWFkZXJzKCkgfVxuICAgICAgICAgIHJlc29sdmUoaGVhZGVycylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICApXG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiB7XG4gICAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2UuZGF0YVxuICAgICAgfSlcbiAgfSxcbiAgZ2V0TWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldFNpbmdsZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZGVsZXRlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9JHtwYXJhbXMudHJpZ2dlcl93ZWJob29rID8gJz90cmlnZ2VyX3dlYmhvb2s9dHJ1ZScgOiAnJ31gXG4gICAgbGV0IGhlYWRlcnNcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycylcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYU1ldGhvZHNcbiJdfQ==