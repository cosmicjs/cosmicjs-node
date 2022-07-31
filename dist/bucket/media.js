"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtRGF0YSIsInJlcXVpcmUiLCJVUkkiLCJVUExPQURfQVBJX1VSTCIsIkFQSV9WRVJTSU9OIiwiSFRUUF9NRVRIT0RTIiwicmVxdWVzdEhhbmRsZXIiLCJtZWRpYU1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiYWRkTWVkaWEiLCJwYXJhbXMiLCJlbmRwb2ludCIsInNsdWciLCJkYXRhIiwibWVkaWEiLCJidWZmZXIiLCJhcHBlbmQiLCJvcmlnaW5hbG5hbWUiLCJuYW1lIiwid3JpdGVfa2V5IiwiZm9sZGVyIiwibWV0YWRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SGVhZGVycyIsImZvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldExlbmd0aCIsImVyciIsImxlbmd0aCIsImhlYWRlcnMiLCJ0aGVuIiwiUE9TVCIsImVycm9yIiwicmVzcG9uc2UiLCJnZXRNZWRpYSIsInJlYWRfa2V5IiwibGltaXQiLCJza2lwIiwicXVlcnkiLCJlbmNvZGVVUkkiLCJwcm9wcyIsIkdFVCIsImdldFNpbmdsZU1lZGlhIiwiaWQiLCJkZWxldGVNZWRpYSIsIkRFTEVURSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYnVja2V0L21lZGlhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhJylcbmNvbnN0IHsgVVJJLCBVUExPQURfQVBJX1VSTCwgQVBJX1ZFUlNJT04gfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcblxuY29uc3QgbWVkaWFNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIGFkZE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUExPQURfQVBJX1VSTH0vJHtBUElfVkVSU0lPTn0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWFgXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYS5idWZmZXIsIHBhcmFtcy5tZWRpYS5vcmlnaW5hbG5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYSwgcGFyYW1zLm1lZGlhLm5hbWUpXG4gICAgfVxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KVxuICAgIH1cbiAgICBpZiAocGFyYW1zLmZvbGRlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ2ZvbGRlcicsIHBhcmFtcy5mb2xkZXIpXG4gICAgfVxuICAgIGlmIChwYXJhbXMubWV0YWRhdGEpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5tZXRhZGF0YSkpXG4gICAgfVxuICAgIGNvbnN0IGdldEhlYWRlcnMgPSAoKGZvcm0pID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICAgIGZvcm0uZ2V0TGVuZ3RoKChlcnIsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLCAuLi5mb3JtLmdldEhlYWRlcnMoKSB9XG4gICAgICAgICAgcmVzb2x2ZShoZWFkZXJzKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIClcbiAgICByZXR1cm4gZ2V0SGVhZGVycyhkYXRhKVxuICAgICAgLnRoZW4oKGhlYWRlcnMpID0+IHtcbiAgICAgICAgaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YDtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgZGF0YSwgaGVhZGVycylcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRocm93IGVycm9yLnJlc3BvbnNlLmRhdGFcbiAgICAgIH0pXG4gIH0sXG4gIGdldE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB7XG4gICAgICBlbmRwb2ludCArPSBgJmxpbWl0PSR7cGFyYW1zLmxpbWl0fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2tpcCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZza2lwPSR7cGFyYW1zLnNraXB9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5xdWVyeSkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShwYXJhbXMucXVlcnkpKX1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRTaW5nbGVNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9P3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGRlbGV0ZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhLyR7cGFyYW1zLmlkfWBcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWFNZXRob2RzXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF4Qjs7QUFDQSxlQUE2Q0EsT0FBTyxDQUFDLHNCQUFELENBQXBEO0FBQUEsSUFBUUMsR0FBUixZQUFRQSxHQUFSO0FBQUEsSUFBYUMsY0FBYixZQUFhQSxjQUFiO0FBQUEsSUFBNkJDLFdBQTdCLFlBQTZCQSxXQUE3Qjs7QUFDQSxJQUFNQyxZQUFZLEdBQUdKLE9BQU8sQ0FBQyx5QkFBRCxDQUE1Qjs7QUFDQSxnQkFBMkJBLE9BQU8sQ0FBQyw0QkFBRCxDQUFsQztBQUFBLElBQVFLLGNBQVIsYUFBUUEsY0FBUjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxhQUFEO0VBQUEsT0FBb0I7SUFDdkNDLFFBQVEsRUFBRSxrQkFBQ0MsTUFBRCxFQUFZO01BQ3BCLElBQU1DLFFBQVEsYUFBTVIsY0FBTixjQUF3QkMsV0FBeEIsc0JBQStDSSxhQUFhLENBQUNJLElBQTdELFdBQWQ7TUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBSWIsUUFBSixFQUFiOztNQUNBLElBQUlVLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxNQUFqQixFQUF5QjtRQUN2QkYsSUFBSSxDQUFDRyxNQUFMLENBQVksT0FBWixFQUFxQk4sTUFBTSxDQUFDSSxLQUFQLENBQWFDLE1BQWxDLEVBQTBDTCxNQUFNLENBQUNJLEtBQVAsQ0FBYUcsWUFBdkQ7TUFDRCxDQUZELE1BRU87UUFDTEosSUFBSSxDQUFDRyxNQUFMLENBQVksT0FBWixFQUFxQk4sTUFBTSxDQUFDSSxLQUE1QixFQUFtQ0osTUFBTSxDQUFDSSxLQUFQLENBQWFJLElBQWhEO01BQ0Q7O01BQ0QsSUFBSVYsYUFBYSxDQUFDVyxTQUFsQixFQUE2QjtRQUMzQk4sSUFBSSxDQUFDRyxNQUFMLENBQVksV0FBWixFQUF5QlIsYUFBYSxDQUFDVyxTQUF2QztNQUNEOztNQUNELElBQUlULE1BQU0sQ0FBQ1UsTUFBWCxFQUFtQjtRQUNqQlAsSUFBSSxDQUFDRyxNQUFMLENBQVksUUFBWixFQUFzQk4sTUFBTSxDQUFDVSxNQUE3QjtNQUNEOztNQUNELElBQUlWLE1BQU0sQ0FBQ1csUUFBWCxFQUFxQjtRQUNuQlIsSUFBSSxDQUFDRyxNQUFMLENBQVksVUFBWixFQUF3Qk0sSUFBSSxDQUFDQyxTQUFMLENBQWViLE1BQU0sQ0FBQ1csUUFBdEIsQ0FBeEI7TUFDRDs7TUFDRCxJQUFNRyxVQUFVLEdBQUksU0FBZEEsVUFBYyxDQUFDQyxJQUFEO1FBQUEsT0FBVSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO1VBQzdELElBQUlsQixNQUFNLENBQUNJLEtBQVAsQ0FBYUMsTUFBakIsRUFBeUI7WUFDdkJVLElBQUksQ0FBQ0ksU0FBTCxDQUFlLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtjQUM5QixJQUFJRCxHQUFKLEVBQVNGLE1BQU0sQ0FBQ0UsR0FBRCxDQUFOOztjQUNULElBQU1FLE9BQU87Z0JBQUssa0JBQWtCRDtjQUF2QixHQUFrQ04sSUFBSSxDQUFDRCxVQUFMLEVBQWxDLENBQWI7O2NBQ0FHLE9BQU8sQ0FBQ0ssT0FBRCxDQUFQO1lBQ0QsQ0FKRDtVQUtELENBTkQsTUFNTztZQUNMTCxPQUFPLENBQUM7Y0FBRSxnQkFBZ0I7WUFBbEIsQ0FBRCxDQUFQO1VBQ0Q7UUFDRixDQVY2QixDQUFWO01BQUEsQ0FBcEI7O01BWUEsT0FBT0gsVUFBVSxDQUFDWCxJQUFELENBQVYsQ0FDSm9CLElBREksQ0FDQyxVQUFDRCxPQUFELEVBQWE7UUFDakJBLE9BQU8sQ0FBQyxlQUFELENBQVAsb0JBQXFDeEIsYUFBYSxDQUFDVyxTQUFuRDtRQUNBLE9BQU9iLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDNkIsSUFBZCxFQUFvQnZCLFFBQXBCLEVBQThCRSxJQUE5QixFQUFvQ21CLE9BQXBDLENBQXJCO01BQ0QsQ0FKSSxXQUlJLFVBQUNHLEtBQUQsRUFBVztRQUNoQixNQUFNQSxLQUFLLENBQUNDLFFBQU4sQ0FBZXZCLElBQXJCO01BQ0gsQ0FOSSxDQUFQO0lBT0QsQ0FyQ3NDO0lBc0N2Q3dCLFFBQVEsRUFBRSxrQkFBQzNCLE1BQUQsRUFBWTtNQUNwQixJQUFJQyxRQUFRLGFBQU1ULEdBQU4sc0JBQXFCTSxhQUFhLENBQUNJLElBQW5DLDZCQUEwREosYUFBYSxDQUFDOEIsUUFBeEUsQ0FBWjs7TUFDQSxJQUFJNUIsTUFBTSxJQUFJQSxNQUFNLENBQUM2QixLQUFyQixFQUE0QjtRQUMxQjVCLFFBQVEscUJBQWNELE1BQU0sQ0FBQzZCLEtBQXJCLENBQVI7TUFDRDs7TUFDRCxJQUFJN0IsTUFBTSxJQUFJQSxNQUFNLENBQUM4QixJQUFyQixFQUEyQjtRQUN6QjdCLFFBQVEsb0JBQWFELE1BQU0sQ0FBQzhCLElBQXBCLENBQVI7TUFDRDs7TUFDRCxJQUFJOUIsTUFBTSxJQUFJQSxNQUFNLENBQUMrQixLQUFyQixFQUE0QjtRQUMxQjlCLFFBQVEscUJBQWMrQixTQUFTLENBQUNwQixJQUFJLENBQUNDLFNBQUwsQ0FBZWIsTUFBTSxDQUFDK0IsS0FBdEIsQ0FBRCxDQUF2QixDQUFSO01BQ0Q7O01BQ0QsSUFBSS9CLE1BQU0sSUFBSUEsTUFBTSxDQUFDaUMsS0FBckIsRUFBNEI7UUFDMUJoQyxRQUFRLHFCQUFjRCxNQUFNLENBQUNpQyxLQUFyQixDQUFSO01BQ0Q7O01BQ0QsT0FBT3JDLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDdUMsR0FBZCxFQUFtQmpDLFFBQW5CLENBQXJCO0lBQ0QsQ0FyRHNDO0lBc0R2Q2tDLGNBQWMsRUFBRSx3QkFBQ25DLE1BQUQsRUFBWTtNQUMxQixJQUFJQyxRQUFRLGFBQU1ULEdBQU4sc0JBQXFCTSxhQUFhLENBQUNJLElBQW5DLG9CQUFpREYsTUFBTSxDQUFDb0MsRUFBeEQsdUJBQXVFdEMsYUFBYSxDQUFDOEIsUUFBckYsQ0FBWjs7TUFDQSxJQUFJNUIsTUFBTSxJQUFJQSxNQUFNLENBQUNpQyxLQUFyQixFQUE0QjtRQUMxQmhDLFFBQVEscUJBQWNELE1BQU0sQ0FBQ2lDLEtBQXJCLENBQVI7TUFDRDs7TUFDRCxPQUFPckMsY0FBYyxDQUFDRCxZQUFZLENBQUN1QyxHQUFkLEVBQW1CakMsUUFBbkIsQ0FBckI7SUFDRCxDQTVEc0M7SUE2RHZDb0MsV0FBVyxFQUFFLHFCQUFDckMsTUFBRCxFQUFZO01BQ3ZCLElBQU1DLFFBQVEsYUFBTVQsR0FBTixzQkFBcUJNLGFBQWEsQ0FBQ0ksSUFBbkMsb0JBQWlERixNQUFNLENBQUNvQyxFQUF4RCxDQUFkO01BQ0EsSUFBSWQsT0FBSjs7TUFDQSxJQUFJeEIsYUFBYSxDQUFDVyxTQUFsQixFQUE2QjtRQUMzQmEsT0FBTyxHQUFHO1VBQ1Isa0NBQTJCeEIsYUFBYSxDQUFDVyxTQUF6QztRQURRLENBQVY7TUFHRDs7TUFDRCxPQUFPYixjQUFjLENBQUNELFlBQVksQ0FBQzJDLE1BQWQsRUFBc0JyQyxRQUF0QixFQUFnQyxJQUFoQyxFQUFzQ3FCLE9BQXRDLENBQXJCO0lBQ0Q7RUF0RXNDLENBQXBCO0FBQUEsQ0FBckI7O0FBeUVBaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCM0MsWUFBakIifQ==