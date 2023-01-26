"use strict";

var _require = require('../constants/env.constants'),
  URI = _require.URI;
var HTTP_METHODS = require('../constants/httpMethods.constants');
var _require2 = require('../helpers/requestHandler'),
  requestHandler = _require2.requestHandler;

/**
 * Returns a WebhookMethods object that can be used to interact with the webhooks API.
 * @param bucketConfig - The bucket configuration object.
 * @returns A WebhookMethods object.
 */
var webhookMethods = function webhookMethods(bucketConfig) {
  return {
    /**
     * Gets the webhooks for the current bucket.
     * @returns A promise that resolves to the webhooks for the current bucket.
     */
    getWebhooks: function getWebhooks() {
      var endpoint = "".concat(URI, "/").concat(bucketConfig.slug, "/webhooks");
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Adds a webhook to the bucket.
     * @param params - The webhook parameters.
     * @returns The response from the API.
     */
    addWebhook: function addWebhook(params) {
      var endpoint = "".concat(URI, "/").concat(bucketConfig.slug, "/webhooks");
      if (bucketConfig.write_key) {
        params.write_key = bucketConfig.write_key;
      }
      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    /**
     * Deletes a webhook from the bucket.
     * @param params - The parameters to pass to the API.
     * @returns None
     */
    deleteWebhook: function deleteWebhook(params) {
      var endpoint = "".concat(URI, "/").concat(bucketConfig.slug, "/webhooks/").concat(params.id);
      return requestHandler(HTTP_METHODS.DELETE, endpoint, bucketConfig);
    }
  };
};
module.exports = webhookMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiVVJJIiwiSFRUUF9NRVRIT0RTIiwicmVxdWVzdEhhbmRsZXIiLCJ3ZWJob29rTWV0aG9kcyIsImJ1Y2tldENvbmZpZyIsImdldFdlYmhvb2tzIiwiZW5kcG9pbnQiLCJzbHVnIiwiR0VUIiwiYWRkV2ViaG9vayIsInBhcmFtcyIsIndyaXRlX2tleSIsIlBPU1QiLCJkZWxldGVXZWJob29rIiwiaWQiLCJERUxFVEUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3dlYmhvb2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBVUkkgfSA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9lbnYuY29uc3RhbnRzJyk7XG5jb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvaHR0cE1ldGhvZHMuY29uc3RhbnRzJyk7XG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RIYW5kbGVyJyk7XG5cbi8qKlxuICogUmV0dXJucyBhIFdlYmhvb2tNZXRob2RzIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGludGVyYWN0IHdpdGggdGhlIHdlYmhvb2tzIEFQSS5cbiAqIEBwYXJhbSBidWNrZXRDb25maWcgLSBUaGUgYnVja2V0IGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMgQSBXZWJob29rTWV0aG9kcyBvYmplY3QuXG4gKi9cbmNvbnN0IHdlYmhvb2tNZXRob2RzID0gKGJ1Y2tldENvbmZpZykgPT4gKHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIHdlYmhvb2tzIGZvciB0aGUgY3VycmVudCBidWNrZXQuXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSB3ZWJob29rcyBmb3IgdGhlIGN1cnJlbnQgYnVja2V0LlxuICAgKi9cbiAgZ2V0V2ViaG9va3M6ICgpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRDb25maWcuc2x1Z30vd2ViaG9va3NgO1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gIH0sXG4gIC8qKlxuICAgKiBBZGRzIGEgd2ViaG9vayB0byB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHdlYmhvb2sgcGFyYW1ldGVycy5cbiAgICogQHJldHVybnMgVGhlIHJlc3BvbnNlIGZyb20gdGhlIEFQSS5cbiAgICovXG4gIGFkZFdlYmhvb2s6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRDb25maWcuc2x1Z30vd2ViaG9va3NgO1xuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBwYXJhbXMud3JpdGVfa2V5ID0gYnVja2V0Q29uZmlnLndyaXRlX2tleTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zKTtcbiAgfSxcbiAgLyoqXG4gICAqIERlbGV0ZXMgYSB3ZWJob29rIGZyb20gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIEFQSS5cbiAgICogQHJldHVybnMgTm9uZVxuICAgKi9cbiAgZGVsZXRlV2ViaG9vazogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS8ke2J1Y2tldENvbmZpZy5zbHVnfS93ZWJob29rcy8ke3BhcmFtcy5pZH1gO1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgYnVja2V0Q29uZmlnKTtcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdlYmhvb2tNZXRob2RzO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBLGVBQWdCQSxPQUFPLENBQUMsNEJBQTRCLENBQUM7RUFBN0NDLEdBQUcsWUFBSEEsR0FBRztBQUNYLElBQU1DLFlBQVksR0FBR0YsT0FBTyxDQUFDLG9DQUFvQyxDQUFDO0FBQ2xFLGdCQUEyQkEsT0FBTyxDQUFDLDJCQUEyQixDQUFDO0VBQXZERyxjQUFjLGFBQWRBLGNBQWM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBSUMsWUFBWTtFQUFBLE9BQU07SUFDeEM7QUFDRjtBQUNBO0FBQ0E7SUFDRUMsV0FBVyxFQUFFLHVCQUFNO01BQ2pCLElBQU1DLFFBQVEsYUFBTU4sR0FBRyxjQUFJSSxZQUFZLENBQUNHLElBQUksY0FBVztNQUN2RCxPQUFPTCxjQUFjLENBQUNELFlBQVksQ0FBQ08sR0FBRyxFQUFFRixRQUFRLENBQUM7SUFDbkQsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUcsVUFBVSxFQUFFLG9CQUFDQyxNQUFNLEVBQUs7TUFDdEIsSUFBTUosUUFBUSxhQUFNTixHQUFHLGNBQUlJLFlBQVksQ0FBQ0csSUFBSSxjQUFXO01BQ3ZELElBQUlILFlBQVksQ0FBQ08sU0FBUyxFQUFFO1FBQzFCRCxNQUFNLENBQUNDLFNBQVMsR0FBR1AsWUFBWSxDQUFDTyxTQUFTO01BQzNDO01BQ0EsT0FBT1QsY0FBYyxDQUFDRCxZQUFZLENBQUNXLElBQUksRUFBRU4sUUFBUSxFQUFFSSxNQUFNLENBQUM7SUFDNUQsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUcsYUFBYSxFQUFFLHVCQUFDSCxNQUFNLEVBQUs7TUFDekIsSUFBTUosUUFBUSxhQUFNTixHQUFHLGNBQUlJLFlBQVksQ0FBQ0csSUFBSSx1QkFBYUcsTUFBTSxDQUFDSSxFQUFFLENBQUU7TUFDcEUsT0FBT1osY0FBYyxDQUFDRCxZQUFZLENBQUNjLE1BQU0sRUFBRVQsUUFBUSxFQUFFRixZQUFZLENBQUM7SUFDcEU7RUFDRixDQUFDO0FBQUEsQ0FBQztBQUVGWSxNQUFNLENBQUNDLE9BQU8sR0FBR2QsY0FBYyJ9