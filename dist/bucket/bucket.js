"use strict";

var _require = require('../helpers/constants'),
    URI = _require.URI;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var bucketMethods = function bucketMethods(bucket_config) {
  return {
    getBucket: function getBucket(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/?read_key=").concat(bucket_config.read_key);

      if (params && params.show_options) {
        endpoint += "&show_options=".concat(params.show_options);
      }

      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }

      if (params && typeof params.depth !== 'undefined') {
        endpoint += "&depth=".concat(params.depth);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    }
  };
};

module.exports = bucketMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvYnVja2V0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsImJ1Y2tldE1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZ2V0QnVja2V0IiwicGFyYW1zIiwiZW5kcG9pbnQiLCJzbHVnIiwicmVhZF9rZXkiLCJzaG93X29wdGlvbnMiLCJwcm9wcyIsImRlcHRoIiwiR0VUIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7ZUFBZ0JBLE9BQU8sQ0FBQyxzQkFBRCxDO0lBQWZDLEcsWUFBQUEsRzs7QUFDUixJQUFNQyxZQUFZLEdBQUdGLE9BQU8sQ0FBQyx5QkFBRCxDQUE1Qjs7Z0JBQzJCQSxPQUFPLENBQUMsNEJBQUQsQztJQUExQkcsYyxhQUFBQSxjOztBQUVSLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsYUFBRDtBQUFBLFNBQW9CO0FBQ3hDQyxJQUFBQSxTQUFTLEVBQUUsbUJBQUNDLE1BQUQsRUFBWTtBQUNyQixVQUFJQyxRQUFRLGFBQU1QLEdBQU4sc0JBQXFCSSxhQUFhLENBQUNJLElBQW5DLHdCQUFxREosYUFBYSxDQUFDSyxRQUFuRSxDQUFaOztBQUNBLFVBQUlILE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxZQUFyQixFQUFtQztBQUNqQ0gsUUFBQUEsUUFBUSw0QkFBcUJELE1BQU0sQ0FBQ0ksWUFBNUIsQ0FBUjtBQUNEOztBQUNELFVBQUlKLE1BQU0sSUFBSUEsTUFBTSxDQUFDSyxLQUFyQixFQUE0QjtBQUMxQkosUUFBQUEsUUFBUSxxQkFBY0QsTUFBTSxDQUFDSyxLQUFyQixDQUFSO0FBQ0Q7O0FBQ0QsVUFBSUwsTUFBTSxJQUFJLE9BQU9BLE1BQU0sQ0FBQ00sS0FBZCxLQUF3QixXQUF0QyxFQUFtRDtBQUNqREwsUUFBQUEsUUFBUSxxQkFBY0QsTUFBTSxDQUFDTSxLQUFyQixDQUFSO0FBQ0Q7O0FBQ0QsYUFBT1YsY0FBYyxDQUFDRCxZQUFZLENBQUNZLEdBQWQsRUFBbUJOLFFBQW5CLENBQXJCO0FBQ0Q7QUFidUMsR0FBcEI7QUFBQSxDQUF0Qjs7QUFnQkFPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlosYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFVSSSB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuXG5jb25zdCBidWNrZXRNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIGdldEJ1Y2tldDogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2hvd19vcHRpb25zKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNob3dfb3B0aW9ucz0ke3BhcmFtcy5zaG93X29wdGlvbnN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy5kZXB0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmZGVwdGg9JHtwYXJhbXMuZGVwdGh9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gYnVja2V0TWV0aG9kc1xuIl19