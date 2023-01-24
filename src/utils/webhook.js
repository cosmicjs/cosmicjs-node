const { URI } = require('../constants/env.constants');
const HTTP_METHODS = require('../constants/httpMethods.constants');
const { requestHandler } = require('../helpers/requestHandler');

/**
 * Returns a WebhookMethods object that can be used to interact with the webhooks API.
 * @param bucketConfig - The bucket configuration object.
 * @returns A WebhookMethods object.
 */
const webhookMethods = (bucketConfig) => ({
  /**
   * Gets the webhooks for the current bucket.
   * @returns A promise that resolves to the webhooks for the current bucket.
   */
  getWebhooks: () => {
    const endpoint = `${URI}/${bucketConfig.slug}/webhooks`;
    return requestHandler(HTTP_METHODS.GET, endpoint);
  },
  /**
   * Adds a webhook to the bucket.
   * @param params - The webhook parameters.
   * @returns The response from the API.
   */
  addWebhook: (params) => {
    const endpoint = `${URI}/${bucketConfig.slug}/webhooks`;
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
  deleteWebhook: (params) => {
    const endpoint = `${URI}/${bucketConfig.slug}/webhooks/${params.id}`;
    return requestHandler(HTTP_METHODS.DELETE, endpoint, bucketConfig);
  },
});

module.exports = webhookMethods;
