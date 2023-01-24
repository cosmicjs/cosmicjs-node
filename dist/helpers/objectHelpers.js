"use strict";

const promiser = require('./promiser');

/**
 * Takes in an endpoint and adds the params to the end of the endpoint.
 * @param endpoint - the endpoint to add the params to.
 * @param params - the params to add to the endpoint.
 * @returns the endpoint with the params added.
 */
const addParamsToObjectsEndpoint = (endpoint, params) => {
  let ep = endpoint;
  /**
   * > Checks if the parameter is present
   * > Add the parameter to the end of the URL if it is present.
   * @param params - The parameters object.
   * @returns None
   */
  if (params && params.limit) {
    ep += `&limit=${params.limit}`;
  }
  if (params && params.skip) {
    ep += `&skip=${params.skip}`;
  }
  if (params && params.status) {
    ep += `&status=${params.status}`;
  }
  if (params && params.after) {
    ep += `&after=${params.after}`;
  }
  if (params && params.sort) {
    ep += `&sort=${params.sort}`;
  }
  if (params && params.show_metafields) {
    ep += `&show_metafields=${params.show_metafields}`;
  }
  if (params && params.pretty) {
    ep += `&pretty=${params.pretty}`;
  }
  if (params && params.props) {
    ep += `&props=${params.props}`;
  }
  if (params && params.query) {
    ep += `&query=${encodeURI(JSON.stringify(params.query))}`;
  }
  if (params && typeof params.use_cache !== 'undefined') {
    ep += `&use_cache=${params.use_cache}`;
  }
  return ep;
};

/**
 * Finds the chain of properties that lead to the given property.
 * @param endpoint - the endpoint to query for the chain of properties.
 * @returns A promise that resolves to the chain of properties that lead to the given property.
 */
class FindChaining {
  /**
   * Constructor for the FindChaining class.
   * @param endpoint - The endpoint to send the request to.
   */
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  /** Properties for the FindChaining class */
  props(props) {
    this.endpoint += `&props=${props}`;
    return this;
  }
  depth(depth) {
    this.endpoint += `&depth=${depth}`;
    return this;
  }
  sort(sort) {
    this.endpoint += `&sort=${sort}`;
    return this;
  }
  limit(limit) {
    this.endpoint += `&limit=${limit}`;
    return this;
  }
  skip(skip) {
    this.endpoint += `&skip=${skip}`;
    return this;
  }
  status(status) {
    this.endpoint += `&status=${status}`;
    return this;
  }
  after(after) {
    this.endpoint += `&after=${after}`;
    return this;
  }
  showMetafields(showMetafields) {
    this.endpoint += `&show_metafields=${showMetafields}`;
    return this;
  }
  useCache(useCache) {
    this.endpoint += `&use_cache=${useCache}`;
    return this;
  }

