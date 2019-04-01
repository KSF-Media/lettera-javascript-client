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
    define(['ApiClient', 'model/Author', 'model/Block', 'model/ImageInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Author'), require('./Block'), require('./ImageInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Lettera) {
      root.Lettera = {};
    }
    root.Lettera.Article = factory(root.Lettera.ApiClient, root.Lettera.Author, root.Lettera.Block, root.Lettera.ImageInfo);
  }
}(this, function(ApiClient, Author, Block, ImageInfo) {
  'use strict';



  /**
   * The Article model module.
   * @module model/Article
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Article</code>.
   * @alias module:model/Article
   * @class
   * @param uuid {String} 
   * @param title {String} 
   * @param author {module:model/Author} 
   * @param tags {Array.<String>} 
   * @param body {Array.<module:model/Block>} 
   * @param premium {Boolean} 
   * @param publishingTime {String} 
   */
  var exports = function(uuid, title, author, tags, body, premium, publishingTime) {
    var _this = this;

    _this['uuid'] = uuid;
    _this['title'] = title;
    _this['author'] = author;
    _this['tags'] = tags;
    _this['body'] = body;
    _this['premium'] = premium;
    _this['publishingTime'] = publishingTime;
  };

  /**
   * Constructs a <code>Article</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Article} obj Optional instance to populate.
   * @return {module:model/Article} The populated <code>Article</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = Author.constructFromObject(data['author']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('preamble')) {
        obj['preamble'] = ApiClient.convertToType(data['preamble'], 'String');
      }
      if (data.hasOwnProperty('mainImage')) {
        obj['mainImage'] = ImageInfo.constructFromObject(data['mainImage']);
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], [Block]);
      }
      if (data.hasOwnProperty('premium')) {
        obj['premium'] = ApiClient.convertToType(data['premium'], 'Boolean');
      }
      if (data.hasOwnProperty('publishingTime')) {
        obj['publishingTime'] = ApiClient.convertToType(data['publishingTime'], 'String');
      }
      if (data.hasOwnProperty('updateTime')) {
        obj['updateTime'] = ApiClient.convertToType(data['updateTime'], 'String');
      }
      if (data.hasOwnProperty('externalScripts')) {
        obj['externalScripts'] = ApiClient.convertToType(data['externalScripts'], ['String']);
      }
      if (data.hasOwnProperty('relatedArticles')) {
        obj['relatedArticles'] = ApiClient.convertToType(data['relatedArticles'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:model/Author} author
   */
  exports.prototype['author'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {String} preamble
   */
  exports.prototype['preamble'] = undefined;
  /**
   * @member {module:model/ImageInfo} mainImage
   */
  exports.prototype['mainImage'] = undefined;
  /**
   * @member {Array.<module:model/Block>} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {Boolean} premium
   */
  exports.prototype['premium'] = undefined;
  /**
   * @member {String} publishingTime
   */
  exports.prototype['publishingTime'] = undefined;
  /**
   * @member {String} updateTime
   */
  exports.prototype['updateTime'] = undefined;
  /**
   * @member {Array.<String>} externalScripts
   */
  exports.prototype['externalScripts'] = undefined;
  /**
   * @member {Array.<String>} relatedArticles
   */
  exports.prototype['relatedArticles'] = undefined;



  return exports;
}));


