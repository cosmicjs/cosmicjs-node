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
const bucketMethods = apiVersion => _bucketConfig => {
  const ver = apiVersion || API_VERSION;
  const uploadURI = process?.env?.UPLOAD_API_URL || (ver === 'v3' ? 'https://workers.cosmicjs.com' : 'https://upload.cosmicjs.com');
  const bucketConfig = _objectSpread(_objectSpread({}, _bucketConfig), {}, {
    uri: `${API_URL}/${ver}`,
    uploadUri: `${uploadURI}/${ver}`
  });
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, objectMethods(bucketConfig)), objectTypeMethods(bucketConfig)), mediaMethods(bucketConfig)), userMethods(bucketConfig));
};
module.exports = bucketMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBUElfVVJMIiwiQVBJX1ZFUlNJT04iLCJyZXF1aXJlIiwib2JqZWN0TWV0aG9kcyIsIm9iamVjdFR5cGVNZXRob2RzIiwibWVkaWFNZXRob2RzIiwidXNlck1ldGhvZHMiLCJidWNrZXRNZXRob2RzIiwiYXBpVmVyc2lvbiIsIl9idWNrZXRDb25maWciLCJ2ZXIiLCJ1cGxvYWRVUkkiLCJwcm9jZXNzIiwiZW52IiwiVVBMT0FEX0FQSV9VUkwiLCJidWNrZXRDb25maWciLCJ1cmkiLCJ1cGxvYWRVcmkiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2J1Y2tldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IEFQSV9VUkwsIEFQSV9WRVJTSU9OIH0gPSByZXF1aXJlKCcuLi9jb25zdGFudHMvZW52LmNvbnN0YW50cycpO1xuY29uc3Qgb2JqZWN0TWV0aG9kcyA9IHJlcXVpcmUoJy4vb2JqZWN0Jyk7XG5jb25zdCBvYmplY3RUeXBlTWV0aG9kcyA9IHJlcXVpcmUoJy4vb2JqZWN0VHlwZScpO1xuY29uc3QgbWVkaWFNZXRob2RzID0gcmVxdWlyZSgnLi9tZWRpYScpO1xuY29uc3QgdXNlck1ldGhvZHMgPSByZXF1aXJlKCcuL3VzZXInKTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWV0aG9kcyBmb3IgdGhlIGdpdmVuIGJ1Y2tldC5cbiAqIEBwYXJhbSBfYnVja2V0Q29uZmlnIC0gVGhlIGJ1Y2tldCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbWV0aG9kcyBmb3IgdGhlIGdpdmVuIGJ1Y2tldC5cbiAqL1xuY29uc3QgYnVja2V0TWV0aG9kcyA9IChhcGlWZXJzaW9uKSA9PiAoX2J1Y2tldENvbmZpZykgPT4ge1xuICBjb25zdCB2ZXIgPSBhcGlWZXJzaW9uIHx8IEFQSV9WRVJTSU9OO1xuICBjb25zdCB1cGxvYWRVUkkgPVxuICAgIHByb2Nlc3M/LmVudj8uVVBMT0FEX0FQSV9VUkwgfHxcbiAgICAodmVyID09PSAndjMnXG4gICAgICA/ICdodHRwczovL3dvcmtlcnMuY29zbWljanMuY29tJ1xuICAgICAgOiAnaHR0cHM6Ly91cGxvYWQuY29zbWljanMuY29tJyk7XG4gIGNvbnN0IGJ1Y2tldENvbmZpZyA9IHtcbiAgICAuLi5fYnVja2V0Q29uZmlnLFxuICAgIHVyaTogYCR7QVBJX1VSTH0vJHt2ZXJ9YCxcbiAgICB1cGxvYWRVcmk6IGAke3VwbG9hZFVSSX0vJHt2ZXJ9YCxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLm9iamVjdE1ldGhvZHMoYnVja2V0Q29uZmlnKSxcbiAgICAuLi5vYmplY3RUeXBlTWV0aG9kcyhidWNrZXRDb25maWcpLFxuICAgIC4uLm1lZGlhTWV0aG9kcyhidWNrZXRDb25maWcpLFxuICAgIC4uLnVzZXJNZXRob2RzKGJ1Y2tldENvbmZpZyksXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1Y2tldE1ldGhvZHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNO0VBQUVBLE9BQU87RUFBRUM7QUFBWSxDQUFDLEdBQUdDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztBQUN0RSxNQUFNQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDekMsTUFBTUUsaUJBQWlCLEdBQUdGLE9BQU8sQ0FBQyxjQUFjLENBQUM7QUFDakQsTUFBTUcsWUFBWSxHQUFHSCxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLE1BQU1JLFdBQVcsR0FBR0osT0FBTyxDQUFDLFFBQVEsQ0FBQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1LLGFBQWEsR0FBSUMsVUFBVSxJQUFNQyxhQUFhLElBQUs7RUFDdkQsTUFBTUMsR0FBRyxHQUFHRixVQUFVLElBQUlQLFdBQVc7RUFDckMsTUFBTVUsU0FBUyxHQUNiQyxPQUFPLEVBQUVDLEdBQUcsRUFBRUMsY0FBYyxLQUMzQkosR0FBRyxLQUFLLElBQUksR0FDVCw4QkFBOEIsR0FDOUIsNkJBQTZCLENBQUM7RUFDcEMsTUFBTUssWUFBWSxtQ0FDYk4sYUFBYTtJQUNoQk8sR0FBRyxFQUFHLEdBQUVoQixPQUFRLElBQUdVLEdBQUksRUFBQztJQUN4Qk8sU0FBUyxFQUFHLEdBQUVOLFNBQVUsSUFBR0QsR0FBSTtFQUFDLEVBQ2pDO0VBRUQsbUVBQ0tQLGFBQWEsQ0FBQ1ksWUFBWSxDQUFDLEdBQzNCWCxpQkFBaUIsQ0FBQ1csWUFBWSxDQUFDLEdBQy9CVixZQUFZLENBQUNVLFlBQVksQ0FBQyxHQUMxQlQsV0FBVyxDQUFDUyxZQUFZLENBQUM7QUFFaEMsQ0FBQztBQUVERyxNQUFNLENBQUNDLE9BQU8sR0FBR1osYUFBYSJ9