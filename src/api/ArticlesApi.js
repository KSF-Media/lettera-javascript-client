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
import Article from '../model/Article';

/**
* Articles service.
* @module api/ArticlesApi
* @version 1.0.0
*/
export default class ArticlesApi {

    /**
    * Constructs a new ArticlesApi. 
    * @alias module:api/ArticlesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the articleSearchGet operation.
     * @callback module:api/ArticlesApi~articleSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Article>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search article by content. It's a freetext search, so the `contentQuery` may be whatever string or sentence to search for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start 
     * @param {Number} opts.limit 
     * @param {module:model/String} opts.paper 
     * @param {String} opts.contentQuery 
     * @param {module:api/ArticlesApi~articleSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Article>}
     */
    articleSearchGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
        'paper': opts['paper'],
        'contentQuery': opts['contentQuery']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = [Article];
      return this.apiClient.callApi(
        '/article/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the articleUuidGet operation.
     * @callback module:api/ArticlesApi~articleUuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Article} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch article by UUID.   Notes about the images:   The image URLs point to our image scaler, and are returned without no scaling parameters.  However, if wanted, `width` and `height` parameters can be added to the querystring of the URL.  Also in list views, to ensure same size, it might be useful to crop the images by using the parameter `function=hardcrop`
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {Boolean} opts.textonly  (default to false)
     * @param {module:api/ArticlesApi~articleUuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Article}
     */
    articleUuidGet(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling articleUuidGet");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
        'textonly': opts['textonly']
      };
      let headerParams = {
        'AuthUser': opts['authUser'],
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = Article;
      return this.apiClient.callApi(
        '/article/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