  /**
   * A wrapper around the `promiser` function that returns a promise that resolves with the result of the request.
   * @param endpoint - The endpoint to request.
   * @returns A promise that resolves with the result of the request.
   */
  async then(resolve, reject) {
    promiser(this.endpoint).then(res => resolve(res, null)).catch(err => {
      if (typeof reject === 'function') {
        reject(err);
      } else {
        resolve(null, err);
      }
    });
  }
}
module.exports = {
  addParamsToObjectsEndpoint,
  FindChaining
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcm9taXNlciIsInJlcXVpcmUiLCJhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCIsImVuZHBvaW50IiwicGFyYW1zIiwiZXAiLCJsaW1pdCIsInNraXAiLCJzdGF0dXMiLCJhZnRlciIsInNvcnQiLCJzaG93X21ldGFmaWVsZHMiLCJwcmV0dHkiLCJwcm9wcyIsInF1ZXJ5IiwiZW5jb2RlVVJJIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZV9jYWNoZSIsIkZpbmRDaGFpbmluZyIsImNvbnN0cnVjdG9yIiwiZGVwdGgiLCJzaG93TWV0YWZpZWxkcyIsInVzZUNhY2hlIiwidGhlbiIsInJlc29sdmUiLCJyZWplY3QiLCJyZXMiLCJjYXRjaCIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb21pc2VyID0gcmVxdWlyZSgnLi9wcm9taXNlcicpO1xuXG4vKipcbiAqIFRha2VzIGluIGFuIGVuZHBvaW50IGFuZCBhZGRzIHRoZSBwYXJhbXMgdG8gdGhlIGVuZCBvZiB0aGUgZW5kcG9pbnQuXG4gKiBAcGFyYW0gZW5kcG9pbnQgLSB0aGUgZW5kcG9pbnQgdG8gYWRkIHRoZSBwYXJhbXMgdG8uXG4gKiBAcGFyYW0gcGFyYW1zIC0gdGhlIHBhcmFtcyB0byBhZGQgdG8gdGhlIGVuZHBvaW50LlxuICogQHJldHVybnMgdGhlIGVuZHBvaW50IHdpdGggdGhlIHBhcmFtcyBhZGRlZC5cbiAqL1xuY29uc3QgYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQgPSAoZW5kcG9pbnQsIHBhcmFtcykgPT4ge1xuICBsZXQgZXAgPSBlbmRwb2ludDtcbiAgLyoqXG4gICAqID4gQ2hlY2tzIGlmIHRoZSBwYXJhbWV0ZXIgaXMgcHJlc2VudFxuICAgKiA+IEFkZCB0aGUgcGFyYW1ldGVyIHRvIHRoZSBlbmQgb2YgdGhlIFVSTCBpZiBpdCBpcyBwcmVzZW50LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgb2JqZWN0LlxuICAgKiBAcmV0dXJucyBOb25lXG4gICAqL1xuICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgIGVwICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YDtcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgZXAgKz0gYCZza2lwPSR7cGFyYW1zLnNraXB9YDtcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5zdGF0dXMpIHtcbiAgICBlcCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YDtcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5hZnRlcikge1xuICAgIGVwICs9IGAmYWZ0ZXI9JHtwYXJhbXMuYWZ0ZXJ9YDtcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5zb3J0KSB7XG4gICAgZXAgKz0gYCZzb3J0PSR7cGFyYW1zLnNvcnR9YDtcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5zaG93X21ldGFmaWVsZHMpIHtcbiAgICBlcCArPSBgJnNob3dfbWV0YWZpZWxkcz0ke3BhcmFtcy5zaG93X21ldGFmaWVsZHN9YDtcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV0dHkpIHtcbiAgICBlcCArPSBgJnByZXR0eT0ke3BhcmFtcy5wcmV0dHl9YDtcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgIGVwICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YDtcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5xdWVyeSkge1xuICAgIGVwICs9IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocGFyYW1zLnF1ZXJ5KSl9YDtcbiAgfVxuICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGVwICs9IGAmdXNlX2NhY2hlPSR7cGFyYW1zLnVzZV9jYWNoZX1gO1xuICB9XG4gIHJldHVybiBlcDtcbn07XG5cbi8qKlxuICogRmluZHMgdGhlIGNoYWluIG9mIHByb3BlcnRpZXMgdGhhdCBsZWFkIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAqIEBwYXJhbSBlbmRwb2ludCAtIHRoZSBlbmRwb2ludCB0byBxdWVyeSBmb3IgdGhlIGNoYWluIG9mIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgY2hhaW4gb2YgcHJvcGVydGllcyB0aGF0IGxlYWQgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxuICovXG5jbGFzcyBGaW5kQ2hhaW5pbmcge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoZSBGaW5kQ2hhaW5pbmcgY2xhc3MuXG4gICAqIEBwYXJhbSBlbmRwb2ludCAtIFRoZSBlbmRwb2ludCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZW5kcG9pbnQpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gZW5kcG9pbnQ7XG4gIH1cblxuICAvKiogUHJvcGVydGllcyBmb3IgdGhlIEZpbmRDaGFpbmluZyBjbGFzcyAqL1xuICBwcm9wcyhwcm9wcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BzfWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXB0aChkZXB0aCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZkZXB0aD0ke2RlcHRofWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzb3J0KHNvcnQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc29ydD0ke3NvcnR9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmxpbWl0PSR7bGltaXR9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNraXAoc2tpcCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZza2lwPSR7c2tpcH1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdHVzKHN0YXR1cykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtzdGF0dXN9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFmdGVyKGFmdGVyKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmFmdGVyPSR7YWZ0ZXJ9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNob3dNZXRhZmllbGRzKHNob3dNZXRhZmllbGRzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNob3dfbWV0YWZpZWxkcz0ke3Nob3dNZXRhZmllbGRzfWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1c2VDYWNoZSh1c2VDYWNoZSkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHt1c2VDYWNoZX1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgd3JhcHBlciBhcm91bmQgdGhlIGBwcm9taXNlcmAgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIGVuZHBvaW50IC0gVGhlIGVuZHBvaW50IHRvIHJlcXVlc3QuXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgcmVxdWVzdC5cbiAgICovXG4gIGFzeW5jIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJvbWlzZXIodGhpcy5lbmRwb2ludClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlc29sdmUocmVzLCBudWxsKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShudWxsLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQsIEZpbmRDaGFpbmluZyB9O1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsQ0FBQ0MsUUFBUSxFQUFFQyxNQUFNLEtBQUs7RUFDdkQsSUFBSUMsRUFBRSxHQUFHRixRQUFRO0VBQ2pCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLElBQUlDLE1BQU0sSUFBSUEsTUFBTSxDQUFDRSxLQUFLLEVBQUU7SUFDMUJELEVBQUUsSUFBSyxVQUFTRCxNQUFNLENBQUNFLEtBQU0sRUFBQztFQUNoQztFQUNBLElBQUlGLE1BQU0sSUFBSUEsTUFBTSxDQUFDRyxJQUFJLEVBQUU7SUFDekJGLEVBQUUsSUFBSyxTQUFRRCxNQUFNLENBQUNHLElBQUssRUFBQztFQUM5QjtFQUNBLElBQUlILE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxNQUFNLEVBQUU7SUFDM0JILEVBQUUsSUFBSyxXQUFVRCxNQUFNLENBQUNJLE1BQU8sRUFBQztFQUNsQztFQUNBLElBQUlKLE1BQU0sSUFBSUEsTUFBTSxDQUFDSyxLQUFLLEVBQUU7SUFDMUJKLEVBQUUsSUFBSyxVQUFTRCxNQUFNLENBQUNLLEtBQU0sRUFBQztFQUNoQztFQUNBLElBQUlMLE1BQU0sSUFBSUEsTUFBTSxDQUFDTSxJQUFJLEVBQUU7SUFDekJMLEVBQUUsSUFBSyxTQUFRRCxNQUFNLENBQUNNLElBQUssRUFBQztFQUM5QjtFQUNBLElBQUlOLE1BQU0sSUFBSUEsTUFBTSxDQUFDTyxlQUFlLEVBQUU7SUFDcENOLEVBQUUsSUFBSyxvQkFBbUJELE1BQU0sQ0FBQ08sZUFBZ0IsRUFBQztFQUNwRDtF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