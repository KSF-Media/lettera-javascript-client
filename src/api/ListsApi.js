/**
 * Lettera
 * KSF Media's articles service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ListArticle from '../model/ListArticle';

/**
* Lists service.
* @module api/ListsApi
* @version 1.0.0
*/
export default class ListsApi {

    /**
    * Constructs a new ListsApi. 
    * @alias module:api/ListsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the frontpageGet operation.
     * @callback module:api/ListsApi~frontpageGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListArticle>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list for a front page
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start 
     * @param {Number} opts.limit 
     * @param {module:model/String} opts.category 
     * @param {module:api/ListsApi~frontpageGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListArticle>}
     */
    frontpageGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
        'category': opts['category']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = [ListArticle];
      return this.apiClient.callApi(
        '/frontpage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the latestGet operation.
     * @callback module:api/ListsApi~latestGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListArticle>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of latest articles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start 
     * @param {Number} opts.limit 
     * @param {module:api/ListsApi~latestGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListArticle>}
     */
    latestGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = [ListArticle];
      return this.apiClient.callApi(
        '/latest', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mostreadGet operation.
     * @callback module:api/ListsApi~mostreadGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListArticle>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of most read articles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start 
     * @param {Number} opts.limit 
     * @param {module:api/ListsApi~mostreadGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListArticle>}
     */
    mostreadGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = [ListArticle];
      return this.apiClient.callApi(
        '/mostread', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
