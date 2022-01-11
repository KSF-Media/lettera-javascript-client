/**
 * Lettera
 * <h2>KSF Media's articles service</h2> Changelog for V3: <ul><li>Unified <code>ListArticle</code> and <code>RelatedArticle</code> into a single type <code>ArticleStub</code>. NOTE: In contrast to the old types, <code>ArticleStub.relatedArticles</code> is now an optional value.</li> <li>Added endpoint <code>/article/{uuid}/stub</code></li> <li>Removed deprecated endpoint <code>/article/search</code></li> </ul> 
 *
 * The version of the OpenAPI document: 3.0.0
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
    define(['ApiClient', 'model/ArticleType', 'model/ArticleTypeDetails', 'model/Author', 'model/ImageInfo', 'model/Paper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArticleType'), require('./ArticleTypeDetails'), require('./Author'), require('./ImageInfo'), require('./Paper'));
  } else {
    // Browser globals (root is window)
    if (!root.Lettera) {
      root.Lettera = {};
    }
    root.Lettera.ArticleStub = factory(root.Lettera.ApiClient, root.Lettera.ArticleType, root.Lettera.ArticleTypeDetails, root.Lettera.Author, root.Lettera.ImageInfo, root.Lettera.Paper);
  }
}(this, function(ApiClient, ArticleType, ArticleTypeDetails, Author, ImageInfo, Paper) {
  'use strict';



  /**
   * The ArticleStub model module.
   * @module model/ArticleStub
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ArticleStub</code>.
   * @alias module:model/ArticleStub
   * @class
   * @param uuid {String} 
   * @param title {String} 
   * @param articleTitle {String} 
   * @param authors {Array.<module:model/Author>} 
   * @param tags {Array.<String>} 
   * @param premium {Boolean} 
   * @param publishingTime {String} 
   * @param articleType {module:model/ArticleType} 
   * @param paper {module:model/Paper} 
   * @param liveReporting {Boolean} 
   */
  var exports = function(uuid, title, articleTitle, authors, tags, premium, publishingTime, articleType, paper, liveReporting) {
    var _this = this;

    _this['uuid'] = uuid;
    _this['title'] = title;
    _this['articleTitle'] = articleTitle;
    _this['authors'] = authors;
    _this['tags'] = tags;
    _this['premium'] = premium;
    _this['publishingTime'] = publishingTime;
    _this['articleType'] = articleType;
    _this['paper'] = paper;
    _this['liveReporting'] = liveReporting;
  };

  /**
   * Constructs a <code>ArticleStub</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArticleStub} obj Optional instance to populate.
   * @return {module:model/ArticleStub} The populated <code>ArticleStub</code> instance.
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
      if (data.hasOwnProperty('articleTitle')) {
        obj['articleTitle'] = ApiClient.convertToType(data['articleTitle'], 'String');
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
      if (data.hasOwnProperty('mainImage')) {
        obj['mainImage'] = ImageInfo.constructFromObject(data['mainImage']);
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
        obj['relatedArticles'] = ApiClient.convertToType(data['relatedArticles'], [ArticleStub]);
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
      if (data.hasOwnProperty('liveReporting')) {
        obj['liveReporting'] = ApiClient.convertToType(data['liveReporting'], 'Boolean');
      }
      if (data.hasOwnProperty('articlePriority')) {
        obj['articlePriority'] = ApiClient.convertToType(data['articlePriority'], 'Number');
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
   * @member {String} articleTitle
   */
  exports.prototype['articleTitle'] = undefined;
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
   * @member {module:model/ImageInfo} mainImage
   */
  exports.prototype['mainImage'] = undefined;
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
   * @member {Array.<module:model/ArticleStub>} relatedArticles
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
  /**
   * @member {Boolean} liveReporting
   */
  exports.prototype['liveReporting'] = undefined;
  /**
   * @member {Number} articlePriority
   */
  exports.prototype['articlePriority'] = undefined;



  return exports;
}));

