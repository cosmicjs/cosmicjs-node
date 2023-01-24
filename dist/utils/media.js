"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const FormData = require('form-data');
const HTTP_METHODS = require('../constants/httpMethods.constants');
const {
  requestHandler
} = require('../helpers/requestHandler');
const promiser = require('../helpers/promiser');

/**
 * Finds media in the bucket.
 * @param query - The query to find media with.
 * @returns A promise that resolves to the media found.
 */
const mediaChainMethods = bucketConfig => ({
  /**
   * Find media in the bucket.
   * @param query - The query to search for.
   * @returns A new Media object.
   */
  find(query) {
    this.endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media?read_key=${bucketConfig.read_key}${query ? `&query=${encodeURI(JSON.stringify(query))}` : ''}`;
    return this;
  },
  /**
   * Finds a single media object by its ID.
   * @param query - The query object.
   * @returns The Media object.
   */
  findOne(query) {
    this.endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media/${query.id}?read_key=${bucketConfig.read_key}`;
    return this;
  },
  /**
   * Adds the given props to the endpoint.
   * @param props - the props to add to the endpoint.
   * @returns None
   */
  props(props) {
    this.endpoint += `&props=${props}`;
    return this;
  },
  /**
   * Sort the results by the given field.
   * @param sort - The field to sort by.
   * @returns None
   */
  sort(sort) {
    this.endpoint += `&sort=${sort}`;
    return this;
  },
  /**
   * Limit the number of results returned.
   * @param limit - The number of results to return.
   * @returns None
   */
  limit(limit) {
    this.endpoint += `&limit=${limit}`;
    return this;
  },
  /**
   * Skip the given number of results.
   * @param skip - The number of results to skip.
   * @returns None
   */
  skip(skip) {
    this.endpoint += `&skip=${skip}`;
    return this;
  },
  /**
   * Uploads a file to the bucket.
   * @param params - The parameters to upload the file with.
   * @returns A promise that resolves to the uploaded file.
   */
  async insertOne(params) {
    const endpoint = `${bucketConfig.uploadUri}/buckets/${bucketConfig.slug}/media`;
    const data = new FormData();
    if (params.media.buffer) {
      data.append('media', params.media.buffer, params.media.originalname);
    } else {
      data.append('media', params.media, params.media.name);
    }
    if (bucketConfig.write_key) {
      data.append('write_key', bucketConfig.write_key);
    }
    if (params.folder) {
      data.append('folder', params.folder);
    }
    if (params.metadata) {
      data.append('metadata', JSON.stringify(params.metadata));
    }
    if (params.trigger_webhook) {
      data.append('trigger_webhook', params.trigger_webhook.toString());
    }
    const getHeaders = form => new Promise((resolve, reject) => {
      if (params.media.buffer) {
        form.getLength((err, length) => {
          if (err) reject(err);
          const headers = _objectSpread({
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
    return getHeaders(data).then(headers => {
      headers.Authorization = `Bearer ${bucketConfig.write_key}`;
      return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
    }).catch(error => {
      throw error.response.data;
    });
  },
  /**
   * Deletes a single media from the bucket.
   * @param params - The parameters for the request, including id
   * @returns None
   */
  async deleteOne(params) {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media/${params.id}${params.trigger_webhook ? '?trigger_webhook=true' : ''}`;
    let headers;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`
      };
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
  },
  async then(resolve, reject) {
    promiser(this.endpoint).then(res => resolve(res, null)).catch(err => {
      if (typeof reject === 'function') {
        reject(err);
      } else {
        resolve(null, err);
      }
    });
  }
});

// Legacy Methods

/**
 * A set of methods for interacting with media in a bucket.
 * @param bucketConfig - The bucket configuration object.
 * @returns A set of methods for interacting with media in a bucket.
 */
const mediaMethods = bucketConfig => ({
  media: mediaChainMethods(bucketConfig),
  addMedia: params => {
    const endpoint = `${bucketConfig.uploadUri}/buckets/${bucketConfig.slug}/media`;
    const data = new FormData();
    if (params.media.buffer) {
      data.append('media', params.media.buffer, params.media.originalname);
    } else {
      data.append('media', params.media, params.media.name);
    }
    if (bucketConfig.write_key) {
      data.append('write_key', bucketConfig.write_key);
    }
    if (params.folder) {
      data.append('folder', params.folder);
    }
    if (params.metadata) {
      data.append('metadata', JSON.stringify(params.metadata));
    }
    if (params.trigger_webhook) {
      data.append('trigger_webhook', params.trigger_webhook.toString());
    }
    const getHeaders = form => new Promise((resolve, reject) => {
      if (params.media.buffer) {
        form.getLength((err, length) => {
          if (err) reject(err);
          const headers = _objectSpread({
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
    return getHeaders(data).then(headers => {
      headers.Authorization = `Bearer ${bucketConfig.write_key}`;
      return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
    }).catch(error => {
      throw error.response.data;
    });
  },
  getMedia: params => {
    let endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media?read_key=${bucketConfig.read_key}`;
    if (params && params.limit) {
      endpoint += `&limit=${params.limit}`;
    }
    if (params && params.skip) {
      endpoint += `&skip=${params.skip}`;
    }
    if (params && params.query) {
      endpoint += `&query=${encodeURI(JSON.stringify(params.query))}`;
    }
    if (params && params.props) {
      endpoint += `&props=${params.props}`;
    }
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  getSingleMedia: params => {
    let endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media/${params.id}?read_key=${bucketConfig.read_key}`;
    if (params && params.props) {
      endpoint += `&props=${params.props}`;
    }
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  deleteMedia: params => {
    const endpoint = `${bucketConfig.uri}/buckets/${bucketConfig.slug}/media/${params.id}${params.trigger_webhook ? '?trigger_webhook=true' : ''}`;
    let headers;
    if (bucketConfig.write_key) {
      headers = {
        Authorization: `Bearer ${bucketConfig.write_key}`
      };
    }
    return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
  }
});
module.exports = mediaMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtRGF0YSIsInJlcXVpcmUiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsInByb21pc2VyIiwibWVkaWFDaGFpbk1ldGhvZHMiLCJidWNrZXRDb25maWciLCJmaW5kIiwicXVlcnkiLCJlbmRwb2ludCIsInVyaSIsInNsdWciLCJyZWFkX2tleSIsImVuY29kZVVSSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaW5kT25lIiwiaWQiLCJwcm9wcyIsInNvcnQiLCJsaW1pdCIsInNraXAiLCJpbnNlcnRPbmUiLCJwYXJhbXMiLCJ1cGxvYWRVcmkiLCJkYXRhIiwibWVkaWEiLCJidWZmZXIiLCJhcHBlbmQiLCJvcmlnaW5hbG5hbWUiLCJuYW1lIiwid3JpdGVfa2V5IiwiZm9sZGVyIiwibWV0YWRhdGEiLCJ0cmlnZ2VyX3dlYmhvb2siLCJ0b1N0cmluZyIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIkF1dGhvcml6YXRpb24iLCJQT1NUIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwiZGVsZXRlT25lIiwiREVMRVRFIiwicmVzIiwibWVkaWFNZXRob2RzIiwiYWRkTWVkaWEiLCJnZXRNZWRpYSIsIkdFVCIsImdldFNpbmdsZU1lZGlhIiwiZGVsZXRlTWVkaWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL21lZGlhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhJyk7XG5jb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvaHR0cE1ldGhvZHMuY29uc3RhbnRzJyk7XG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RIYW5kbGVyJyk7XG5jb25zdCBwcm9taXNlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcHJvbWlzZXInKTtcblxuLyoqXG4gKiBGaW5kcyBtZWRpYSBpbiB0aGUgYnVja2V0LlxuICogQHBhcmFtIHF1ZXJ5IC0gVGhlIHF1ZXJ5IHRvIGZpbmQgbWVkaWEgd2l0aC5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBtZWRpYSBmb3VuZC5cbiAqL1xuY29uc3QgbWVkaWFDaGFpbk1ldGhvZHMgPSAoYnVja2V0Q29uZmlnKSA9PiAoe1xuICAvKipcbiAgICogRmluZCBtZWRpYSBpbiB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcXVlcnkgLSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvci5cbiAgICogQHJldHVybnMgQSBuZXcgTWVkaWEgb2JqZWN0LlxuICAgKi9cbiAgZmluZChxdWVyeSkge1xuICAgIHRoaXMuZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7XG4gICAgICBidWNrZXRDb25maWcuc2x1Z1xuICAgIH0vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRDb25maWcucmVhZF9rZXl9JHtcbiAgICAgIHF1ZXJ5ID8gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShxdWVyeSkpfWAgOiAnJ1xuICAgIH1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogRmluZHMgYSBzaW5nbGUgbWVkaWEgb2JqZWN0IGJ5IGl0cyBJRC5cbiAgICogQHBhcmFtIHF1ZXJ5IC0gVGhlIHF1ZXJ5IG9iamVjdC5cbiAgICogQHJldHVybnMgVGhlIE1lZGlhIG9iamVjdC5cbiAgICovXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9tZWRpYS8ke3F1ZXJ5LmlkfT9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gcHJvcHMgdG8gdGhlIGVuZHBvaW50LlxuICAgKiBAcGFyYW0gcHJvcHMgLSB0aGUgcHJvcHMgdG8gYWRkIHRvIHRoZSBlbmRwb2ludC5cbiAgICogQHJldHVybnMgTm9uZVxuICAgKi9cbiAgcHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmcHJvcHM9JHtwcm9wc31gO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogU29ydCB0aGUgcmVzdWx0cyBieSB0aGUgZ2l2ZW4gZmllbGQuXG4gICAqIEBwYXJhbSBzb3J0IC0gVGhlIGZpZWxkIHRvIHNvcnQgYnkuXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIHNvcnQoc29ydCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzb3J0PSR7c29ydH1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogTGltaXQgdGhlIG51bWJlciBvZiByZXN1bHRzIHJldHVybmVkLlxuICAgKiBAcGFyYW0gbGltaXQgLSBUaGUgbnVtYmVyIG9mIHJlc3VsdHMgdG8gcmV0dXJuLlxuICAgKiBAcmV0dXJucyBOb25lXG4gICAqL1xuICBsaW1pdChsaW1pdCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZsaW1pdD0ke2xpbWl0fWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBTa2lwIHRoZSBnaXZlbiBudW1iZXIgb2YgcmVzdWx0cy5cbiAgICogQHBhcmFtIHNraXAgLSBUaGUgbnVtYmVyIG9mIHJlc3VsdHMgdG8gc2tpcC5cbiAgICogQHJldHVybnMgTm9uZVxuICAgKi9cbiAgc2tpcChza2lwKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNraXA9JHtza2lwfWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBVcGxvYWRzIGEgZmlsZSB0byB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gdXBsb2FkIHRoZSBmaWxlIHdpdGguXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSB1cGxvYWRlZCBmaWxlLlxuICAgKi9cbiAgYXN5bmMgaW5zZXJ0T25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVwbG9hZFVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9tZWRpYWA7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWVkaWEnLCBwYXJhbXMubWVkaWEuYnVmZmVyLCBwYXJhbXMubWVkaWEub3JpZ2luYWxuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLCBwYXJhbXMubWVkaWEubmFtZSk7XG4gICAgfVxuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0Q29uZmlnLndyaXRlX2tleSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZm9sZGVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnZm9sZGVyJywgcGFyYW1zLmZvbGRlcik7XG4gICAgfVxuICAgIGlmIChwYXJhbXMubWV0YWRhdGEpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5tZXRhZGF0YSkpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnRyaWdnZXJfd2ViaG9vaykge1xuICAgICAgZGF0YS5hcHBlbmQoJ3RyaWdnZXJfd2ViaG9vaycsIHBhcmFtcy50cmlnZ2VyX3dlYmhvb2sudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGNvbnN0IGdldEhlYWRlcnMgPSAoZm9ybSkgPT5cbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLCAuLi5mb3JtLmdldEhlYWRlcnMoKSB9O1xuICAgICAgICAgICAgcmVzb2x2ZShoZWFkZXJzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiB7XG4gICAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtidWNrZXRDb25maWcud3JpdGVfa2V5fWA7XG4gICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pO1xuICB9LFxuICAvKipcbiAgICogRGVsZXRlcyBhIHNpbmdsZSBtZWRpYSBmcm9tIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgdGhlIHJlcXVlc3QsIGluY2x1ZGluZyBpZFxuICAgKiBAcmV0dXJucyBOb25lXG4gICAqL1xuICBhc3luYyBkZWxldGVPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L21lZGlhLyR7XG4gICAgICBwYXJhbXMuaWRcbiAgICB9JHtwYXJhbXMudHJpZ2dlcl93ZWJob29rID8gJz90cmlnZ2VyX3dlYmhvb2s9dHJ1ZScgOiAnJ31gO1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0Q29uZmlnLndyaXRlX2tleX1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKTtcbiAgfSxcbiAgYXN5bmMgdGhlbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcm9taXNlcih0aGlzLmVuZHBvaW50KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzb2x2ZShyZXMsIG51bGwpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKG51bGwsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbi8vIExlZ2FjeSBNZXRob2RzXG5cbi8qKlxuICogQSBzZXQgb2YgbWV0aG9kcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBtZWRpYSBpbiBhIGJ1Y2tldC5cbiAqIEBwYXJhbSBidWNrZXRDb25maWcgLSBUaGUgYnVja2V0IGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMgQSBzZXQgb2YgbWV0aG9kcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBtZWRpYSBpbiBhIGJ1Y2tldC5cbiAqL1xuY29uc3QgbWVkaWFNZXRob2RzID0gKGJ1Y2tldENvbmZpZykgPT4gKHtcbiAgbWVkaWE6IG1lZGlhQ2hhaW5NZXRob2RzKGJ1Y2tldENvbmZpZyksXG4gIGFkZE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXBsb2FkVXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L21lZGlhYDtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYS5idWZmZXIsIHBhcmFtcy5tZWRpYS5vcmlnaW5hbG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWVkaWEnLCBwYXJhbXMubWVkaWEsIHBhcmFtcy5tZWRpYS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd3cml0ZV9rZXknLCBidWNrZXRDb25maWcud3JpdGVfa2V5KTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5mb2xkZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdmb2xkZXInLCBwYXJhbXMuZm9sZGVyKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zLm1ldGFkYXRhKSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMudHJpZ2dlcl93ZWJob29rKSB7XG4gICAgICBkYXRhLmFwcGVuZCgndHJpZ2dlcl93ZWJob29rJywgcGFyYW1zLnRyaWdnZXJfd2ViaG9vay50b1N0cmluZygpKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0SGVhZGVycyA9IChmb3JtKSA9PlxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgICAgIGZvcm0uZ2V0TGVuZ3RoKChlcnIsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1MZW5ndGgnOiBsZW5ndGgsIC4uLmZvcm0uZ2V0SGVhZGVycygpIH07XG4gICAgICAgICAgICByZXNvbHZlKGhlYWRlcnMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gZ2V0SGVhZGVycyhkYXRhKVxuICAgICAgLnRoZW4oKGhlYWRlcnMpID0+IHtcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2J1Y2tldENvbmZpZy53cml0ZV9rZXl9YDtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgZGF0YSwgaGVhZGVycyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgfSk7XG4gIH0sXG4gIGdldE1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9tZWRpYT9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX1gO1xuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB7XG4gICAgICBlbmRwb2ludCArPSBgJmxpbWl0PSR7cGFyYW1zLmxpbWl0fWA7XG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWA7XG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWA7XG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWA7XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gIH0sXG4gIGdldFNpbmdsZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0/cmVhZF9rZXk9JHtidWNrZXRDb25maWcucmVhZF9rZXl9YDtcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpO1xuICB9LFxuICBkZWxldGVNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9tZWRpYS8ke1xuICAgICAgcGFyYW1zLmlkXG4gICAgfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YDtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldENvbmZpZy53cml0ZV9rZXl9YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycyk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYU1ldGhvZHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDckMsTUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsb0NBQW9DLENBQUM7QUFDbEUsTUFBTTtFQUFFRTtBQUFlLENBQUMsR0FBR0YsT0FBTyxDQUFDLDJCQUEyQixDQUFDO0FBQy9ELE1BQU1HLFFBQVEsR0FBR0gsT0FBTyxDQUFDLHFCQUFxQixDQUFDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUksaUJBQWlCLEdBQUlDLFlBQVksS0FBTTtFQUMzQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0VDLElBQUksQ0FBQ0MsS0FBSyxFQUFFO0lBQ1YsSUFBSSxDQUFDQyxRQUFRLEdBQUksR0FBRUgsWUFBWSxDQUFDSSxHQUFJLFlBQ2xDSixZQUFZLENBQUNLLElBQ2QsbUJBQWtCTCxZQUFZLENBQUNNLFFBQVMsR0FDdkNKLEtBQUssR0FBSSxVQUFTSyxTQUFTLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxLQUFLLENBQUMsQ0FBRSxFQUFDLEdBQUcsRUFDeEQsRUFBQztJQUNGLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFDRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0VRLE9BQU8sQ0FBQ1IsS0FBSyxFQUFFO0lBQ2IsSUFBSSxDQUFDQyxRQUFRLEdBQUksR0FBRUgsWUFBWSxDQUFDSSxHQUFJLFlBQVdKLFlBQVksQ0FBQ0ssSUFBSyxVQUFTSCxLQUFLLENBQUNTLEVBQUcsYUFBWVgsWUFBWSxDQUFDTSxRQUFTLEVBQUM7SUFDdEgsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRU0sS0FBSyxDQUFDQSxLQUFLLEVBQUU7SUFDWCxJQUFJ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