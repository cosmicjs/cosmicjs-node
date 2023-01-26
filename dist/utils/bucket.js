"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _require = require('../constants/env.constants'),
  API_URL = _require.API_URL,
  API_VERSION = _require.API_VERSION;
var objectMethods = require('./object');
var objectTypeMethods = require('./objectType');
var mediaMethods = require('./media');
var userMethods = require('./user');

/**
 * Returns an object containing all the methods for the given bucket.
 * @param _bucketConfig - The bucket configuration object.
 * @returns An object containing all the methods for the given bucket.
 */
var bucketMethods = function bucketMethods(config) {
  return function (_bucketConfig) {
    var _process, _process$env;
    var ver = config.version || API_VERSION;
    var uploadURI = ((_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.UPLOAD_API_URL) || (ver === 'v3' ? 'https://workers.cosmicjs.com' : 'https://upload.cosmicjs.com');
    var bucketConfig = _objectSpread(_objectSpread({}, _bucketConfig), {}, {
      uri: "".concat(config.apiUrl || API_URL, "/").concat(ver),
      uploadUri: "".concat(uploadURI, "/").concat(ver)
    });
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, objectMethods(bucketConfig)), objectTypeMethods(bucketConfig)), mediaMethods(bucketConfig)), userMethods(bucketConfig));
  };
};
module.exports = bucketMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiQVBJX1VSTCIsIkFQSV9WRVJTSU9OIiwib2JqZWN0TWV0aG9kcyIsIm9iamVjdFR5cGVNZXRob2RzIiwibWVkaWFNZXRob2RzIiwidXNlck1ldGhvZHMiLCJidWNrZXRNZXRob2RzIiwiY29uZmlnIiwiX2J1Y2tldENvbmZpZyIsInZlciIsInZlcnNpb24iLCJ1cGxvYWRVUkkiLCJwcm9jZXNzIiwiZW52IiwiVVBMT0FEX0FQSV9VUkwiLCJidWNrZXRDb25maWciLCJ1cmkiLCJhcGlVcmwiLCJ1cGxvYWRVcmkiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2J1Y2tldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IEFQSV9VUkwsIEFQSV9WRVJTSU9OIH0gPSByZXF1aXJlKCcuLi9jb25zdGFudHMvZW52LmNvbnN0YW50cycpO1xuY29uc3Qgb2JqZWN0TWV0aG9kcyA9IHJlcXVpcmUoJy4vb2JqZWN0Jyk7XG5jb25zdCBvYmplY3RUeXBlTWV0aG9kcyA9IHJlcXVpcmUoJy4vb2JqZWN0VHlwZScpO1xuY29uc3QgbWVkaWFNZXRob2RzID0gcmVxdWlyZSgnLi9tZWRpYScpO1xuY29uc3QgdXNlck1ldGhvZHMgPSByZXF1aXJlKCcuL3VzZXInKTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWV0aG9kcyBmb3IgdGhlIGdpdmVuIGJ1Y2tldC5cbiAqIEBwYXJhbSBfYnVja2V0Q29uZmlnIC0gVGhlIGJ1Y2tldCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWV0aG9kcyBmb3IgdGhlIGdpdmVuIGJ1Y2tldC5cbiAqL1xuY29uc3QgYnVja2V0TWV0aG9kcyA9IChjb25maWcpID0+IChfYnVja2V0Q29uZmlnKSA9PiB7XG4gIGNvbnN0IHZlciA9IGNvbmZpZy52ZXJzaW9uIHx8IEFQSV9WRVJTSU9OO1xuICBjb25zdCB1cGxvYWRVUkkgPVxuICAgIHByb2Nlc3M/LmVudj8uVVBMT0FEX0FQSV9VUkwgfHxcbiAgICAodmVyID09PSAndjMnXG4gICAgICA/ICdodHRwczovL3dvcmtlcnMuY29zbWljanMuY29tJ1xuICAgICAgOiAnaHR0cHM6Ly91cGxvYWQuY29zbWljanMuY29tJyk7XG4gIGNvbnN0IGJ1Y2tldENvbmZpZyA9IHtcbiAgICAuLi5fYnVja2V0Q29uZmlnLFxuICAgIHVyaTogYCR7Y29uZmlnLmFwaVVybCB8fCBBUElfVVJMfS8ke3Zlcn1gLFxuICAgIHVwbG9hZFVyaTogYCR7dXBsb2FkVVJJfS8ke3Zlcn1gLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4ub2JqZWN0TWV0aG9kcyhidWNrZXRDb25maWcpLFxuICAgIC4uLm9iamVjdFR5cGVNZXRob2RzKGJ1Y2tldENvbmZpZyksXG4gICAgLi4ubWVkaWFNZXRob2RzKGJ1Y2tldENvbmZpZyksXG4gICAgLi4udXNlck1ldGhvZHMoYnVja2V0Q29uZmlnKSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnVja2V0TWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxlQUFpQ0EsT0FBTyxDQUFDLDRCQUE0QixDQUFDO0VBQTlEQyxPQUFPLFlBQVBBLE9BQU87RUFBRUMsV0FBVyxZQUFYQSxXQUFXO0FBQzVCLElBQU1DLGFBQWEsR0FBR0gsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUN6QyxJQUFNSSxpQkFBaUIsR0FBR0osT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUNqRCxJQUFNSyxZQUFZLEdBQUdMLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDdkMsSUFBTU0sV0FBVyxHQUFHTixPQUFPLENBQUMsUUFBUSxDQUFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLE1BQU07RUFBQSxPQUFLLFVBQUNDLGFBQWEsRUFBSztJQUFBO0lBQ25ELElBQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxPQUFPLElBQUlULFdBQVc7SUFDekMsSUFBTVUsU0FBUyxHQUNiLGFBQUFDLE9BQU8sNkRBQVAsU0FBU0MsR0FBRyxpREFBWixhQUFjQyxjQUFjLE1BQzNCTCxHQUFHLEtBQUssSUFBSSxHQUNULDhCQUE4QixHQUM5Qiw2QkFBNkIsQ0FBQztJQUNwQyxJQUFNTSxZQUFZLG1DQUNiUCxhQUFhO01BQ2hCUSxHQUFHLFlBQUtULE1BQU0sQ0FBQ1UsTUFBTSxJQUFJakIsT0FBTyxjQUFJUyxHQUFHLENBQUU7TUFDekNTLFNBQVMsWUFBS1AsU0FBUyxjQUFJRixHQUFHO0lBQUUsRUFDakM7SUFFRCxtRUFDS1AsYUFBYSxDQUFDYSxZQUFZLENBQUMsR0FDM0JaLGlCQUFpQixDQUFDWSxZQUFZLENBQUMsR0FDL0JYLFlBQVksQ0FBQ1csWUFBWSxDQUFDLEdBQzFCVixXQUFXLENBQUNVLFlBQVksQ0FBQztFQUVoQyxDQUFDO0FBQUE7QUFFREksTUFBTSxDQUFDQyxPQUFPLEdBQUdkLGFBQWEifQ==