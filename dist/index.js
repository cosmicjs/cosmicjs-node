"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _require = require('./helpers/requestHandler'),
  init = _require.init;
var mainMethods = require('./utils/main');
var bucketMethods = require('./utils/bucket');

/**
 * The main Cosmic class.
 * @param _config - The configuration object.
 * @returns None
 */
var Cosmic = function Cosmic(_config) {
  var config = _objectSpread({
    apiUrl: 'https://api.cosmicjs.com',
    version: 'v3'
  }, _config);
  // Initialization
  init(config);
  // Combine methods
  var methods = {
    bucket: bucketMethods(config)
  };

  // @returns An object containing all of the methods for the module.
  return Object.assign(mainMethods(config), methods);
};
module.exports = Cosmic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5pdCIsIm1haW5NZXRob2RzIiwiYnVja2V0TWV0aG9kcyIsIkNvc21pYyIsIl9jb25maWciLCJjb25maWciLCJhcGlVcmwiLCJ2ZXJzaW9uIiwibWV0aG9kcyIsImJ1Y2tldCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpbml0IH0gPSByZXF1aXJlKCcuL2hlbHBlcnMvcmVxdWVzdEhhbmRsZXInKTtcbmNvbnN0IG1haW5NZXRob2RzID0gcmVxdWlyZSgnLi91dGlscy9tYWluJyk7XG5jb25zdCBidWNrZXRNZXRob2RzID0gcmVxdWlyZSgnLi91dGlscy9idWNrZXQnKTtcblxuLyoqXG4gKiBUaGUgbWFpbiBDb3NtaWMgY2xhc3MuXG4gKiBAcGFyYW0gX2NvbmZpZyAtIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIE5vbmVcbiAqL1xuY29uc3QgQ29zbWljID0gKF9jb25maWcpID0+IHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaVVybDogJ2h0dHBzOi8vYXBpLmNvc21pY2pzLmNvbScsXG4gICAgdmVyc2lvbjogJ3YzJyxcbiAgICAuLi5fY29uZmlnLFxuICB9O1xuICAvLyBJbml0aWFsaXphdGlvblxuICBpbml0KGNvbmZpZyk7XG4gIC8vIENvbWJpbmUgbWV0aG9kc1xuICBjb25zdCBtZXRob2RzID0ge1xuICAgIGJ1Y2tldDogYnVja2V0TWV0aG9kcyhjb25maWcpLFxuICB9O1xuXG4gIC8vIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgbWV0aG9kcyBmb3IgdGhlIG1vZHVsZS5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obWFpbk1ldGhvZHMoY29uZmlnKSwgbWV0aG9kcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvc21pYztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxlQUFpQkEsT0FBTyxDQUFDLDBCQUEwQixDQUFDO0VBQTVDQyxJQUFJLFlBQUpBLElBQUk7QUFDWixJQUFNQyxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxjQUFjLENBQUM7QUFDM0MsSUFBTUcsYUFBYSxHQUFHSCxPQUFPLENBQUMsZ0JBQWdCLENBQUM7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBTSxDQUFJQyxPQUFPLEVBQUs7RUFDMUIsSUFBTUMsTUFBTTtJQUNWQyxNQUFNLEVBQUUsMEJBQTBCO0lBQ2xDQyxPQUFPLEVBQUU7RUFBSSxHQUNWSCxPQUFPLENBQ1g7RUFDRDtFQUNBSixJQUFJLENBQUNLLE1BQU0sQ0FBQztFQUNaO0VBQ0EsSUFBTUcsT0FBTyxHQUFHO0lBQ2RDLE1BQU0sRUFBRVAsYUFBYSxDQUFDRyxNQUFNO0VBQzlCLENBQUM7O0VBRUQ7RUFDQSxPQUFPSyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1YsV0FBVyxDQUFDSSxNQUFNLENBQUMsRUFBRUcsT0FBTyxDQUFDO0FBQ3BELENBQUM7QUFFREksTUFBTSxDQUFDQyxPQUFPLEdBQUdWLE1BQU0ifQ==