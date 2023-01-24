"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const {
  init
} = require('./helpers/requestHandler');
const mainMethods = require('./utils/main');
const bucketMethods = require('./utils/bucket');

/**
 * The main Cosmic class.
 * @param _config - The configuration object.
 * @returns None
 */
const Cosmic = _config => {
  const config = _objectSpread({
    version: 'v3'
  }, _config);
  // Initialization
  init(config);
  // Combine methods
  const methods = {
    bucket: bucketMethods(config.version)
  };

  // @returns An object containing all of the methods for the module.
  return Object.assign(mainMethods(config.version), methods);
};
module.exports = Cosmic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbml0IiwicmVxdWlyZSIsIm1haW5NZXRob2RzIiwiYnVja2V0TWV0aG9kcyIsIkNvc21pYyIsIl9jb25maWciLCJjb25maWciLCJ2ZXJzaW9uIiwibWV0aG9kcyIsImJ1Y2tldCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpbml0IH0gPSByZXF1aXJlKCcuL2hlbHBlcnMvcmVxdWVzdEhhbmRsZXInKTtcbmNvbnN0IG1haW5NZXRob2RzID0gcmVxdWlyZSgnLi91dGlscy9tYWluJyk7XG5jb25zdCBidWNrZXRNZXRob2RzID0gcmVxdWlyZSgnLi91dGlscy9idWNrZXQnKTtcblxuLyoqXG4gKiBUaGUgbWFpbiBDb3NtaWMgY2xhc3MuXG4gKiBAcGFyYW0gX2NvbmZpZyAtIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIE5vbmVcbiAqL1xuY29uc3QgQ29zbWljID0gKF9jb25maWcpID0+IHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHZlcnNpb246ICd2MycsXG4gICAgLi4uX2NvbmZpZyxcbiAgfTtcbiAgLy8gSW5pdGlhbGl6YXRpb25cbiAgaW5pdChjb25maWcpO1xuICAvLyBDb21iaW5lIG1ldGhvZHNcbiAgY29uc3QgbWV0aG9kcyA9IHtcbiAgICBidWNrZXQ6IGJ1Y2tldE1ldGhvZHMoY29uZmlnLnZlcnNpb24pLFxuICB9O1xuXG4gIC8vIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgbWV0aG9kcyBmb3IgdGhlIG1vZHVsZS5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obWFpbk1ldGhvZHMoY29uZmlnLnZlcnNpb24pLCBtZXRob2RzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29zbWljO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTTtFQUFFQTtBQUFLLENBQUMsR0FBR0MsT0FBTyxDQUFDLDBCQUEwQixDQUFDO0FBQ3BELE1BQU1DLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUMzQyxNQUFNRSxhQUFhLEdBQUdGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1HLE1BQU0sR0FBSUMsT0FBTyxJQUFLO0VBQzFCLE1BQU1DLE1BQU07SUFDVkMsT0FBTyxFQUFFO0VBQUksR0FDVkYsT0FBTyxDQUNYO0VBQ0Q7RUFDQUwsSUFBSSxDQUFDTSxNQUFNLENBQUM7RUFDWjtFQUNBLE1BQU1FLE9BQU8sR0FBRztJQUNkQyxNQUFNLEVBQUVOLGFBQWEsQ0FBQ0csTUFBTSxDQUFDQyxPQUFPO0VBQ3RDLENBQUM7O0VBRUQ7RUFDQSxPQUFPRyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1QsV0FBVyxDQUFDSSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxFQUFFQyxPQUFPLENBQUM7QUFDNUQsQ0FBQztBQUVESSxNQUFNLENBQUNDLE9BQU8sR0FBR1QsTUFBTSJ9