"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const {
  API_URL,
  API_VERSION
} = require('../constants/env.constants');
const objectMethods = require('./object');
const objectTypeMethods = require('./objectType');
const mediaMethods = require('./media');
const userMethods = require('./user');

/**
 * Returns an object containing all the methods for the given bucket.
 * @param _bucketConfig - The bucket configuration object.
 * @returns An object containing all the methods for the given bucket.
 */
const bucketMethods = config => _bucketConfig => {
  const ver = config.version || API_VERSION;
  const uploadURI = process?.env?.UPLOAD_API_URL || (ver === 'v3' ? 'https://workers.cosmicjs.com' : 'https://upload.cosmicjs.com');
  const bucketConfig = _objectSpread(_objectSpread({}, _bucketConfig), {}, {
    uri: `${config.apiUrl || API_URL}/${ver}`,
    uploadUri: `${uploadURI}/${ver}`
  });
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, objectMethods(bucketConfig)), objectTypeMethods(bucketConfig)), mediaMethods(bucketConfig)), userMethods(bucketConfig));
};
module.exports = bucketMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBUElfVVJMIiwiQVBJX1ZFUlNJT04iLCJyZXF1aXJlIiwib2JqZWN0TWV0aG9kcyIsIm9iamVjdFR5cGVNZXRob2RzIiwibWVkaWFNZXRob2RzIiwidXNlck1ldGhvZHMiLCJidWNrZXRNZXRob2RzIiwiY29uZmlnIiwiX2J1Y2tldENvbmZpZyIsInZlciIsInZlcnNpb24iLCJ1cGxvYWRVUkkiLCJwcm9jZXNzIiwiZW52IiwiVVBMT0FEX0FQSV9VUkwiLCJidWNrZXRDb25maWciLCJ1cmkiLCJhcGlVcmwiLCJ1cGxvYWRVcmkiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2J1Y2tldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IEFQSV9VUkwsIEFQSV9WRVJTSU9OIH0gPSByZXF1aXJlKCcuLi9jb25zdGFudHMvZW52LmNvbnN0YW50cycpO1xuY29uc3Qgb2JqZWN0TWV0aG9kcyA9IHJlcXVpcmUoJy4vb2JqZWN0Jyk7XG5jb25zdCBvYmplY3RUeXBlTWV0aG9kcyA9IHJlcXVpcmUoJy4vb2JqZWN0VHlwZScpO1xuY29uc3QgbWVkaWFNZXRob2RzID0gcmVxdWlyZSgnLi9tZWRpYScpO1xuY29uc3QgdXNlck1ldGhvZHMgPSByZXF1aXJlKCcuL3VzZXInKTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWV0aG9kcyBmb3IgdGhlIGdpdmVuIGJ1Y2tldC5cbiAqIEBwYXJhbSBfYnVja2V0Q29uZmlnIC0gVGhlIGJ1Y2tldCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWV0aG9kcyBmb3IgdGhlIGdpdmVuIGJ1Y2tldC5cbiAqL1xuY29uc3QgYnVja2V0TWV0aG9kcyA9IChjb25maWcpID0+IChfYnVja2V0Q29uZmlnKSA9PiB7XG4gIGNvbnN0IHZlciA9IGNvbmZpZy52ZXJzaW9uIHx8IEFQSV9WRVJTSU9OO1xuICBjb25zdCB1cGxvYWRVUkkgPVxuICAgIHByb2Nlc3M/LmVudj8uVVBMT0FEX0FQSV9VUkwgfHxcbiAgICAodmVyID09PSAndjMnXG4gICAgICA/ICdodHRwczovL3dvcmtlcnMuY29zbWljanMuY29tJ1xuICAgICAgOiAnaHR0cHM6Ly91cGxvYWQuY29zbWljanMuY29tJyk7XG4gIGNvbnN0IGJ1Y2tldENvbmZpZyA9IHtcbiAgICAuLi5fYnVja2V0Q29uZmlnLFxuICAgIHVyaTogYCR7Y29uZmlnLmFwaVVybCB8fCBBUElfVVJMfS8ke3Zlcn1gLFxuICAgIHVwbG9hZFVyaTogYCR7dXBsb2FkVVJJfS8ke3Zlcn1gLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4ub2JqZWN0TWV0aG9kcyhidWNrZXRDb25maWcpLFxuICAgIC4uLm9iamVjdFR5cGVNZXRob2RzKGJ1Y2tldENvbmZpZyksXG4gICAgLi4ubWVkaWFNZXRob2RzKGJ1Y2tldENvbmZpZyksXG4gICAgLi4udXNlck1ldGhvZHMoYnVja2V0Q29uZmlnKSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnVja2V0TWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU07RUFBRUEsT0FBTztFQUFFQztBQUFZLENBQUMsR0FBR0MsT0FBTyxDQUFDLDRCQUE0QixDQUFDO0FBQ3RFLE1BQU1DLGFBQWEsR0FBR0QsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUN6QyxNQUFNRSxpQkFBaUIsR0FBR0YsT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUNqRCxNQUFNRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDdkMsTUFBTUksV0FBVyxHQUFHSixPQUFPLENBQUMsUUFBUSxDQUFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUssYUFBYSxHQUFJQyxNQUFNLElBQU1DLGFBQWEsSUFBSztFQUNuRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csT0FBTyxJQUFJVixXQUFXO0VBQ3pDLE1BQU1XLFNBQVMsR0FDYkMsT0FBTyxFQUFFQyxHQUFHLEVBQUVDLGNBQWMsS0FDM0JMLEdBQUcsS0FBSyxJQUFJLEdBQ1QsOEJBQThCLEdBQzlCLDZCQUE2QixDQUFDO0VBQ3BDLE1BQU1NLFlBQVksbUNBQ2JQLGFBQWE7SUFDaEJRLEdBQUcsRUFBRyxHQUFFVCxNQUFNLENBQUNVLE1BQU0sSUFBSWxCLE9BQVEsSUFBR1UsR0FBSSxFQUFDO0lBQ3pDUyxTQUFTLEVBQUcsR0FBRVAsU0FBVSxJQUFHRixHQUFJO0VBQUMsRUFDakM7RUFFRCxtRUFDS1AsYUFBYSxDQUFDYSxZQUFZLENBQUMsR0FDM0JaLGlCQUFpQixDQUFDWSxZQUFZLENBQUMsR0FDL0JYLFlBQVksQ0FBQ1csWUFBWSxDQUFDLEdBQzFCVixXQUFXLENBQUNVLFlBQVksQ0FBQztBQUVoQyxDQUFDO0FBRURJLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHZCxhQUFhIn0=