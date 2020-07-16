"use strict";

var _require = require('../helpers/constants'),
    URI = _require.URI;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var bucketMethods = function bucketMethods(bucket_config) {
  return {
    getBucket: function getBucket(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/?read_key=").concat(bucket_config.read_key);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvYnVja2V0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsImJ1Y2tldE1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZ2V0QnVja2V0IiwicGFyYW1zIiwiZW5kcG9pbnQiLCJzbHVnIiwicmVhZF9rZXkiLCJzaG93X29wdGlvbnMiLCJwcm9wcyIsImRlcHRoIiwiR0VUIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7ZUFBZ0JBLE9BQU8sQ0FBQyxzQkFBRCxDO0lBQWZDLEcsWUFBQUEsRzs7QUFDUixJQUFNQyxZQUFZLEdBQUdGLE9BQU8sQ0FBQyx5QkFBRCxDQUE1Qjs7Z0JBQzJCQSxPQUFPLENBQUMsNEJBQUQsQztJQUExQkcsYyxhQUFBQSxjOztBQUVSLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsYUFBRDtBQUFBLFNBQW9CO0FBQ3hDQyxJQUFBQSxTQUFTLEVBQUUsbUJBQUNDLE1BQUQsRUFBWTtBQUNyQixVQUFJQyxRQUFRLGFBQU1QLEdBQU4sY0FBYUksYUFBYSxDQUFDSSxJQUEzQix3QkFBNkNKLGFBQWEsQ0FBQ0ssUUFBM0QsQ0FBWjs7QUFDQSxVQUFJSCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0ksWUFBckIsRUFBbUM7QUFDakNILFFBQUFBLFFBQVEsNEJBQXFCRCxNQUFNLENBQUNJLFlBQTVCLENBQVI7QUFDRDs7QUFDRCxVQUFJSixNQUFNLElBQUlBLE1BQU0sQ0FBQ0ssS0FBckIsRUFBNEI7QUFDMUJKLFFBQUFBLFFBQVEscUJBQWNELE1BQU0sQ0FBQ0ssS0FBckIsQ0FBUjtBQUNEOztBQUNELFVBQUlMLE1BQU0sSUFBSSxPQUFPQSxNQUFNLENBQUNNLEtBQWQsS0FBd0IsV0FBdEMsRUFBbUQ7QUFDakRMLFFBQUFBLFFBQVEscUJBQWNELE1BQU0sQ0FBQ00sS0FBckIsQ0FBUjtBQUNEOztBQUNELGFBQU9WLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDWSxHQUFkLEVBQW1CTixRQUFuQixDQUFyQjtBQUNEO0FBYnVDLEdBQXBCO0FBQUEsQ0FBdEI7O0FBZ0JBTyxNQUFNLENBQUNDLE9BQVAsR0FBaUJaLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBVUkkgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcblxuY29uc3QgYnVja2V0TWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICBnZXRCdWNrZXQ6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS8/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5zaG93X29wdGlvbnMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2hvd19vcHRpb25zPSR7cGFyYW1zLnNob3dfb3B0aW9uc31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLmRlcHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZkZXB0aD0ke3BhcmFtcy5kZXB0aH1gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBidWNrZXRNZXRob2RzXG4iXX0=