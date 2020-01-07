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
import CategoryHierarchy from '../model/CategoryHierarchy';

/**
* Categories service.
* @module api/CategoriesApi
* @version 1.0.0
*/
export default class CategoriesApi {

    /**
    * Constructs a new CategoriesApi. 
    * @alias module:api/CategoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the categoriesGet operation.
     * @callback module:api/CategoriesApi~categoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CategoryHierarchy>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read categories
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.paper 
     * @param {module:api/CategoriesApi~categoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CategoryHierarchy>}
     */
    categoriesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'paper': opts['paper']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = [CategoryHierarchy];
      return this.apiClient.callApi(
        '/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
