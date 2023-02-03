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
var _require2 = require('./constants/env.constants'),
  apiConfigs = _require2.apiConfigs;

/**
 * The main Cosmic class.
 * @param _config - The configuration object.
 * @returns None
 */
var Cosmic = function Cosmic(_config) {
  var config = _objectSpread({
    apiVersion: 'v3',
    apiEnvironment: 'production'
  }, _config);
  var apiConfig = {};

  // Config validation
  if (config.custom) {
    if (!config.custom.apiUrl || !config.custom.uploadUrl) {
      throw new Error("apiUrl or uploadUrl is missing from 'custom' option");
    }
    apiConfig = {
      apiUrl: config.custom.apiUrl,
      uploadUrl: config.custom.uploadUrl
    };
  } else {
    if (!['v1', 'v2', 'v3'].includes(config.apiVersion)) {
      throw new Error("apiVersion value can only be from 'v1', 'v2' & 'v3'");
    }
    if (!['production', 'staging'].includes(config.apiEnvironment)) {
      throw new Error("apiEnvironment value can only be from 'production' & 'staging'");
    }
    apiConfig = apiConfigs[config.apiEnvironment][config.apiVersion];
  }
  // Initialization
  init(config);
  // Combine methods
  var methods = {
    bucket: bucketMethods(apiConfig)
  };

  // @returns An object containing all of the methods for the module.
  return Object.assign(mainMethods(apiConfig), methods);
};
module.exports = Cosmic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5pdCIsIm1haW5NZXRob2RzIiwiYnVja2V0TWV0aG9kcyIsImFwaUNvbmZpZ3MiLCJDb3NtaWMiLCJfY29uZmlnIiwiY29uZmlnIiwiYXBpVmVyc2lvbiIsImFwaUVudmlyb25tZW50IiwiYXBpQ29uZmlnIiwiY3VzdG9tIiwiYXBpVXJsIiwidXBsb2FkVXJsIiwiRXJyb3IiLCJpbmNsdWRlcyIsIm1ldGhvZHMiLCJidWNrZXQiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgaW5pdCB9ID0gcmVxdWlyZSgnLi9oZWxwZXJzL3JlcXVlc3RIYW5kbGVyJyk7XG5jb25zdCBtYWluTWV0aG9kcyA9IHJlcXVpcmUoJy4vdXRpbHMvbWFpbicpO1xuY29uc3QgYnVja2V0TWV0aG9kcyA9IHJlcXVpcmUoJy4vdXRpbHMvYnVja2V0Jyk7XG5jb25zdCB7IGFwaUNvbmZpZ3MgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzL2Vudi5jb25zdGFudHMnKTtcblxuLyoqXG4gKiBUaGUgbWFpbiBDb3NtaWMgY2xhc3MuXG4gKiBAcGFyYW0gX2NvbmZpZyAtIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIE5vbmVcbiAqL1xuY29uc3QgQ29zbWljID0gKF9jb25maWcpID0+IHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaVZlcnNpb246ICd2MycsXG4gICAgYXBpRW52aXJvbm1lbnQ6ICdwcm9kdWN0aW9uJyxcbiAgICAuLi5fY29uZmlnLFxuICB9O1xuXG4gIGxldCBhcGlDb25maWcgPSB7fTtcblxuICAvLyBDb25maWcgdmFsaWRhdGlvblxuICBpZiAoY29uZmlnLmN1c3RvbSkge1xuICAgIGlmICghY29uZmlnLmN1c3RvbS5hcGlVcmwgfHwgIWNvbmZpZy5jdXN0b20udXBsb2FkVXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGFwaVVybCBvciB1cGxvYWRVcmwgaXMgbWlzc2luZyBmcm9tICdjdXN0b20nIG9wdGlvbmApO1xuICAgIH1cbiAgICBhcGlDb25maWcgPSB7XG4gICAgICBhcGlVcmw6IGNvbmZpZy5jdXN0b20uYXBpVXJsLFxuICAgICAgdXBsb2FkVXJsOiBjb25maWcuY3VzdG9tLnVwbG9hZFVybCxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGlmICghWyd2MScsICd2MicsICd2MyddLmluY2x1ZGVzKGNvbmZpZy5hcGlWZXJzaW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBhcGlWZXJzaW9uIHZhbHVlIGNhbiBvbmx5IGJlIGZyb20gJ3YxJywgJ3YyJyAmICd2MydgKTtcbiAgICB9XG4gICAgaWYgKCFbJ3Byb2R1Y3Rpb24nLCAnc3RhZ2luZyddLmluY2x1ZGVzKGNvbmZpZy5hcGlFbnZpcm9ubWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYGFwaUVudmlyb25tZW50IHZhbHVlIGNhbiBvbmx5IGJlIGZyb20gJ3Byb2R1Y3Rpb24nICYgJ3N0YWdpbmcnYFxuICAgICAgKTtcbiAgICB9XG4gICAgYXBpQ29uZmlnID0gYXBpQ29uZmlnc1tjb25maWcuYXBpRW52aXJvbm1lbnRdW2NvbmZpZy5hcGlWZXJzaW9uXTtcbiAgfVxuICAvLyBJbml0aWFsaXphdGlvblxuICBpbml0KGNvbmZpZyk7XG4gIC8vIENvbWJpbmUgbWV0aG9kc1xuICBjb25zdCBtZXRob2RzID0ge1xuICAgIGJ1Y2tldDogYnVja2V0TWV0aG9kcyhhcGlDb25maWcpLFxuICB9O1xuXG4gIC8vIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgbWV0aG9kcyBmb3IgdGhlIG1vZHVsZS5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obWFpbk1ldGhvZHMoYXBpQ29uZmlnKSwgbWV0aG9kcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvc21pYztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxlQUFpQkEsT0FBTyxDQUFDLDBCQUEwQixDQUFDO0VBQTVDQyxJQUFJLFlBQUpBLElBQUk7QUFDWixJQUFNQyxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxjQUFjLENBQUM7QUFDM0MsSUFBTUcsYUFBYSxHQUFHSCxPQUFPLENBQUMsZ0JBQWdCLENBQUM7QUFDL0MsZ0JBQXVCQSxPQUFPLENBQUMsMkJBQTJCLENBQUM7RUFBbkRJLFVBQVUsYUFBVkEsVUFBVTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNLENBQUlDLE9BQU8sRUFBSztFQUMxQixJQUFNQyxNQUFNO0lBQ1ZDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxjQUFjLEVBQUU7RUFBWSxHQUN6QkgsT0FBTyxDQUNYO0VBRUQsSUFBSUksU0FBUyxHQUFHLENBQUMsQ0FBQzs7RUFFbEI7RUFDQSxJQUFJSCxNQUFNLENBQUNJLE1BQU0sRUFBRTtJQUNqQixJQUFJLENBQUNKLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDQyxNQUFNLElBQUksQ0FBQ0wsTUFBTSxDQUFDSSxNQUFNLENBQUNFLFNBQVMsRUFBRTtNQUNyRCxNQUFNLElBQUlDLEtBQUssdURBQXVEO0lBQ3hFO0lBQ0FKLFNBQVMsR0FBRztNQUNWRSxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDQyxNQUFNO01BQzVCQyxTQUFTLEVBQUVOLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDRTtJQUMzQixDQUFDO0VBQ0gsQ0FBQyxNQUFNO0lBQ0wsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ0UsUUFBUSxDQUFDUixNQUFNLENBQUNDLFVBQVUsQ0FBQyxFQUFFO01BQ25ELE1BQU0sSUFBSU0sS0FBSyx1REFBdUQ7SUFDeEU7SUFDQSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQ1IsTUFBTSxDQUFDRSxjQUFjLENBQUMsRUFBRTtNQUM5RCxNQUFNLElBQUlLLEtBQUssa0VBRWQ7SUFDSDtJQUNBSixTQUFTLEdBQUdOLFVBQVUsQ0FBQ0csTUFBTSxDQUFDRSxjQUFjLENBQUMsQ0FBQ0YsTUFBTSxDQUFDQyxVQUFVLENBQUM7RUFDbEU7RUFDQTtFQUNBUCxJQUFJLENBQUNNLE1BQU0sQ0FBQztFQUNaO0VBQ0EsSUFBTVMsT0FBTyxHQUFHO0lBQ2RDLE1BQU0sRUFBRWQsYUFBYSxDQUFDTyxTQUFTO0VBQ2pDLENBQUM7O0VBRUQ7RUFDQSxPQUFPUSxNQUFNLENBQUNDLE1BQU0sQ0FBQ2pCLFdBQVcsQ0FBQ1EsU0FBUyxDQUFDLEVBQUVNLE9BQU8sQ0FBQztBQUN2RCxDQUFDO0FBRURJLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHaEIsTUFBTSJ9