/**
 * Lettera
 * KSF Media's articles service
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Article'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Article'));
  } else {
    // Browser globals (root is window)
    if (!root.Lettera) {
      root.Lettera = {};
    }
    root.Lettera.ListsApi = factory(root.Lettera.ApiClient, root.Lettera.Article);
  }
}(this, function(ApiClient, Article) {
  'use strict';

  /**
   * Lists service.
   * @module api/ListsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ListsApi. 
   * @alias module:api/ListsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listGet operation.
     * @callback module:api/ListsApi~listGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Article>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ListsApi~listGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Article>}
     */
    this.listGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Article];

      return this.apiClient.callApi(
        '/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
