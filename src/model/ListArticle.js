/**
 * Lettera
 * KSF Media's articles service
 *
 * The version of the OpenAPI document: 2.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ArticleType', 'model/ArticleTypeDetails', 'model/Author', 'model/ImageInfo', 'model/Paper', 'model/RelatedArticle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArticleType'), require('./ArticleTypeDetails'), require('./Author'), require('./ImageInfo'), require('./Paper'), require('./RelatedArticle'));
  } else {
    // Browser globals (root is window)
    if (!root.Lettera) {
      root.Lettera = {};
    }
    root.Lettera.ListArticle = factory(root.Lettera.ApiClient, root.Lettera.ArticleType, root.Lettera.ArticleTypeDetails, root.Lettera.Author, root.Lettera.ImageInfo, root.Lettera.Paper, root.Lettera.RelatedArticle);
  }
}(this, function(ApiClient, ArticleType, ArticleTypeDetails, Author, ImageInfo, Paper, RelatedArticle) {
  'use strict';



  /**
   * The ListArticle model module.
   * @module model/ListArticle
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ListArticle</code>.
   * @alias module:model/ListArticle
   * @class
   * @param uuid {String} 
   * @param title {String} 
   * @param authors {Array.<module:model/Author>} 
   * @param tags {Array.<String>} 
   * @param premium {Boolean} 
   * @param publishingTime {String} 
   * @param relatedArticles {Array.<module:model/RelatedArticle>} 
   * @param articleType {module:model/ArticleType} 
   * @param paper {module:model/Paper} 
   */
  var exports = function(uuid, title, authors, tags, premium, publishingTime, relatedArticles, articleType, paper) {
    var _this = this;

    _this['uuid'] = uuid;
    _this['title'] = title;
    _this['authors'] = authors;
    _this['tags'] = tags;
    _this['premium'] = premium;
    _this['publishingTime'] = publishingTime;
    _this['relatedArticles'] = relatedArticles;
    _this['articleType'] = articleType;
    _this['paper'] = paper;
  };

  /**
   * Constructs a <code>ListArticle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListArticle} obj Optional instance to populate.
   * @return {module:model/ListArticle} The populated <code>ListArticle</code> instance.
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
      if (data.hasOwnProperty('authors')) {
        obj['authors'] = ApiClient.convertToType(data['authors'], [Author]);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('preamble')) {
        obj['preamble'] = ApiClient.convertToType(data['preamble'], 'String');
      }
      if (data.hasOwnProperty('listImage')) {
        obj['listImage'] = ImageInfo.constructFromObject(data['listImage']);
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
      if (data.hasOwnProperty('relatedArticles')) {
        obj['relatedArticles'] = ApiClient.convertToType(data['relatedArticles'], [RelatedArticle]);
      }
      if (data.hasOwnProperty('articleType')) {
        obj['articleType'] = ArticleType.constructFromObject(data['articleType']);
      }
      if (data.hasOwnProperty('articleTypeDetails')) {
        obj['articleTypeDetails'] = ArticleTypeDetails.constructFromObject(data['articleTypeDetails']);
      }
      if (data.hasOwnProperty('paper')) {
        obj['paper'] = Paper.constructFromObject(data['paper']);
      }
      if (data.hasOwnProperty('shareUrl')) {
        obj['shareUrl'] = ApiClient.convertToType(data['shareUrl'], 'String');
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
   * @member {Array.<module:model/Author>} authors
   */
  exports.prototype['authors'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {String} preamble
   */
  exports.prototype['preamble'] = undefined;
  /**
   * @member {module:model/ImageInfo} listImage
   */
  exports.prototype['listImage'] = undefined;
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
   * @member {Array.<module:model/RelatedArticle>} relatedArticles
   */
  exports.prototype['relatedArticles'] = undefined;
  /**
   * @member {module:model/ArticleType} articleType
   */
  exports.prototype['articleType'] = undefined;
  /**
   * @member {module:model/ArticleTypeDetails} articleTypeDetails
   */
  exports.prototype['articleTypeDetails'] = undefined;
  /**
   * @member {module:model/Paper} paper
   */
  exports.prototype['paper'] = undefined;
  /**
   * @member {String} shareUrl
   */
  exports.prototype['shareUrl'] = undefined;



  return exports;
}));


